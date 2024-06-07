class ChatConversationsController < ApplicationController
  before_action :set_chat_conversation, only: %i[ show edit update destroy ]

  # GET /chat_conversations or /chat_conversations.json
  def index

    @chat_conversations = ChatConversation.all
    if params[:guess_user_id].present?
      @host_chat_user_id = Current.chat_user_id
      @guess_chat_user_id = Session.chat_user_id(user_id: params[:guess_user_id])
      chat_user_ids = [@host_chat_user_id, @guess_chat_user_id].sort
      # @chat_conversations = @chat_conversations.in(chat_user_ids: chat_user_ids)
      @chat_conversations = @chat_conversations.all(chat_user_ids: chat_user_ids)
      if @chat_conversations.empty?
        @chat_conversation = ChatConversation.create(chat_user_ids: chat_user_ids)
      else
        @chat_conversation = @chat_conversations.last
      end
    end 

    respond_to do |format|
      if @chat_conversations
        format.html { render :index, status: :ok}
        format.json { render :index, status: :created, location: @chat_conversation }
        format.turbo_stream
      end
    end


    # @chat_users = ChatUser.all
    # @chat_users = @chat_users.in(id: params[:ids]) if params[:ids].present?
    # if (params[:chat_conversation_id].present?)
    #   chat_conversation = ChatConversation.find(params[:chat_conversation_id])
    #   chat_user_ids = chat_conversation.chat_user_ids
    #   @chat_users = @chat_users.in(id: chat_user_ids)
    # end
  end

  # GET /chat_conversations/1 or /chat_conversations/1.json
  def show
    @chat_messages = @chat_conversation.chat_messages
    @pagy, @chat_messages = pagy_custom(@chat_messages, items: 3)
  end

  # GET /chat_conversations/new
  def new
    @chat_conversation = ChatConversation.new
  end

  # GET /chat_conversations/1/edit
  def edit
  end

  # POST /chat_conversations or /chat_conversations.json
  def create
    @chat_conversation = ChatConversation.new(chat_conversation_params)

    respond_to do |format|
      if @chat_conversation.save
        format.html { redirect_to chat_conversation_url(@chat_conversation), notice: "Chat conversation was successfully created." }
        format.json { render :show, status: :created, location: @chat_conversation }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @chat_conversation.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /chat_conversations/1 or /chat_conversations/1.json
  def update
    respond_to do |format|
      if @chat_conversation.update(chat_conversation_params)
        format.html { redirect_to chat_conversation_url(@chat_conversation), notice: "Chat conversation was successfully updated." }
        format.json { render :show, status: :ok, location: @chat_conversation }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @chat_conversation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /chat_conversations/1 or /chat_conversations/1.json
  def destroy
    @chat_conversation.destroy!

    respond_to do |format|
      format.html { redirect_to chat_conversations_url, notice: "Chat conversation was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_chat_conversation
      @chat_conversation = ChatConversation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def chat_conversation_params
      params.fetch(:chat_conversation, {})
    end
end
