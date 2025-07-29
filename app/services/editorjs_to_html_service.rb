class EditorjsToHtmlService
  def self.convert(content)
    return "" unless content.is_a?(Hash) && content["blocks"]
    
    blocks = content["blocks"]
    html_parts = blocks.map { |block| convert_block(block) }.compact
    html_parts.join("\n")
  end

  private

  def self.convert_block(block)
    type = block["type"]
    data = block["data"] || {}
    
    case type
    when "paragraph"
      convert_paragraph(data)
    when "header"
      convert_header(data)
    when "list"
      convert_list(data)
    when "checklist"
      convert_checklist(data)
    when "delimiter"
      convert_delimiter(data)
    when "table"
      convert_table(data)
    when "warning"
      convert_warning(data)
    when "code"
      convert_code(data)
    when "text"
      convert_text(data)
    when "quote"
      convert_quote(data)
    when "image"
      convert_image(data)
    when "embed"
      convert_embed(data)
    when "linkTool"
      convert_link_tool(data)
    when "attaches"
      convert_attaches(data)
    when "raw"
      convert_raw(data)
    when "toggle"
      convert_toggle(data)
    else
      # Fallback for unknown block types
      convert_fallback(block)
    end
  end

  def self.convert_paragraph(data)
    text = data["text"] || ""
    return "" if text.strip.empty?
    "<p>#{sanitize_html(text)}</p>"
  end

  def self.convert_header(data)
    text = data["text"] || ""
    level = data["level"] || 2
    level = [1, 2, 3, 4, 5, 6].include?(level) ? level : 2
    # add tailwindcss class for header
    "<h#{level} class=\"text-#{level == 1 ? '3xl' : level == 2 ? '2xl' : 'xl'} font-bold mb-4\">#{sanitize_html(text)}</h#{level}>"
  end

  def self.convert_list(data)
    style = data["style"] || "unordered"
    items = data["items"] || []
    
    return "" if items.empty?
    
    case style
    when "ordered"
      convert_ordered_list(items, data["meta"])
    when "checklist"
      convert_checklist_items(items)
    else # unordered
      convert_unordered_list(items)
    end
  end

  def self.convert_ordered_list(items, meta = {})
    start_attr = meta && meta["start"] ? " start=\"#{meta['start']}\"" : ""
    style_attr = meta && meta["counterType"] ? " style=\"list-style-type: #{meta['counterType']}\"" : ""
    
    list_items = items.map do |item|
      if item.is_a?(Hash) && item["content"]
        # Nested list item
        content = "<li>#{sanitize_html(item['content'])}"
        if item["items"] && !item["items"].empty?
          content += convert_nested_list_items(item["items"])
        end
        content += "</li>"
      else
        "<li>#{sanitize_html(item)}</li>"
      end
    end

    "<ol#{start_attr}#{style_attr} class=\"pl-4 max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400\">#{list_items.join}</ol>"
  end

  def self.convert_unordered_list(items)
    list_items = items.map do |item|
      if item.is_a?(Hash) && item["content"]
        # Nested list item
        content = "<li>#{sanitize_html(item['content'])}"
        if item["items"] && !item["items"].empty?
          content += convert_nested_list_items(item["items"])
        end
        content += "</li>"
      else
        "<li>#{sanitize_html(item)}</li>"
      end
    end

    "<ul class=\"pl-4 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400\">#{list_items.join}</ul>"
  end

  def self.convert_nested_list_items(items)
    nested_items = items.map do |item|
      content = "<li>#{sanitize_html(item['content'] || item)}"
      if item.is_a?(Hash) && item["items"] && !item["items"].empty?
        content += convert_nested_list_items(item["items"])
      end
      content += "</li>"
    end
    
    "<ul class=\"pl-4 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400\">#{nested_items.join}</ul>"
  end

  def self.convert_checklist(data)
    items = data["items"] || []
    convert_checklist_items(items)
  end

  def self.convert_checklist_items(items)
    return "" if items.empty?
    
    list_items = items.map do |item|
      if item.is_a?(Hash)
        text = item["text"] || item["content"] || ""
        checked = item["checked"] || (item["meta"] && item["meta"]["checked"]) || false
        checked_attr = checked ? " checked" : ""
        
        content = "<li><input type=\"checkbox\"#{checked_attr} disabled> #{sanitize_html(text)}"
        
        # Handle nested checklist items
        if item["items"] && !item["items"].empty?
          nested_items = item["items"].map do |nested_item|
            nested_text = nested_item["content"] || ""
            nested_checked = nested_item["meta"] && nested_item["meta"]["checked"] || false
            nested_checked_attr = nested_checked ? " checked" : ""
            "<li><input type=\"checkbox\"#{nested_checked_attr} disabled> #{sanitize_html(nested_text)}</li>"
          end
          content += "<ul>#{nested_items.join}</ul>"
        end
        
        content += "</li>"
      else
        "<li><input type=\"checkbox\" disabled> #{sanitize_html(item)}</li>"
      end
    end

    "<ul class=\"checklist pl-4 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400\">#{list_items.join}</ul>"
  end

  def self.convert_delimiter(data)
    "<hr>"
  end

  def self.convert_table(data)
    content = data["content"] || []
    return "" if content.empty?
    
    with_headings = data["withHeadings"] || false
    stretched = data["stretched"] || false
    
    table_class = stretched ? "table-stretched" : ""
    html = "<table class=\"#{table_class} w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400\">"

    content.each_with_index do |row, index|
      if with_headings && index == 0
        cells = row.map { |cell| "<th class=\"px-6 py-3\">#{sanitize_html(cell)}</th>" }.join
        html += "<thead class=\"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\"><tr>#{cells}</tr></thead><tbody>"
      else
        cells = row.map { |cell| "<td class=\"px-6 py-4\">#{sanitize_html(cell)}</td>" }.join
        html += "<tr class=\"bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600\">#{cells}</tr>"
      end
    end
    
    html += with_headings ? "</tbody></table>" : "</table>"
    html
  end

  def self.convert_warning(data)
    title = data["title"] || "Warning"
    message = data["message"] || ""
    "
      <div class=\"warning-block flex gap-x-2 p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-yellow-800 dark:text-yellow-400\" role=\"alert\">
        <svg class=\"shrink-0 inline w-4 h-4 me-3 mt-[2px]\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path d=\"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z\"/>
        </svg>
        <div>
          <span class=\"font-medium\">#{sanitize_html(title)}</span>
          <div class=\"mt-1\">#{sanitize_html(message)}</div>
        </div>
      </div>
    "
  end

  def self.convert_code(data)
    code = data["code"] || ""
    language = data["language"] || ""
    
    language_class = language.present? ? " class=\"language-#{language}\"" : ""
    "<pre><code#{language_class}>#{escape_html(code)}</code></pre>"
    "
      <div class=\"code-block bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4\">
        <pre><code#{language_class}>#{escape_html(code)}</code></pre>
        </div>
      </div>
    "
  end

  def self.convert_code(data)
    code = data["code"] || ""
    language = data["language"] || ""
    
    language_class = language.present? ? " class=\"language-#{language}\"" : ""
    "<pre><code#{language_class}>#{escape_html(code)}</code></pre>"
  end

  def self.convert_text(data)
    text = data["text"] || ""
    "<p>#{sanitize_html(text)}</p>"
  end

  def self.convert_quote(data)
    text = data["text"] || ""
    caption = data["caption"] || ""
    alignment = data["alignment"] || "left"
    
    align_class = " class=\"quote-#{alignment}\""
    
    html = "<blockquote#{align_class}>"
    html += "<p>#{sanitize_html(text)}</p>"
    html += "<cite>#{sanitize_html(caption)}</cite>" if caption.present?
    html += "</blockquote>"
    html
  end

  def self.convert_image(data)
    file = data["file"] || {}
    url = file["url"] || ""
    caption = data["caption"] || ""
    stretched = data["stretched"] || false
    with_background = data["withBackground"] || false
    with_border = data["withBorder"] || false
    
    return "" if url.blank?
    
    css_classes = []
    css_classes << "image-stretched" if stretched
    css_classes << "image-with-background" if with_background
    css_classes << "image-with-border" if with_border
    css_classes << "flex flex-col justify-center items-center"
    class_attr = css_classes.any? ? " class=\"#{css_classes.join(' ')}\"" : ""
    
    html = "<figure#{class_attr}>"
    html += "<img src=\"#{escape_html(url)}\" alt=\"#{escape_html(caption)}\">"
    html += "<figcaption>#{sanitize_html(caption)}</figcaption>" if caption.present?
    html += "</figure>"
    html
  end

  def self.convert_embed(data)
    service = data["service"] || ""
    embed_url = data["embed"] || data["source"] || ""
    caption = data["caption"] || ""
    width = data["width"] || 580
    height = data["height"] || 320
    
    return "" if embed_url.blank?
    
    html = "<figure class=\"embed\">"
    
    case service.downcase
    when "youtube"
      html += "<iframe width=\"#{width}\" height=\"#{height}\" src=\"#{escape_html(embed_url)}\" frameborder=\"0\" allowfullscreen></iframe>"
    else
      html += "<iframe width=\"#{width}\" height=\"#{height}\" src=\"#{escape_html(embed_url)}\" frameborder=\"0\"></iframe>"
    end
    
    html += "<figcaption>#{sanitize_html(caption)}</figcaption>" if caption.present?
    html += "</figure>"
    html
  end

  def self.convert_link_tool(data)
    link = data["link"] || ""
    meta = data["meta"] || {}
    title = meta["title"] || link
    description = meta["description"] || ""
    image_url = meta.dig("image", "url") || ""
    
    return "" if link.blank?
    
    html = "<div class=\"link-tool\">"
    html += "<a href=\"#{escape_html(link)}\" target=\"_blank\" rel=\"noopener\">"
    
    if image_url.present?
      html += "<div class=\"link-image\"><img src=\"#{escape_html(image_url)}\" alt=\"#{escape_html(title)}\"></div>"
    end
    
    html += "<div class=\"link-content\">"
    html += "<div class=\"link-title\">#{sanitize_html(title)}</div>"
    html += "<div class=\"link-description\">#{sanitize_html(description)}</div>" if description.present?
    html += "<div class=\"link-url\">#{sanitize_html(link)}</div>"
    html += "</div></a></div>"
    html
  end

  def self.convert_attaches(data)
    file = data["file"] || {}
    title = data["title"] || file["name"] || "Attachment"
    url = file["url"] || ""
    size = file["size"] || 0
    extension = file["extension"] || ""
    
    return "" if url.blank?
    
    size_formatted = format_file_size(size)
    
    html = "<div class=\"attachment\">"
    html += "<a href=\"#{escape_html(url)}\" target=\"_blank\" rel=\"noopener\">"
    html += "<div class=\"attachment-icon\">📎</div>"
    html += "<div class=\"attachment-info\">"
    html += "<div class=\"attachment-title\">#{sanitize_html(title)}</div>"
    html += "<div class=\"attachment-meta\">#{extension.upcase} • #{size_formatted}</div>"
    html += "</div></a></div>"
    html
  end

  def self.convert_raw(data)
    html = data["html"] || ""
    html # Return raw HTML as-is (be careful with security!)
  end

  def self.convert_toggle(data)
    text = data["text"] || ""
    items = data["items"] || []
    
    html = "<details class=\"toggle\">"
    html += "<summary>#{sanitize_html(text)}</summary>"
    html += "<div class=\"toggle-content\">"
    
    items.each do |item|
      html += "<p>#{sanitize_html(item)}</p>"
    end
    
    html += "</div></details>"
    html
  end

  def self.convert_fallback(block)
    # For unknown block types, try to render basic content
    type = block["type"]
    data = block["data"] || {}
    
    if data["text"]
      "<p><em>[#{type}]</em> #{sanitize_html(data['text'])}</p>"
    elsif data["content"]
      "<p><em>[#{type}]</em> #{sanitize_html(data['content'])}</p>"
    else
      "<p><em>[Unknown block type: #{type}]</em></p>"
    end
  end

  # Utility methods
  def self.sanitize_html(text)
    return "" unless text
    
    # Allow basic HTML tags but escape others
    allowed_tags = %w[b strong i em u mark code a]
    
    # Simple HTML sanitization (you might want to use a gem like Sanitize for production)
    text.to_s.gsub(/<(?!\/?(?:#{allowed_tags.join('|')})\b)[^>]*>/, '')
  end

  def self.escape_html(text)
    return "" unless text
    
    text.to_s
        .gsub('&', '&amp;')
        .gsub('<', '&lt;')
        .gsub('>', '&gt;')
        .gsub('"', '&quot;')
        .gsub("'", '&#39;')
  end

  def self.format_file_size(size)
    return "0 B" if size == 0
    
    units = %w[B KB MB GB TB]
    base = 1024
    exponent = (Math.log(size) / Math.log(base)).floor
    
    formatted_size = (size.to_f / (base ** exponent)).round(1)
    "#{formatted_size} #{units[exponent]}"
  end
end
