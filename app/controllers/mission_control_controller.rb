class MissionControlController < ApplicationController
  before_action :can_access_mission_control

  private
  def can_access_mission_control
    return true if current_user.role == "admin" || Rails.env.development?
    redirect_to "/", alert: MISSION_CONTROL_FAILED_MESSAGE
  end
end
