# frozen_string_literal: true

class Application::Home::Header::NavigationComponent < ViewComponent::Base
  erb_template <<-ERB
    <nav class="w-full h-full flex justify-center items-center">
      <ul class="flex flex-row gap-x-4">
        <li><a href="/">Home</a></li>

        <li class="<%= can_show_create_school ? "flex" : "hidden" %>"><a href="/education_schools/new">Create School</a></li>
        <li class="<%= can_show_create_teacher ? "flex" : "hidden" %>"><a href="/education_teachers/new">Create Teacher</a></li>
        <li class="<%= can_show_create_student ? "flex" : "hidden" %>"><a href="/education_students/new">Create Student</a></li>

        <li class="<%= can_show_my_education ? "flex" : "hidden" %>"><a href="/educations">My Education</a></li>

        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  ERB

  def initialize(current_user:)
    @current_user = current_user
  end

  def is_signed_in
    !!@current_user
  end

  def is_education_user
    @current_user&.education_role?
  end

  def can_show_home
    true
  end

  def can_show_create_school
    is_signed_in && !is_education_user
  end

  def can_show_create_teacher
    is_signed_in && !is_education_user
  end

  def can_show_create_student
    is_signed_in && !is_education_user
  end

  def can_show_my_education
    is_signed_in && is_education_user
  end

  def can_show_about
    true
  end
end
