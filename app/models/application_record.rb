class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class
  include Pagy::Backend
  include ApplicationRecord::ImageConcern
end
