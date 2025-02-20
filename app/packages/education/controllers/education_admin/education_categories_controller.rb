class EducationAdmin::EducationCategoriesController < EducationAdmin::EducationsController

  # GET /education_categories or /education_categories.json
  def index
    @education_categories = EducationCategory.where(education_school: @education_schools)
    @pagination, @education_categories = pagy(@education_categories)
    @data = {
      education_categories: @education_categories.as_json(only: %i[id name education_school_id parent_category_id created_at updated_at], include: { education_school: { only: %i[id name] } }),
    }.to_json
  end

end
