module EditorjsHelper
  def editorjs_to_html(content)
    content = content.with_indifferent_access
    content_html = content[:blocks].map do |block|
      case block[:type]
      when 'paragraph'
        "<div class='ce-block'>
          <div class='ce-block__content'>
            <div class='ce-paragraph cdx-block'>
              #{block[:data][:text]}
              <br>
            </div>
          </div>
        </div>"
      when 'header'
        "<div class='ce-block'>
          <div class='ce-block__content'>
            <h#{block[:data][:level]} class='ce-header'>
              #{block[:data][:text]}
            </h#{block[:data][:level]}>
          </div>
        </div>"
      when 'list'
        "<div class='ce-block'>
          <div class='ce-block__content'>
            <ul class='cdx-block cdx-list cdx-list--unordered'>
              #{block[:data][:items].map do |item|
                "<li class='cdx-list__item'>
                  #{item}
                </li>"
              end.join}
            </ul>
          </div>
        </div>"
      else
        "#{block[:data][:text]}"
      end
    end
    content_html.join.html_safe
  end
end