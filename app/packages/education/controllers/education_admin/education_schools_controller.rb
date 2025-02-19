class EducationAdmin::EducationSchoolsController < EducationAdmin::EducationsController
  before_action :set_education_school, only: %i[ show edit update destroy education_schools]

  # GET /education_schools or /education_schools.json
  def index
    @education_schools = EducationSchool.joins(:education_admins).where(education_admins: @education_admins)
    @pagination, @education_schools = pagy(@education_schools)
    @data = {
      education_schools: @education_schools.as_json(include: [:user, :address]),
    }.to_json
  end

end
