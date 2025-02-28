class EducationStudent::EducationsController < EducationsController
  before_action :redirect_when_not_education_student
  before_action :set_education_students

  private

  def redirect_when_not_education_student
    render_not_found if current_user.education_role != "education_student"
  end

  def set_education_students
    @education_students = current_user.education_students
  end

end
