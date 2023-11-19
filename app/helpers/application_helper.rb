module ApplicationHelper
  include Pagy::Frontend

  def demo_text
    render(TextComponent.new(klass: "flex flex-row gap-x-1 text-blue-950").with_after_content(render(Icon::MoonComponent.new)).with_before_content(render(Icon::SunComponent.new(svg_class: "w-4 h-4 text-yellow-500"))))
  end
end
