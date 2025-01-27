# frozen_string_literal: true

class Application::Home::Header::NavigationComponent < ViewComponent::Base
  erb_template <<-ERB
    <nav>
      <ul class="flex flex-row">
        <li><a href="/">Home</a></li>
        <li><a href="/Education">My Education</a></li>
        <li><a href="/education_schools">My Schools</a></li>
      </ul>
    </nav>
  ERB

  def initialize
  end
end
