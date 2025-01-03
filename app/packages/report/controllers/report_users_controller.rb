class ReportUsersController < ApplicationController
  before_action :set_report_user, only: %i[ show edit update destroy ]

  # GET /report_users or /report_users.json
  def index
    @report_users = ReportUser.all
  end

  # GET /report_users/1 or /report_users/1.json
  def show
  end

  # GET /report_users/new
  def new
    @report_user = ReportUser.new
  end

  # GET /report_users/1/edit
  def edit
  end

  # POST /report_users or /report_users.json
  def create
    @report_user = ReportUser.new(report_user_params)

    respond_to do |format|
      if @report_user.save
        format.html { redirect_to @report_user, notice: "Report user was successfully created." }
        format.json { render :show, status: :created, location: @report_user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @report_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /report_users/1 or /report_users/1.json
  def update
    respond_to do |format|
      if @report_user.update(report_user_params)
        format.html { redirect_to @report_user, notice: "Report user was successfully updated." }
        format.json { render :show, status: :ok, location: @report_user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @report_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /report_users/1 or /report_users/1.json
  def destroy
    @report_user.destroy!

    respond_to do |format|
      format.html { redirect_to report_users_path, status: :see_other, notice: "Report user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_report_user
      @report_user = ReportUser.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def report_user_params
      params.expect(report_user: [ :report_userable_id, :report_userable_type, :discarded_at ])
    end
end
