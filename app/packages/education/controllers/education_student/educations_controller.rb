class EducationStudent::EducationsController < EducationsController
  before_action :redirect_when_not_education_student
  before_action :set_education_students
  before_action :set_education_schools
  before_action :set_education_classes

  private

  def redirect_when_not_education_student
    render_not_found if current_user.education_role != "education_student"
  end

  def set_education_students
    @education_students ||= current_user.education_students
  end

  def set_education_schools
    @education_schools ||= EducationSchool.joins(:education_students).where(education_students: { id: @education_students.ids })
  end

  def set_education_classes
    @education_classes ||= EducationClass.joins(:education_students).where(education_students: { id: @education_students.ids })
  end
end
