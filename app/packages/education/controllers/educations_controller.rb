class EducationsController < ApplicationController

  def index
    return redirect_to education_schools_path
  end

  private
  def set_education_schools
    @education_schools = current_user.education_schools
  end
end
