class EducationsController < ApplicationController

  def index
    return redirect_to education_schools_path
  end

end
