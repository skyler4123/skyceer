require 'pagy/extras/elasticsearch_rails'

class EducationAdmin::EducationTeachersController < EducationAdmin::EducationsController

  # GET /education_teachers or /education_teachers.json
  def index
    if params[:full_text_search].present?
      @education_teachers = EducationTeacher.search(params[:full_text_search]).records
    elsif params[:education_school_id].present?
      @education_teachers = EducationTeacher.where(education_school_id: params[:education_school_id])
    else
      @education_teachers = EducationTeacher.joins(:education_schools).where(education_schools: @education_schools)
    end
    @pagination, @education_teachers = pagy(@education_teachers)
    @data = {
      education_teachers: @education_teachers.as_json(include: [:education_schools, :education_classes])
    }.to_json
  end

end
