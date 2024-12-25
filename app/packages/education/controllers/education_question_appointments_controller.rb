class EducationQuestionAppointmentsController < EducationsController
  before_action :set_education_question_appointment, only: %i[ show edit update destroy ]

  # GET /education_question_appointments or /education_question_appointments.json
  def index
    @education_question_appointments = EducationQuestionAppointment.all
  end

  # GET /education_question_appointments/1 or /education_question_appointments/1.json
  def show
  end

  # GET /education_question_appointments/new
  def new
    @education_question_appointment = EducationQuestionAppointment.new
  end

  # GET /education_question_appointments/1/edit
  def edit
  end

  # POST /education_question_appointments or /education_question_appointments.json
  def create
    @education_question_appointment = EducationQuestionAppointment.new(education_question_appointment_params)

    respond_to do |format|
      if @education_question_appointment.save
        format.html { redirect_to @education_question_appointment, notice: "Education question appointment was successfully created." }
        format.json { render :show, status: :created, location: @education_question_appointment }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_question_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_question_appointments/1 or /education_question_appointments/1.json
  def update
    respond_to do |format|
      if @education_question_appointment.update(education_question_appointment_params)
        format.html { redirect_to @education_question_appointment, notice: "Education question appointment was successfully updated." }
        format.json { render :show, status: :ok, location: @education_question_appointment }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_question_appointment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_question_appointments/1 or /education_question_appointments/1.json
  def destroy
    @education_question_appointment.destroy!

    respond_to do |format|
      format.html { redirect_to education_question_appointments_path, status: :see_other, notice: "Education question appointment was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_question_appointment
      @education_question_appointment = EducationQuestionAppointment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_question_appointment_params
      params.expect(education_question_appointment: [ :education_question_id, :education_exam_id, :score, :time, :status, :anwser, :result ])
    end
end
