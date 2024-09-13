module ApplicationHelper
  include Pagy::Frontend
  include PackagesHelper
  include EditorjsHelper
  include ComponentsHelper

  def new_id
    @id = SecureRandom.uuid
  end

  def id
    @id
  end
end
