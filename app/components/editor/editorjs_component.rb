# frozen_string_literal: true

class Editor::EditorjsComponent < ViewComponent::Base
  def initialize(holder: "editorjs-#{SecureRandom.alphanumeric}")
    @holder = holder
  end
end
