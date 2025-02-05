json.data do
  json.education_classes do
    json.array! @education_classes do |education_class|
      json.extract! education_class, :id, :name, :created_at, :updated_at
      json.education_school education_class.education_school
    end
  end

  json.calendar_events do
    json.array! @calendar_events do |calendar_event|
      json.extract! calendar_event, *calendar_event.attribute_names.map(&:to_sym)
    end
  end
end

json.partial! "shared/common"
