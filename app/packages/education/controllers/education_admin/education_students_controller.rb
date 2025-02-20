require 'pagy/extras/elasticsearch_rails'

class EducationAdmin::EducationStudentsController < EducationAdmin::EducationsController

  # GET /education_students or /education_students.json
  def index

    @education_students = EducationStudent.joins(:education_schools).where(education_schools: @education_schools )
    @pagination, @education_students = pagy(@education_students)
    @data = {
      education_students: @education_students.as_json(include: { education_schools: { only: [:id, :name] }, education_classes: { only: [:id, :name] } }, only: [:id, :name, :created_at, :updated_at]),
      education_classes: EducationClass.where(education_school: @education_schools).as_json(only: [:id, :name])
    }.to_json
  end

end
