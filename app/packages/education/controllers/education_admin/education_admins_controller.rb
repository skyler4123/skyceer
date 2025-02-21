class EducationAdmin::EducationAdminsController < EducationAdmin::EducationsController
  before_action :set_education_admin, only: %i[ show edit update destroy ]

  # GET /education_admins or /education_admins.json
  def index
    @pagination, @education_admins = pagy(@education_admins)
    @data = {
      education_admins: @education_admins.as_json(include: { education_schools: { only: [:id, :name] } }, only: [:id, :name, :created_at, :updated_at])
    }.to_json
  end

end
