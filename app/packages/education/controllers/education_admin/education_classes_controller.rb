class EducationAdmin::EducationClassesController < EducationAdmin::EducationsController
  # GET /education_classes or /education_classes.json
  def index
    # get education_schools from id params when it exists instead of current_education_school
    @education_schools = EducationSchool.find(params[:education_school_id]) if params[:education_school_id].present?
    @education_classes = EducationClass.where(education_school: @education_schools)
    @pagination, @education_classes = pagy(@education_classes)
    @json_data = {
      education_classes: @education_classes.as_json(only: %i[id education_school_id education_course_id name discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } })
    }.to_json
  end
end
