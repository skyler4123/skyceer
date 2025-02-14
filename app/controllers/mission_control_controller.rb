class MissionControlController < ApplicationController
  before_action :can_access_mission_control

  private
  def can_access_mission_control
    return true if current_user.role == "admin"
    redirect_to "/", alert: "You are not authorized to access this page"
  end
end
