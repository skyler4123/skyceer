module EditorjsHelper
  def editorjs_to_html(content)
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
      else
        "#{block[:data][:text]}"
      end
    end
    content_html.join.html_safe
  end

  private

  def editorjs_paragraph(block)
    "<div class='ce-block'>
      <div class='ce-block__content'>
        <div class='ce-paragraph cdx-block'>
          #{block[:data][:text]}
          <br>
        </div>
      </div>
    </div>"
  end

  def editorjs_header(block)
    "<div class='ce-block'>
      <div class='ce-block__content'>
        <h#{block[:data][:level]} class='ce-header'>
          #{block[:data][:text]}
        </h#{block[:data][:level]}>
      </div>
    </div>"
  end

  def editorjs_attaches(block)
  end

  def editorjs_checklist(block)
  end

  def editorjs_code(block)
  end

  def editorjs_delimiter(block)
  end

  def editorjs_embed(block)
  end

  def editorjs_image(block)
    "<div class='ce-block'>
      <div class='ce-block__content'>
        <div class='cdx-block image-tool image-tool--caption image-tool--filled'>
          <div class='image-tool__image'>
            <div class='image-tool__image-preloader'>
            </div>
            <img class='image-tool__image-picture' src='#{block[:data][:file][:url]}'>
          </div>
          <div class='cdx-input image-tool__caption text-center' contenteditable='true' data-placeholder='Caption' data-empty='false'>
            #{block[:data][:caption]}
          </div>
          <div class='cdx-button'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'><rect width='14' height='14' x='5' y='5' stroke='currentColor' stroke-width='2' rx='4'></rect><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634'></path><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.7778 9.33331H13.7867'></path></svg>
            Select an Image
          </div>
        </div>
      </div>
    </div>"
  end

  def editorjs_inline_code(block)
  end

  def editorjs_link(block)
  end

  def editorjs_list(block)
    return ordered_list(block) if block[:data][:style] == "ordered"
    unordered_list(block) if block[:data][:style] == "unordered"
  end

  def unordered_list(block)
    "<div class='ce-block'>
      <div class='ce-block__content'>
        <ul class='cdx-block cdx-list cdx-list--unordered'>
          #{block[:data][:items].map do |item|
            "<li class='cdx-list__item'>#{item}</li>"
          end.join}
        </ul>
      </div>
    </div>"
  end

  def ordered_list(block)
    "<div class='ce-block'>
      <div class='ce-block__content'>
        <ol class='cdx-block cdx-list cdx-list--ordered'>
          #{block[:data][:items].map do |item|
            "<li class='cdx-list__item'>#{item}</li>"
          end.join}
        </ol>
      </div>
    </div>"
  end

  def editorjs_marker(block)
  end

  def editorjs_nested_list(block)
  end

  def editorjs_quote(block)
  end

  def editorjs_raw(block)
  end

  def editorjs_simple_image(block)
  end

  def editorjs_table(block)
  end

  def editorjs_warning(block)
  end
end