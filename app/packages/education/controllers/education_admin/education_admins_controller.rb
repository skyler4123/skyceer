class EducationAdmin::EducationAdminsController < EducationAdmin::EducationsController

  def show
    @data = {
      education_admin: @education_admin.as_json(include: { education_schools: { only: [:id, :name] } }, only: [:id, :name, :created_at, :updated_at])
    }.to_json
  end

end
