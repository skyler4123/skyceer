module EditorjsHelper
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