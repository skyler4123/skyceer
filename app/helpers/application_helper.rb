module ApplicationHelper
  include Pagy::Frontend

  def demo_text
    render(TextComponent.new(klass: "").with_after_content(render(Icon::MoonComponent.new(klass: "inline-block", svg_class: "w-4 h-4 animate-spin"))).with_before_content(render(Icon::SunComponent.new(klass: "inline-block", svg_class: "w-4 h-4 text-yellow-500 animate-ping"))))
  end
end
