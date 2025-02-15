class EducationStudent::EducationClassesController < EducationStudent::EducationsController

  # GET /education_classes or /education_classes.json
  def index
    @education_classes = EducationClass.joins(:education_students).where(education_students: @education_students)
    @pagination, @education_classes = pagy(@education_classes)
    @data = {
      education_classes: @education_classes.as_json(only: %i[id education_school_id education_course_id name discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } }),
    }.to_json
  end

end
