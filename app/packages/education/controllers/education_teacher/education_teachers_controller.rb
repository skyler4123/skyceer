require 'pagy/extras/elasticsearch_rails'

class EducationTeacher::EducationTeachersController < EducationTeacher::EducationsController
  before_action :set_education_teacher, only: %i[ show edit update destroy ]

  # GET /education_teachers or /education_teachers.json
  def index
    if params[:full_text_search].present?
      @education_teachers = EducationTeacher.search(params[:full_text_search]).records
    elsif params[:education_school_id].present?
      @education_teachers = EducationTeacher.where(education_school_id: params[:education_school_id])
    end
    @pagination, @education_teachers = pagy(@education_teachers)
    @json_data = {
      education_teachers: @education_teachers.as_json(include: [:education_schools, :education_classes, :education_subjects])
    }.to_json
  end

end
