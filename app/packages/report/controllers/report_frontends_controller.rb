class ReportFrontendsController < ApplicationController
  before_action :set_report_frontend, only: %i[ show edit update destroy ]

  # GET /report_frontends or /report_frontends.json
  def index
    @report_frontends = ReportFrontend.all
  end

  # GET /report_frontends/1 or /report_frontends/1.json
  def show
  end

  # GET /report_frontends/new
  def new
    @report_frontend = ReportFrontend.new
  end

  # GET /report_frontends/1/edit
  def edit
  end

  # POST /report_frontends or /report_frontends.json
  def create
    @report_frontend = ReportFrontend.new(report_frontend_params)

    respond_to do |format|
      if @report_frontend.save
        format.html { redirect_to @report_frontend, notice: "Report frontend was successfully created." }
        format.json { render :show, status: :created, location: @report_frontend }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @report_frontend.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /report_frontends/1 or /report_frontends/1.json
  def update
    respond_to do |format|
      if @report_frontend.update(report_frontend_params)
        format.html { redirect_to @report_frontend, notice: "Report frontend was successfully updated." }
        format.json { render :show, status: :ok, location: @report_frontend }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @report_frontend.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /report_frontends/1 or /report_frontends/1.json
  def destroy
    @report_frontend.destroy!

    respond_to do |format|
      format.html { redirect_to report_frontends_path, status: :see_other, notice: "Report frontend was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_report_frontend
      @report_frontend = ReportFrontend.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def report_frontend_params
      params.expect(report_frontend: [ :report_owner_id, :url, :cookie, :status, :discarded_at ])
    end
end
