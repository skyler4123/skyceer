class AutoGeneratorJob < ApplicationJob
  queue_as :default
  self.queue_adapter = :solid_queue

  def perform
    # Run generator
    AutoGenerator::SeedService.run(seed_number: 1)

    AutoGenerator::Estate::EstateHouse::AutoUploadImageService.run
  end
end
