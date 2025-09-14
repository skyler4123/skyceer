require "pagy/extras/elasticsearch_rails"

class EducationStudent::EducationStudentsController < EducationStudent::EducationsController
  # GET /education_students or /education_students.json
  def index
    @pagination, @education_students = pagy(@education_students)
    @json_data = {
      education_students: @education_students.as_json(include: { education_schools: { only: [ :id, :name ] }, education_classes: { only: [ :id, :name ] } }, only: [ :id, :name, :created_at, :updated_at ]),
      selection_education_classes: EducationClass.joins(:education_students).where(education_students: @education_students).as_json(only: [ :id, :name ]),
      selection_education_schools: @education_schools.as_json(only: [ :id, :name ])
    }.to_json
  end
end
