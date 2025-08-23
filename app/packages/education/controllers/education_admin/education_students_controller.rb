require "pagy/extras/elasticsearch_rails"

class EducationAdmin::EducationStudentsController < EducationAdmin::EducationsController
  # GET /education_students or /education_students.json
  def index
    @education_students = EducationStudent.all
    @education_students = @education_students.where(education_school_user: @education_school_user)
    @education_students = @education_students.joins(:education_schools).where(education_schools: { id: params[:education_school_id] }) if params[:education_school_id].present?
    @education_students = @education_students.joins(:education_classes).where(education_classes: { id: params[:education_class_id] }) if params[:education_class_id].present?
    @education_students = @education_students.select(:id, :name, :created_at, :updated_at)
    @pagination, @education_students = pagy(@education_students)
    @json_data = {
      education_students: @education_students.as_json(include: { education_schools: { only: [ :id, :name ] }, education_classes: { only: [ :id, :name ] } }, only: [ :id, :name, :created_at, :updated_at ]),
      selection_education_classes: EducationClass.where(education_school: @education_schools).as_json(only: [ :id, :name ]),
      selection_education_schools: @education_schools.as_json(only: [ :id, :name ])
    }.to_json
  end

  def import_view
  end

  def import
    return redirect_to import_view_education_students_path, error: "Please select a file to import" if params[:payload].nil?

    payload = JSON.parse(params[:payload])
    payload.each do |data|
      education_student = EducationStudent.new(data)
      education_student.education_school_user = current_user
      education_student.save!
    end

    redirect_to education_students_path, notice: "Education students were successfully imported."
  end
end
