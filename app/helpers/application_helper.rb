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

  def package_name(dir)
    file_path_array = dir.split('/')
    return nil unless file_path_array.find_index('packages')

    package_index = file_path_array.find_index('packages') +1
    file_path_array[package_index]
  end

  def view_controller(dir)
    return @view_controller if @view_controller
    if package_name(dir)
      @view_controller = ['views', package_name(dir), controller_name, action_name].join('--').dasherize
    else
      @view_controller = ['views', controller_name, action_name].join('--').dasherize
    end
    @view_controller
  end

  def editorjs_to_html(content)
    content_html = content['blocks'].map do |block|
      case block['type']
      when 'paragraph'
        "<p>#{block['data']['text']}</p>"
      when 'header'
        "<h#{block['data']['level']}>#{block['data']['text']}</h#{block['data']['level']}>"
      when 'list'
        list_items = block['data']['items'].map do |item|
          "<li>#{item}</li>"
        end.join
        "<ul>#{list_items}</ul>"
      when 'code'
        escapsed_code = block['data']['code']
        "<pre><code>#{escapsed_code}</code></pre>"
      else
        ""
      end
    end
    content_html.join.html_safe

  end
end
