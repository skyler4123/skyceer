module EditorjsHelper
  def editorjs_to_html(content)
    content_html = content['blocks'].map do |block|
      case block['type']
      when 'paragraph'
        "<div class='ce-block'><div class='ce-block__content'><div class='ce-paragraph cdx-block' contenteditable='true' data-placeholder-active='' data-empty='false'>#{block['data']['text']}</div></div></div>"
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