class EducationAdmin::EducationsController < EducationsController
  before_action :redirect_when_not_education_admin
  before_action :set_education_admins
  before_action :set_education_schools

  private

  def redirect_when_not_education_admin
    return redirect_to root_path if current_user.education_role != "education_admin"
  end

  def set_education_admins
    @education_admins = current_user.education_admins
  end

  def set_education_schools
    @education_schools = EducationSchool.joins(:education_admins).where(education_admins: @education_admins)
  end

end
