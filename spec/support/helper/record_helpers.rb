module RecordHelpers
  def record(record_object)
    record_object.class.find(record_object.id)
  end
end

RSpec.configure do |config|
  config.include RecordHelpers
end
