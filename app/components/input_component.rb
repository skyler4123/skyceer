# frozen_string_literal: true

class InputComponent < ViewComponent::Base
  renders_many :prepends
  renders_many :appends

  def initialize(
    accept: nil,
    alt: nil,
    autocomplete: nil,
    autofocus: nil,
    checked: nil,
    dirname: nil,
    disabled: nil,
    form: nil,
    formaction: nil,
    formenctype: nil,
    formmethod: nil,
    formnovalidate: nil,
    formtarget: nil,
    height: nil,
    list: nil,
    max: nil,
    maxlength: nil,
    min: nil,
    minlength: nil,
    multiple: nil,
    name: nil,
    pattern: nil,
    placeholder: nil,
    popovertarget: nil,
    popovertargetaction: nil,
    readonly: nil,
    required: nil,
    size: nil,
    src: nil,
    step: nil,
    type: nil,
    value: nil,
    width: nil,
    
    klass: nil,
    klass_default: nil,
    content_class: nil,
    content_class_default: nil,
    input_class: nil,
    input_class_default: nil,
    format_options: nil

  )
    @accept = accept
    @alt = alt
    @autocomplete = autocomplete
    @autofocus = autofocus
    @checked = checked
    @dirname = dirname
    @disabled = disabled
    @form = form
    @formaction = formaction
    @formenctype = formenctype
    @formmethod = formmethod
    @formnovalidate = formnovalidate
    @formtarget = formtarget
    @height = height
    @list = list
    @max = max
    @maxlength = maxlength
    @min = min
    @minlength = minlength
    @multiple = multiple
    @name = name
    @pattern = pattern
    @placeholder = placeholder
    @popovertarget = popovertarget
    @popovertargetaction = popovertargetaction
    @readonly = readonly
    @required = required
    @size = size
    @src = src
    @step = step
    @type = type
    @value = value
    @width = width

    @klass = klass
    @klass_default = klass_default
    @content_class = content_class
    @content_class_default = content_class_default
    @input_class = input_class
    @input_class_default = input_class_default
    @format_options = format_options
  end
end
