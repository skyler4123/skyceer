class EducationTeacher::EducationsController < EducationsController
  before_action :redirect_when_not_education_teacher
  before_action :set_education_teachers
  before_action :set_education_schools
  before_action :set_education_classes

  private

  def redirect_when_not_education_teacher
    render_not_found if current_user.education_role != "education_teacher"
  end

  def set_education_teachers
    @education_teachers = current_user.education_teachers
  end

  def set_education_schools
    @education_schools = EducationSchool.joins(:education_teachers).where(education_teachers: { id: @education_teachers.ids })
  end

  def set_education_classes
    @education_classes = EducationClass.joins(:education_teachers).where(education_teachers: @education_teachers)
  end
end
