module ApplicationHelper
  include Pagy::Frontend
  include PackagesHelper
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

  def content_data(resources, **options)
    "<div style='display: none;' data-#{view_controller(__FILE__)}-target='contentData'>
      #{resources.to_json(options)}
    </div>"
  end
end
