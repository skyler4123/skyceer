class HomeController < ApplicationController
  # layout :layout_for_actions

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
