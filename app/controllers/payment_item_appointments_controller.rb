class PaymentItemAppointmentsController < ApplicationController
  before_action :set_payment_item_appointment, only: %i[ show edit update destroy ]

  # GET /payment_item_appointments or /payment_item_appointments.json
  def index
    @payment_item_appointments = PaymentItemAppointment.all
  end

  # GET /payment_item_appointments/1 or /payment_item_appointments/1.json
  def show
  end

  # GET /payment_item_appointments/new
  def new
    @payment_item_appointment = PaymentItemAppointment.new
  end

  # GET /payment_item_appointments/1/edit
  def edit
  end

  # POST /payment_item_appointments or /payment_item_appointments.json
  def create
    @payment_item_appointment = PaymentItemAppointment.new(payment_item_appointment_params)

    respond_to do |format|
      if @payment_item_appointment.save
        format.html { redirect_to @payment_item_appointment, notice: "Payment item appointment was successfully created." }
        format.json { render :show, status: :created, location: @payment_item_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @payment_item_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payment_item_appointments/1 or /payment_item_appointments/1.json
  def update
    respond_to do |format|
      if @payment_item_appointment.update(payment_item_appointment_params)
        format.html { redirect_to @payment_item_appointment, notice: "Payment item appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @payment_item_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @payment_item_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payment_item_appointments/1 or /payment_item_appointments/1.json
  def destroy
    @payment_item_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to payment_item_appointments_path, status: :see_other, notice: "Payment item appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment_item_appointment
      @payment_item_appointment = PaymentItemAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def payment_item_appointment_params
      params.expect(payment_item_appointment: [ :seller_id, :seller_type, :payment_item_id, :payment_order_id, :item_quantity, :unit_price ])
    end
end
