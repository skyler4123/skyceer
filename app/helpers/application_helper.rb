module ApplicationHelper
  include Pagy::Frontend

  def button(**kwarg)
    render(ButtonComponent.new(label: "Test Button", **kwarg))
  end
end
