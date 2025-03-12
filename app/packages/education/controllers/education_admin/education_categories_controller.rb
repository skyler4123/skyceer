class EducationAdmin::EducationCategoriesController < EducationAdmin::EducationsController

  # GET /education_categories or /education_categories.json
  def index
    @education_categories = EducationCategory.joins(:education_schools).where(education_schools: @education_schools)
    @pagination, @education_categories = pagy(@education_categories)
    @data = {
      education_categories: @education_categories.as_json(only: %i[id name created_at updated_at]),
    }.to_json
  end

end
