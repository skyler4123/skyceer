RSpec::Matchers.define :render_not_found do
  match do |page|
    expect(page).to have_content("The page you were looking for doesn't exist.")
  end

  failure_message do |page|
    "expected that the page would have content 'The page you were looking for doesn't exist.', but it did not"
  end

  failure_message_when_negated do |page|
    "expected that the page would not have content 'The page you were looking for doesn't exist.', but it did"
  end
end
