class AutoGeneratorJob < ApplicationJob
  queue_as :default
  # self.queue_adapter = :solid_queue

  def perform
    # Run generator to create x*record, x*image*
    Seeding::SeedService.run(seed_record: 1, seed_image: 10)

    # Upload image to a random record
    # EstateHouse::AutoUploadImageService.run
  end
end
