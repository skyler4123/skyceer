class EducationStudent::EducationCoursesController < EducationStudent::EducationsController

  # GET /education_courses or /education_courses.json
  def index
    @education_classes = EducationClass.joins(:education_students).where(education_students: @education_students)
    @education_courses = EducationCourse.joins(:education_classes).where(education_classes: @education_classes)
    @pagination, @education_courses = pagy(@education_courses)
    @data = {
      education_courses: @education_courses.as_json(only: %i[id education_school_id name description discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } }),
    }.to_json
  end

end
