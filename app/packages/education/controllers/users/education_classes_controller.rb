class Users::EducationClassesController < EducationsController
  before_action :set_user

  # GET /education_classes or /education_classes.json
  def index
    if @user.education_role == 'teacher'
      @education_classes = @user.education_teachers.map(&:education_classes).flatten
    elsif @user.education_role == 'student'
      @education_classes = @user.education_students.map(&:education_classes).flatten
    end
  end

end
