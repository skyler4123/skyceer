class EducationLessonsController < ApplicationController
  before_action :set_education_lesson, only: %i[ show edit update destroy ]

  # GET /education_lessons or /education_lessons.json
  def index
    @education_lessons = EducationLesson.all
  end

  # GET /education_lessons/1 or /education_lessons/1.json
  def show
  end

  # GET /education_lessons/new
  def new
    @education_lesson = EducationLesson.new
  end

  # GET /education_lessons/1/edit
  def edit
  end

  # POST /education_lessons or /education_lessons.json
  def create
    @education_lesson = EducationLesson.new(education_lesson_params)

    respond_to do |format|
      if @education_lesson.save
        format.html { redirect_to @education_lesson, notice: "Education lesson was successfully created." }
        format.json { render :show, status: :created, location: @education_lesson }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_lesson.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_lessons/1 or /education_lessons/1.json
  def update
    respond_to do |format|
      if @education_lesson.update(education_lesson_params)
        format.html { redirect_to @education_lesson, notice: "Education lesson was successfully updated." }
        format.json { render :show, status: :ok, location: @education_lesson }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_lesson.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_lessons/1 or /education_lessons/1.json
  def destroy
    @education_lesson.destroy!

    respond_to do |format|
      format.html { redirect_to education_lessons_path, status: :see_other, notice: "Education lesson was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_lesson
      @education_lesson = EducationLesson.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_lesson_params
      params.expect(education_lesson: [ :title, :content, :education_school_id, :education_class_id, :education_subject_id, :education_teacher_id ])
    end
end
