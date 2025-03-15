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
    @education_categories = EducationCategory.where(user: current_user)
  end

  def select_options_schools_and_categories(education_schools)
    @select_options_schools_and_categories ||= []
    education_schools.each do |school|
      school.education_categories.each do |category|
        @select_options_schools_and_categories << ["#{school.name} - #{category.name}", category.id]
      end
    end
    @select_options_schools_and_categories
  end

  def check_category_belongs_to_school(categories, schools)
    return true if categories.blank?
    categories.each do |category|
      return false if schools.exclude?(category.education_school)
    end
    true
  end
end
