class EducationSchool::EducationSchoolsController < EducationsController

  # GET /education_schools or /education_schools.json
  def index
    @education_schools = EducationSchool.where(user_id: Current.user_id)
    authorize [:education_school, @education_schools]
  end

end
