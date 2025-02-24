module ApplicationHelper
  include Pagy::Frontend
  include EditorjsHelper
  include ComponentsHelper
  include FlashHelper

  def new_id
    @id = SecureRandom.uuid
  end

  def id
    @id
  end

  def country_code
    "VN"
  end

  def content_data(**data)
    "<div style='display: none;' data-#{stimulus_controller}-target='contentData'>
      #{data}
    </div>"
  end

  def stimulus_controller
    return @stimulus_controller if @stimulus_controller
    @stimulus_controller = [@app_name, controller_path.gsub('/', '--'), action_name].join('--').dasherize
  end
end
