class MissionControlController < ApplicationController
  skip_before_action :authenticate, if: -> { Rails.env.development? }
  before_action :can_access_mission_control

  private
  def can_access_mission_control
    return true if Rails.env.development? || current_user.role == "admin"
    redirect_to "/", alert: MISSION_CONTROL_FAILED_MESSAGE
  end
end
