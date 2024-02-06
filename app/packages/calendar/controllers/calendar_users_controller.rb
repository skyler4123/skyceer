class CalendarUsersController < ApplicationController
  before_action :set_calendar_user, only: %i[ show edit update destroy ]

  # GET /calendar_users or /calendar_users.json
  def index
    @calendar_users = CalendarUser.all
  end

  # GET /calendar_users/1 or /calendar_users/1.json
  def show
  end

  # GET /calendar_users/new
  def new
    @calendar_user = CalendarUser.new
  end

  # GET /calendar_users/1/edit
  def edit
  end

  # POST /calendar_users or /calendar_users.json
  def create
    @calendar_user = CalendarUser.new(calendar_user_params)

    respond_to do |format|
      if @calendar_user.save
        format.html { redirect_to calendar_user_url(@calendar_user), notice: "Calendar user was successfully created." }
        format.json { render :show, status: :created, location: @calendar_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @calendar_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /calendar_users/1 or /calendar_users/1.json
  def update
    respond_to do |format|
      if @calendar_user.update(calendar_user_params)
        format.html { redirect_to calendar_user_url(@calendar_user), notice: "Calendar user was successfully updated." }
        format.json { render :show, status: :ok, location: @calendar_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @calendar_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /calendar_users/1 or /calendar_users/1.json
  def destroy
    @calendar_user.destroy!

    respond_to do |format|
      format.html { redirect_to calendar_users_url, notice: "Calendar user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_calendar_user
      @calendar_user = CalendarUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def calendar_user_params
      params.require(:calendar_user).permit(:user_id, :name)
    end
end
