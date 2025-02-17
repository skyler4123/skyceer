require 'pagy/extras/elasticsearch_rails'

class EducationTeacher::EducationStudentsController < EducationTeacher::EducationsController

  # GET /education_students or /education_students.json
  def index
    if params[:full_text_search].present?
      @education_students = EducationStudent.search(params[:full_text_search]).records.joins(:education_schools).where(education_schools: @education_schools)
    elsif params[:education_school_id].present? || params[:education_class_id].present?
      @education_students = @education_students.where(education_schools: {id: params[:education_school_id]}) if params[:education_school_id].present?
      @education_students = @education_students.includes(:education_classes).where(education_classes: {id: params[:education_class_id] }) if params[:education_class_id].present?
    end
    @education_students = @education_students.joins(:education_classes).select(:id, :name, :created_at, :updated_at)
    @pagination, @education_students = pagy(@education_students)
    @data = {
      education_students: @education_students.as_json(include: { education_schools: { only: [:id, :name] }, education_classes: { only: [:id, :name] } }, only: [:id, :name, :created_at, :updated_at]),
      education_classes: EducationClass.joins(:education_students).where(education_students: @education_students).as_json(only: [:id, :name])
    }.to_json
  end

end
