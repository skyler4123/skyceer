class EducationTeacher::EducationsController < EducationsController
  before_action :redirect_when_not_education_teacher
  before_action :set_education_teachers

  private

  def redirect_when_not_education_teacher
    return redirect_to root_path if current_user.education_role != "education_teacher"
  end

  def set_education_teachers
    @education_teachers = current_user.education_teachers
  end

end
