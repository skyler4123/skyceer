class EstateCondo < ApplicationRecord
  include EstateCondo::ImagesConcern
  include EstateCondo::ElasticsearchConcern

  belongs_to :user
  belongs_to :address, optional: true

  monetize :price_cents
end
