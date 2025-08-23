module ApplicationController::FlashConcern
  extend ActiveSupport::Concern

  included do
    add_flash_types :info, :error, :warning
  end
end
