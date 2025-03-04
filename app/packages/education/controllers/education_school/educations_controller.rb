class EducationSchool::EducationsController < EducationsController
  before_action :redirect_when_not_education_school
  before_action :set_education_schools
  before_action :set_education_categories

  private

  def redirect_when_not_education_school
    render_not_found if current_user.education_role != "education_school"
  end

  def set_education_schools
    @education_schools = current_user.education_schools
  end

  def set_education_categories
    @education_categories = EducationCategory.joins(:education_school).where(education_school: @education_schools)
  end

end
