require 'pagy/extras/elasticsearch_rails'

class EducationTeacher::EducationStudentsController < EducationTeacher::EducationsController

  # GET /education_students or /education_students.json
  def index
    @education_classes = EducationClass.joins(:education_teachers).where(education_teachers: @education_teachers)
    @education_students = EducationStudent.joins(:education_classes).where(education_classes: @education_classes)
    @pagination, @education_students = pagy(@education_students)
    @data = {
      education_students: @education_students.as_json(include: { education_schools: { only: [:id, :name] }, education_classes: { only: [:id, :name] } }, only: [:id, :name, :created_at, :updated_at]),
      education_classes: @education_classes.as_json(only: [:id, :name])
    }.to_json
  end

end
