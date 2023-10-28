# frozen_string_literal: true

class Editor::TrixComponent < ViewComponent::Base
  def initialize(id: "trix-editor-#{SecureRandom.alphanumeric}", name:, editor_class: nil)
    @id = id
    @name = name.to_s
    @editor_class = editor_class
  end
end
