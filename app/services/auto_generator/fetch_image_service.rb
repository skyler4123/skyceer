class AutoGenerator::FetchImageService
  def self.run
    response = Faraday.get('https://picsum.photos/200/300')
    response = Faraday.get(response.headers[:location])
    file = Tempfile.new(['img', '.png'])
    file.binmode
    file.write(response.body)
    file.rewind
    file
  end
end