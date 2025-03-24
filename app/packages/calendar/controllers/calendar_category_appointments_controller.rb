class CalendarCategoryAppointmentsController < ApplicationController
  before_action :set_calendar_category_appointment, only: %i[ show edit update destroy ]

  # GET /calendar_category_appointments or /calendar_category_appointments.json
  def index
    @calendar_category_appointments = CalendarCategoryAppointment.all
  end

  # GET /calendar_category_appointments/1 or /calendar_category_appointments/1.json
  def show
  end

  # GET /calendar_category_appointments/new
  def new
    @calendar_category_appointment = CalendarCategoryAppointment.new
  end

  # GET /calendar_category_appointments/1/edit
  def edit
  end

  # POST /calendar_category_appointments or /calendar_category_appointments.json
  def create
    @calendar_category_appointment = CalendarCategoryAppointment.new(calendar_category_appointment_params)

    respond_to do |format|
      if @calendar_category_appointment.save
        format.html { redirect_to @calendar_category_appointment, notice: "Calendar category appointment was successfully created." }
        format.json { render :show, status: :created, location: @calendar_category_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @calendar_category_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /calendar_category_appointments/1 or /calendar_category_appointments/1.json
  def update
    respond_to do |format|
      if @calendar_category_appointment.update(calendar_category_appointment_params)
        format.html { redirect_to @calendar_category_appointment, notice: "Calendar category appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @calendar_category_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @calendar_category_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /calendar_category_appointments/1 or /calendar_category_appointments/1.json
  def destroy
    @calendar_category_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to calendar_category_appointments_path, status: :see_other, notice: "Calendar category appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_calendar_category_appointment
      @calendar_category_appointment = CalendarCategoryAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def calendar_category_appointment_params
      params.expect(calendar_category_appointment: [ :calendar_category_id, :appoint_to_id, :appoint_to_type, :discarded_at ])
    end
end
