class EducationSchool::EducationTimeTablesController < EducationSchool::EducationsController
  def index
    @education_classes = EducationClass.where(education_school: @education_schools)
    @pagy, @education_classes = pagy(@education_classes)
  end
end
