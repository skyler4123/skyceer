class EducationTeacher::EducationCoursesController < EducationTeacher::EducationsController

  # GET /education_courses or /education_courses.json
  def index
    @education_classes = EducationClass.joins(:education_teachers).where(education_teachers: @education_teachers)
    @education_courses = EducationCourse.where(education_classes: @education_classes)
    @pagination, @education_courses = pagy(@education_courses)
    @data = {
      education_courses: @education_courses.as_json(only: %i[id education_school_id name description discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } }),
    }.to_json
  end

end
