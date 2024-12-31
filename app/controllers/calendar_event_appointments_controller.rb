class CalendarEventAppointmentsController < ApplicationController
  before_action :set_calendar_event_appointment, only: %i[ show edit update destroy ]

  # GET /calendar_event_appointments or /calendar_event_appointments.json
  def index
    @calendar_event_appointments = CalendarEventAppointment.all
  end

  # GET /calendar_event_appointments/1 or /calendar_event_appointments/1.json
  def show
  end

  # GET /calendar_event_appointments/new
  def new
    @calendar_event_appointment = CalendarEventAppointment.new
  end

  # GET /calendar_event_appointments/1/edit
  def edit
  end

  # POST /calendar_event_appointments or /calendar_event_appointments.json
  def create
    @calendar_event_appointment = CalendarEventAppointment.new(calendar_event_appointment_params)

    respond_to do |format|
      if @calendar_event_appointment.save
        format.html { redirect_to @calendar_event_appointment, notice: "Calendar event appointment was successfully created." }
        format.json { render :show, status: :created, location: @calendar_event_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @calendar_event_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /calendar_event_appointments/1 or /calendar_event_appointments/1.json
  def update
    respond_to do |format|
      if @calendar_event_appointment.update(calendar_event_appointment_params)
        format.html { redirect_to @calendar_event_appointment, notice: "Calendar event appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @calendar_event_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @calendar_event_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /calendar_event_appointments/1 or /calendar_event_appointments/1.json
  def destroy
    @calendar_event_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to calendar_event_appointments_path, status: :see_other, notice: "Calendar event appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_calendar_event_appointment
      @calendar_event_appointment = CalendarEventAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def calendar_event_appointment_params
      params.expect(calendar_event_appointment: [ :calendar_group_id, :calendar_event_id, :discarded_at ])
    end
end
