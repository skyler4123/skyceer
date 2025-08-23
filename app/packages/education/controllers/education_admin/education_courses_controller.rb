class EducationAdmin::EducationCoursesController < EducationAdmin::EducationsController
  # GET /education_courses or /education_courses.json
  def index
    # get education_schools from id params when it exists instead of current_education_school
    @education_schools = EducationSchool.find(params[:education_school_id]) if params[:education_school_id].present?
    @education_courses = EducationCourse.where(education_school: @education_schools)
    @pagination, @education_courses = pagy(@education_courses)
    @json_data = {
      education_courses: @education_courses.as_json(only: %i[id education_school_id name description discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } })
    }.to_json
  end
end
