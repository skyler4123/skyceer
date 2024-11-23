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
end
