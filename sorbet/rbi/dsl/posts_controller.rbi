# typed: true

# DO NOT EDIT MANUALLY
# This is an autogenerated file for dynamic methods in `PostsController`.
# Please instead update this file by running `bin/tapioca dsl PostsController`.

class PostsController
  sig { returns(HelperProxy) }
  def helpers; end

  module HelperMethods
    include ::Turbo::DriveHelper
    include ::Turbo::FramesHelper
    include ::Turbo::IncludesHelper
    include ::Turbo::StreamsHelper
    include ::ActionView::Helpers::CaptureHelper
    include ::ActionView::Helpers::OutputSafetyHelper
    include ::ActionView::Helpers::TagHelper
    include ::Turbo::Streams::ActionHelper
    include ::ActionText::ContentHelper
    include ::ActionText::TagHelper
    include ::Importmap::ImportmapTagsHelper
    include ::ActionController::Base::HelperMethods
    include ::ApplicationHelper
    include ::DemosHelper
    include ::ImagesHelper
    include ::PreviewHelper
    include ::ApplicationController::HelperMethods
    include ::PostsHelper
  end

  class HelperProxy < ::ActionView::Base
    include HelperMethods
  end
end
