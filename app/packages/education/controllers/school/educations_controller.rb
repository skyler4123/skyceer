class School::EducationsController < EducationsController
  before_action :redirect_to_unless_education_school
  before_action :set_education_schools

  private

  def redirect_to_unless_education_school
    return redirect_to root_path if current_user.education_role != "school"
  end

  def set_education_schools
    @education_schools = current_user.education_schools
  end

end
