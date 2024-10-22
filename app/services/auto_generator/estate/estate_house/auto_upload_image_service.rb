class AutoGenerator::Estate::EstateHouse::AutoUploadImageService

  def self.run
    return unless Rails.env.development?
    
    # Check 3 times to select
    record = EstateHouse.all.sample
    if record.images.size > 10
      record = EstateHouse.all.sample
    end
    if record.images.size > 10
      record = EstateHouse.all.sample
    end
    return if record.images.size > 10

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
