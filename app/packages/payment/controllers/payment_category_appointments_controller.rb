class PaymentCategoryAppointmentsController < ApplicationController
  before_action :set_payment_category_appointment, only: %i[ show edit update destroy ]

  # GET /payment_category_appointments or /payment_category_appointments.json
  def index
    @payment_category_appointments = PaymentCategoryAppointment.all
  end

  # GET /payment_category_appointments/1 or /payment_category_appointments/1.json
  def show
  end

  # GET /payment_category_appointments/new
  def new
    @payment_category_appointment = PaymentCategoryAppointment.new
  end

  # GET /payment_category_appointments/1/edit
  def edit
  end

  # POST /payment_category_appointments or /payment_category_appointments.json
  def create
    @payment_category_appointment = PaymentCategoryAppointment.new(payment_category_appointment_params)

    respond_to do |format|
      if @payment_category_appointment.save
        format.html { redirect_to @payment_category_appointment, notice: "Payment category appointment was successfully created." }
        format.json { render :show, status: :created, location: @payment_category_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @payment_category_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payment_category_appointments/1 or /payment_category_appointments/1.json
  def update
    respond_to do |format|
      if @payment_category_appointment.update(payment_category_appointment_params)
        format.html { redirect_to @payment_category_appointment, notice: "Payment category appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @payment_category_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @payment_category_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payment_category_appointments/1 or /payment_category_appointments/1.json
  def destroy
    @payment_category_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to payment_category_appointments_path, status: :see_other, notice: "Payment category appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment_category_appointment
      @payment_category_appointment = PaymentCategoryAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def payment_category_appointment_params
      params.expect(payment_category_appointment: [ :payment_category_id, :payment_category_appointmentable_id, :payment_category_appointmentable_type, :discarded_at ])
    end
end
