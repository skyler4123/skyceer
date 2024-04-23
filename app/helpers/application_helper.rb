module ApplicationHelper
  include Pagy::Frontend

  Dir.glob('app/components/*.rb').each do |dir|
    basename = File.basename(dir, '.rb')
    classname = ActiveSupport::Inflector.camelize(basename)
    define_method(basename.gsub!('_component', '')) do |**kwargs, &block|
      component = classname.constantize
      render(component.new(**kwargs), &block)
    end
  end

  Dir.glob('app/components/libs/*.rb').each do |dir|
    basename = File.basename(dir, '.rb')
    classname = ActiveSupport::Inflector.camelize('libs/' + basename)
    define_method(basename.gsub!('_component', '')) do |**kwargs, &block|
      component = classname.constantize
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
