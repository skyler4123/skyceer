class HomeController < ApplicationController
  # layout :layout_for_actions
  skip_before_action :authenticate

  def index
    session_record = Session.find_by_id(cookies.signed[:session_token])
    cookies.clear unless session_record
  end

  def education
  end

  def agriculture
  end

  def about
  end

  private
  
  def layout_for_actions
    return 'application' if action_name == 'index' || action_name == 'about'
    action_name
  end
end
