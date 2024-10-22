class EstateHouse::AutoUploadImageService

  def self.run(record: nil)
    return unless Rails.env.development?
    record ||= random_record
    return unless record

    fetch_and_upload_image_to_record(record)
  end

  private

  def random_record
    # Check 3 times to select
    random_record = EstateHouse.all.sample
    if random_record.images.size > 10
      random_record = EstateHouse.all.sample
    end
    if random_record.images.size > 10
      random_record = EstateHouse.all.sample
    end
    return nil if random_record.images.size > 10
  end
  
  def fetch_and_upload_image_to_record(record)
    image_urls = [
      'https://picsum.photos/200/300',
      'https://picsum.photos/500/1000',
      'https://picsum.photos/1000/500',
    ]
    response = Faraday.get(image_urls.sample)
    response = Faraday.get(response.headers[:location])
    file = Tempfile.new(['img', '.png'])
    file.binmode
    file.write(response.body)
    file.rewind
    file_name, file_type = file.path.split('/').last.split('.')
    record.images.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
    file.unlink
  end
end
