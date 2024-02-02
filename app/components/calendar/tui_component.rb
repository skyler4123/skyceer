# frozen_string_literal: true

class Calendar::TuiComponent < ApplicationComponent
  def initialize( controller: nil, **options)
    @controller = "calendar--tui-component" + ' ' + controller.to_s
    @options = options.to_json
  end
end
