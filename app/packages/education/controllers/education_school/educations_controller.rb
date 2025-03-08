class EducationSchool::EducationsController < EducationsController
  before_action :redirect_when_not_education_school
  before_action :set_education_schools
  before_action :set_education_categories

  def select_options_schools_and_categories
    @select_options_schools_and_categories ||= []
    @education_schools.each do |school|
      school.education_categories.each do |category|
        @select_options_schools_and_categories << ["#{school.name} - #{category.name}", category.id]
      end
    end
    @select_options_schools_and_categories
  end

  def check_category_belongs_to_school(categories, schools)
    categories.each do |category|
      return false if schools.exclude?(category.education_school)
    end
    true
  end

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
