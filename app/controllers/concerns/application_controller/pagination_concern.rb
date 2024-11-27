module ApplicationController::Pagination
  extend ActiveSupport::Concern
  
  included do
    include Pagy::Backend

    private

    def pagy_custom(collection, vars = {})
      pagy = Pagy.new(count: collection.count(*vars[:count_args]), page: params[:page], **vars)
      [pagy, collection.offset(pagy.offset).limit(pagy.items)]
    end

  end
end
