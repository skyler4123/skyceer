class EducationStudent::EducationSubjectsController < EducationStudent::EducationsController

  # GET /education_subjects or /education_subjects.json
  def index
    @education_classes = EducationClass.joins(:education_students).where(education_students: @education_students)
    @education_subjects = EducationSubject.joins(:education_classes).where(education_classes: @education_classes)
    @pagination, @education_subjects = pagy(@education_subjects)
    @data = {
      education_subjects: @education_subjects.as_json(only: %i[id education_school_id name description discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } }),
    }.to_json
  end

end
