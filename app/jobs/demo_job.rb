class DemoJob < ApplicationJob
  queue_as :default
  self.queue_adapter = :solid_queue

  def perform
    puts "DemoJob is running"
  end
end
