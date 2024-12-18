class EducationShiftsController < ApplicationController
  before_action :set_education_shift, only: %i[ show edit update destroy ]

  # GET /education_shifts or /education_shifts.json
  def index
    @education_shifts = EducationShift.all
  end

  # GET /education_shifts/1 or /education_shifts/1.json
  def show
  end

  # GET /education_shifts/new
  def new
    @education_shift = EducationShift.new
  end

  # GET /education_shifts/1/edit
  def edit
  end

  # POST /education_shifts or /education_shifts.json
  def create
    @education_shift = EducationShift.new(education_shift_params)

    respond_to do |format|
      if @education_shift.save
        format.html { redirect_to @education_shift, notice: "Education shift was successfully created." }
        format.json { render :show, status: :created, location: @education_shift }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_shift.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_shifts/1 or /education_shifts/1.json
  def update
    respond_to do |format|
      if @education_shift.update(education_shift_params)
        format.html { redirect_to @education_shift, notice: "Education shift was successfully updated." }
        format.json { render :show, status: :ok, location: @education_shift }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_shift.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_shifts/1 or /education_shifts/1.json
  def destroy
    @education_shift.destroy!

    respond_to do |format|
      format.html { redirect_to education_shifts_path, status: :see_other, notice: "Education shift was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_shift
      @education_shift = EducationShift.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_shift_params
      params.expect(education_shift: [ :title, :location, :start_time, :end_time, :duration, :education_school_id, :education_class_id, :education_subject_id, :education_teacher_id ])
    end
end
