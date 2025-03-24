require 'pagy/extras/elasticsearch_rails'

class EducationStudent::EducationTeachersController < EducationStudent::EducationsController

  # GET /education_teachers or /education_teachers.json
  def index
    @education_teachers = @education_classes.education_teachers
    @pagination, @education_teachers = pagy(@education_teachers)
    @data = {
      education_teachers: @education_teachers.as_json(include: [:education_schools, :education_classes])
    }.to_json
  end

end
