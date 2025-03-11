class EducationAdmin::EducationsController < EducationsController
  before_action :redirect_when_not_education_admin
  before_action :set_education_admin
  before_action :set_education_schools

  private

  def redirect_when_not_education_admin
    render_not_found if current_user.education_role != "education_admin"
  end

  def set_education_admin
    @education_admin = current_user.education_admin
  end

  def set_education_schools
    @education_schools = EducationSchool.where(user_id: @education_admin.education_school_user_id)
  end

end
