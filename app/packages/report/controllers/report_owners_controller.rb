class ReportOwnersController < ApplicationController
  before_action :set_report_owner, only: %i[ show edit update destroy ]

  # GET /report_owners or /report_owners.json
  def index
    @report_owners = ReportOwner.all
  end

  # GET /report_owners/1 or /report_owners/1.json
  def show
  end

  # GET /report_owners/new
  def new
    @report_owner = ReportOwner.new
  end

  # GET /report_owners/1/edit
  def edit
  end

  # POST /report_owners or /report_owners.json
  def create
    @report_owner = ReportOwner.new(report_owner_params)

    respond_to do |format|
      if @report_owner.save
        format.html { redirect_to @report_owner, notice: "Report user was successfully created." }
        format.json { render :show, status: :created, location: @report_owner }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @report_owner.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /report_owners/1 or /report_owners/1.json
  def update
    respond_to do |format|
      if @report_owner.update(report_owner_params)
        format.html { redirect_to @report_owner, notice: "Report user was successfully updated." }
        format.json { render :show, status: :ok, location: @report_owner }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @report_owner.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /report_owners/1 or /report_owners/1.json
  def destroy
    @report_owner.destroy!

    respond_to do |format|
      format.html { redirect_to report_owners_path, status: :see_other, notice: "Report user was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_report_owner
      @report_owner = ReportOwner.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def report_owner_params
      params.expect(report_owner: [ :report_ownerable_id, :report_ownerable_type, :discarded_at ])
    end
end
