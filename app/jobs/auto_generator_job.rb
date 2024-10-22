class AutoGeneratorJob < ApplicationJob
  queue_as :default
  self.queue_adapter = :solid_queue

  def perform
    # Run generator to create x*seed_number* records
    AutoGenerator::SeedService.run(seed_number: 1)

    # Upload image to a random record
    # EstateHouse::AutoUploadImageService.run
  end
end
