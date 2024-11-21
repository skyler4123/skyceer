
require 'rspec/expectations'

RSpec::Matchers.define :be_subdomain_of do |expected_subdomain|
  match do |actual_subdomain|
    actual_subdomain.start_with?(expected_subdomain + '.')
  end
end
