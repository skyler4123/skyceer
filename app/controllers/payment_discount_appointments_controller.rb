class PaymentDiscountAppointmentsController < ApplicationController
  before_action :set_payment_discount_appointment, only: %i[ show edit update destroy ]

  # GET /payment_discount_appointments or /payment_discount_appointments.json
  def index
    @payment_discount_appointments = PaymentDiscountAppointment.all
  end

  # GET /payment_discount_appointments/1 or /payment_discount_appointments/1.json
  def show
  end

  # GET /payment_discount_appointments/new
  def new
    @payment_discount_appointment = PaymentDiscountAppointment.new
  end

  # GET /payment_discount_appointments/1/edit
  def edit
  end

  # POST /payment_discount_appointments or /payment_discount_appointments.json
  def create
    @payment_discount_appointment = PaymentDiscountAppointment.new(payment_discount_appointment_params)

    respond_to do |format|
      if @payment_discount_appointment.save
        format.html { redirect_to @payment_discount_appointment, notice: "Payment discount appointment was successfully created." }
        format.json { render :show, status: :created, location: @payment_discount_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @payment_discount_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payment_discount_appointments/1 or /payment_discount_appointments/1.json
  def update
    respond_to do |format|
      if @payment_discount_appointment.update(payment_discount_appointment_params)
        format.html { redirect_to @payment_discount_appointment, notice: "Payment discount appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @payment_discount_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @payment_discount_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payment_discount_appointments/1 or /payment_discount_appointments/1.json
  def destroy
    @payment_discount_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to payment_discount_appointments_path, status: :see_other, notice: "Payment discount appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment_discount_appointment
      @payment_discount_appointment = PaymentDiscountAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def payment_discount_appointment_params
      params.expect(payment_discount_appointment: [ :payment_user_id, :payment_discount_id ])
    end
end
