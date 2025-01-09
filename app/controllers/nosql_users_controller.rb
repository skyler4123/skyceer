class NosqlUsersController < ApplicationController
  before_action :set_nosql_user, only: %i[ show edit update destroy ]

  # GET /nosql_users or /nosql_users.json
  def index
    @nosql_users = NosqlUser.all
  end

  # GET /nosql_users/1 or /nosql_users/1.json
  def show
  end

  # GET /nosql_users/new
  def new
    @nosql_user = NosqlUser.new
  end

  # GET /nosql_users/1/edit
  def edit
  end

  # POST /nosql_users or /nosql_users.json
  def create
    @nosql_user = NosqlUser.new(nosql_user_params)

    respond_to do |format|
      if @nosql_user.save
        format.html { redirect_to @nosql_user, notice: "Nosql user was successfully created." }
        format.json { render :show, status: :created, location: @nosql_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @nosql_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /nosql_users/1 or /nosql_users/1.json
  def update
    respond_to do |format|
      if @nosql_user.update(nosql_user_params)
        format.html { redirect_to @nosql_user, notice: "Nosql user was successfully updated." }
        format.json { render :show, status: :ok, location: @nosql_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @nosql_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /nosql_users/1 or /nosql_users/1.json
  def destroy
    @nosql_user.destroy!

    respond_to do |format|
      format.html { redirect_to nosql_users_path, status: :see_other, notice: "Nosql user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_nosql_user
      @nosql_user = NosqlUser.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def nosql_user_params
      params.expect(nosql_user: [ :user_id, :address_id, :name, :avatar, :role, :education_role ])
    end
end
