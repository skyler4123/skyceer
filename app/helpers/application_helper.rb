module ApplicationHelper
  include Pagy::Frontend

  def demo_text
    render(IconComponent.new(name: 'moon', klass: "inline-block", svg_class: "w-4 h-4 animate-spin")) +
    "My name is Skyler! And Im doing StimulusJS!!!" +
    render(IconComponent.new(name: 'sun', klass: "inline-block", svg_class: "w-4 h-4 text-yellow-500 animate-ping"))
  end

  def demo_button
    render(ButtonComponent.new(label: 1, id: 1, class: 1, event: { id: 1, action: :toggle, listener: :click }))
  end
end
