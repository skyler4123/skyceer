class MissionControlController < ApplicationController
  before_action :can_access_mission_control

  private
  def can_access_mission_control
    return true if current_user.role == "admin"
    return true if Rails.env.development?
    return true if Rails.env.test?

    redirect_to root_path, alert: "You are not authorized to access this page"
  end
end
