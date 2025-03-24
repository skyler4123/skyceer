class ReportCategoryAppointmentsController < ApplicationController
  before_action :set_report_category_appointment, only: %i[ show edit update destroy ]

  # GET /report_category_appointments or /report_category_appointments.json
  def index
    @report_category_appointments = ReportCategoryAppointment.all
  end

  # GET /report_category_appointments/1 or /report_category_appointments/1.json
  def show
  end

  # GET /report_category_appointments/new
  def new
    @report_category_appointment = ReportCategoryAppointment.new
  end

  # GET /report_category_appointments/1/edit
  def edit
  end

  # POST /report_category_appointments or /report_category_appointments.json
  def create
    @report_category_appointment = ReportCategoryAppointment.new(report_category_appointment_params)

    respond_to do |format|
      if @report_category_appointment.save
        format.html { redirect_to @report_category_appointment, notice: "Report category appointment was successfully created." }
        format.json { render :show, status: :created, location: @report_category_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @report_category_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /report_category_appointments/1 or /report_category_appointments/1.json
  def update
    respond_to do |format|
      if @report_category_appointment.update(report_category_appointment_params)
        format.html { redirect_to @report_category_appointment, notice: "Report category appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @report_category_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @report_category_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /report_category_appointments/1 or /report_category_appointments/1.json
  def destroy
    @report_category_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to report_category_appointments_path, status: :see_other, notice: "Report category appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_report_category_appointment
      @report_category_appointment = ReportCategoryAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def report_category_appointment_params
      params.expect(report_category_appointment: [ :report_category_id, :appoint_to_id, :appoint_to_type, :discarded_at ])
    end
end
