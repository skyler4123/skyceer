VCR.configure do |config|
  config.cassette_library_dir = 'vcr_cassettes'
  config.hook_into :webmock
  config.configure_rspec_metadata!
  config.default_cassette_options = {
    serialize_with: :json
  }
  config.preserve_exact_body_bytes do |http_message|
    http_message.body.encoding == Encoding::BINARY ||
    !http_message.body.valid_encoding?
  end
end