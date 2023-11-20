module ApplicationHelper
  include Pagy::Frontend

  def demo_text
    render(TextComponent.new(klass: "flex flex-row justify-center items-center gap-x-1").with_after_content(render(Icon::MoonComponent.new(svg_class: "w-4 h-4 animate-spin"))).with_before_content(render(Icon::SunComponent.new(svg_class: "w-4 h-4 text-yellow-500 animate-ping"))))
  end
end
