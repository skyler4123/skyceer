class EducationAdmin::EducationAdminsController < EducationAdmin::EducationsController
  
  # GET /education_admins or /education_admins.json
  def index
    @pagination, @education_admins = pagy(@education_admins)
    @data = {
      education_admins: @education_admins.as_json(include: { education_schools: { only: [:id, :name] } }, only: [:id, :name, :created_at, :updated_at])
    }.to_json

  end

  def show
    @data = {
      education_admin: @education_admin.as_json(include: { education_schools: { only: [:id, :name] } }, only: [:id, :name, :created_at, :updated_at])
    }.to_json
  end

end
