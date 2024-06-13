class HomeController < ApplicationController
  # layout :layout_for_actions
  skip_before_action :authenticate

  def index
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
