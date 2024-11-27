class ApplicationController < ActionController::Base
  append_view_path(Dir.glob(Rails.root.join('app/packages/*/views')))

  include ApplicationController::AuthenticationConcern
  include ApplicationController::CurrentConcern
  include ApplicationController::FlashConcern
  include ApplicationController::CookieConcern
  include ApplicationController::RequestConcern
  include ApplicationController::AuthorizationConcern
  include ApplicationController::PaginationConcern

end
