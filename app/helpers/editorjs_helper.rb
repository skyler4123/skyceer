module EditorjsHelper
  def editorjs_to_html(content)
    return "" unless content

    content = content.with_indifferent_access
    content_html = content[:blocks].map do |block|
      case block[:type]
      when 'paragraph'
        editorjs_paragraph(block)
      when 'header'
        editorjs_header(block)
      when 'list'
        editorjs_list(block)
      when 'image'
        editorjs_image(block)
      when 'checklist'
        editorjs_checklist(block)
      when 'code'
        editorjs_code(block)
      when 'delimiter'
        editorjs_delimiter(block)
      when 'embed'
        editorjs_embed(block)
      when 'quote'
        editorjs_quote(block)
      when 'table'
        editorjs_table(block)
      else
        "<div>Unsupported block type: #{block[:type]}</div>"
      end
    end
    content_html.join.html_safe
  end

  private

  def editorjs_paragraph(block)
    "<p>#{block[:data][:text]}</p>"
  end

  def editorjs_header(block)
    "<h#{block[:data][:level]}>#{block[:data][:text]}</h#{block[:data][:level]}>"
  end

  def editorjs_list(block)
    if block[:data][:style] == "ordered"
      "<ol>#{block[:data][:items].map { |item| "<li>#{item}</li>" }.join}</ol>"
    else
      "<ul>#{block[:data][:items].map { |item| "<li>#{item}</li>" }.join}</ul>"
    end
  end

  def editorjs_image(block)
    "<figure>
      <img src='#{block[:data][:file][:url]}' alt='#{block[:data][:caption]}'>
      <figcaption>#{block[:data][:caption]}</figcaption>
    </figure>"
  end

  def editorjs_checklist(block)
    "<ul class='checklist'>
      #{block[:data][:items].map do |item|
        "<li class='#{item[:checked] ? 'checked' : ''}'>#{item[:text]}</li>"
      end.join}
    </ul>"
  end

  def editorjs_code(block)
    "<pre><code>#{block[:data][:code]}</code></pre>"
  end

  def editorjs_delimiter(block)
    "<hr>"
  end

  def editorjs_embed(block)
    "<div class='embed'>
      <iframe src='#{block[:data][:embed]}' frameborder='0' allowfullscreen></iframe>
      <p>#{block[:data][:caption]}</p>
    </div>"
  end

  def editorjs_quote(block)
    "<blockquote>
      <p>#{block[:data][:text]}</p>
      <cite>#{block[:data][:caption]}</cite>
    </blockquote>"
  end

  def editorjs_table(block)
    "<table>
      #{block[:data][:content].map do |row|
        "<tr>#{row.map { |cell| "<td>#{cell}</td>" }.join}</tr>"
      end.join}
    </table>"
  end
end
