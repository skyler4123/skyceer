class CategoryAppointmentsController < ApplicationController
  before_action :set_category_appointment, only: %i[ show edit update destroy ]

  # GET /category_appointments or /category_appointments.json
  def index
    @category_appointments = CategoryAppointment.all
  end

  # GET /category_appointments/1 or /category_appointments/1.json
  def show
  end

  # GET /category_appointments/new
  def new
    @category_appointment = CategoryAppointment.new
  end

  # GET /category_appointments/1/edit
  def edit
  end

  # POST /category_appointments or /category_appointments.json
  def create
    @category_appointment = CategoryAppointment.new(category_appointment_params)

    respond_to do |format|
      if @category_appointment.save
        format.html { redirect_to @category_appointment, notice: "Category appointment was successfully created." }
        format.json { render :show, status: :created, location: @category_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @category_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /category_appointments/1 or /category_appointments/1.json
  def update
    respond_to do |format|
      if @category_appointment.update(category_appointment_params)
        format.html { redirect_to @category_appointment, notice: "Category appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @category_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @category_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /category_appointments/1 or /category_appointments/1.json
  def destroy
    @category_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to category_appointments_path, status: :see_other, notice: "Category appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category_appointment
      @category_appointment = CategoryAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def category_appointment_params
      params.expect(category_appointment: [ :category_id, :appoint_to_id, :appoint_to_type ])
    end
end
