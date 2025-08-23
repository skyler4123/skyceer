class EducationAdmin::EducationCategoriesController < EducationAdmin::EducationsController
  # GET /education_categories or /education_categories.json
  def index
    @education_categories = EducationCategory.where(user: @education_admin.education_school_user)
    @pagination, @education_categories = pagy(@education_categories)
    @json_data = {
      education_categories: @education_categories.as_json(only: %i[id name created_at updated_at])
    }.to_json
  end
end
