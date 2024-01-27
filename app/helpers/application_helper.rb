module ApplicationHelper
  include Pagy::Frontend

  Dir.glob('app/components/*.rb').map {|dir| dir.split('/').last.split('.').first}.each do |component_name|
    define_method(component_name.split('_').first) do |**kwargs, &block|
      component = component_name.to_s.camelize.constantize
      render(component.new(**kwargs), &block)
    end
  end

  def new_id
    @id = SecureRandom.uuid
  end

  def id
    @id
  end
end
