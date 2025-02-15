class EducationStudent::EducationSubjectsController < EducationStudent::EducationsController

  # GET /education_subjects or /education_subjects.json
  def index
    # get education_schools from id params when it exists instead of current_education_school
    if params[:education_school_id].present?
      @education_schools = EducationSchool.find(params[:education_school_id])
      @education_subjects = EducationSubject.where(education_school: @education_schools)
    end

    # get from education_class_id params when it exists
    if params[:education_class_id].present?
      @education_classes = EducationClass.where(id: params[:education_class_id])
      @education_subjects = EducationSubject.joins(:education_classes).where(education_classes: @education_classes)
    end

    # if education_subject is not found, get from current_education_school
    @education_subjects = EducationSubject.where(education_school: @education_schools) if @education_subjects.blank?
    @pagination, @education_subjects = pagy(@education_subjects)
    @data = {
      education_subjects: @education_subjects.as_json(only: %i[id education_school_id name description discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } }),
    }.to_json
  end

end
