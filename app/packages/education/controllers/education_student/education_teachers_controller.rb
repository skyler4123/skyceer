require 'pagy/extras/elasticsearch_rails'

class EducationStudent::EducationTeachersController < EducationStudent::EducationsController

  # GET /education_teachers or /education_teachers.json
  def index
    @education_classes = EducationClass.joins(:education_students).where(education_students: @education_students)
    @education_teachers = EducationTeacher.joins(:education_classes).where(education_classes: @education_classes)
    @pagination, @education_teachers = pagy(@education_teachers)
    @data = {
      education_teachers: @education_teachers.as_json(include: [:education_schools, :education_classes])
    }.to_json
  end

end
