class EducationStudent::EducationsController < EducationsController
  before_action :redirect_when_not_education_student
  before_action :set_education_schools

  private

  def redirect_when_not_education_student
    return redirect_to root_path if current_user.education_role != "education_student"
  end

  def set_education_schools
    educatio_students = current_user.education_students
    @education_schools = EducationSchool.joins(:education_students).where(education_students: educatio_students)
  end

end
