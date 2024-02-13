require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/chat_conversations", type: :request do
  
  # This should return the minimal set of attributes required to create a valid
  # ChatConversation. As you add validations to ChatConversation, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      ChatConversation.create! valid_attributes
      get chat_conversations_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      chat_conversation = ChatConversation.create! valid_attributes
      get chat_conversation_url(chat_conversation)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_chat_conversation_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      chat_conversation = ChatConversation.create! valid_attributes
      get edit_chat_conversation_url(chat_conversation)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new ChatConversation" do
        expect {
          post chat_conversations_url, params: { chat_conversation: valid_attributes }
        }.to change(ChatConversation, :count).by(1)
      end

      it "redirects to the created chat_conversation" do
        post chat_conversations_url, params: { chat_conversation: valid_attributes }
        expect(response).to redirect_to(chat_conversation_url(ChatConversation.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new ChatConversation" do
        expect {
          post chat_conversations_url, params: { chat_conversation: invalid_attributes }
        }.to change(ChatConversation, :count).by(0)
      end

    
      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post chat_conversations_url, params: { chat_conversation: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested chat_conversation" do
        chat_conversation = ChatConversation.create! valid_attributes
        patch chat_conversation_url(chat_conversation), params: { chat_conversation: new_attributes }
        chat_conversation.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the chat_conversation" do
        chat_conversation = ChatConversation.create! valid_attributes
        patch chat_conversation_url(chat_conversation), params: { chat_conversation: new_attributes }
        chat_conversation.reload
        expect(response).to redirect_to(chat_conversation_url(chat_conversation))
      end
    end

    context "with invalid parameters" do
    
      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        chat_conversation = ChatConversation.create! valid_attributes
        patch chat_conversation_url(chat_conversation), params: { chat_conversation: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested chat_conversation" do
      chat_conversation = ChatConversation.create! valid_attributes
      expect {
        delete chat_conversation_url(chat_conversation)
      }.to change(ChatConversation, :count).by(-1)
    end

    it "redirects to the chat_conversations list" do
      chat_conversation = ChatConversation.create! valid_attributes
      delete chat_conversation_url(chat_conversation)
      expect(response).to redirect_to(chat_conversations_url)
    end
  end
end