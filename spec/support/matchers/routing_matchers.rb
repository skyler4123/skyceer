RSpec::Matchers.define :have_routing_error do
  match do |page|
    expect(page).to have_content("No route matches")
  end

  failure_message do |page|
    "expected that the page would have content 'No route matches', but it did not"
  end

  failure_message_when_negated do |page|
    "expected that the page would not have content 'No route matches', but it did"
  end
end