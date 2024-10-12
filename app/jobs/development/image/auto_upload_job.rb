class Development::Image::AutoUploadJob < ApplicationJob
  queue_as :default

  def perform(*args)
    response = Faraday.get('https://picsum.photos/200/300')
    response = Faraday.get(response.headers[:location])
    file = Tempfile.new(['img', '.png'])
    file.binmode
    file.write(response.body)
    file.rewind
    file_name, file_type = file.path.split('/').last.split('.')
    EstateHouse.find('c789fa8c-0281-4811-8d51-30d5403fef72').images.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
    file.unlink
  end
end
