class DemoJob < ApplicationJob
  queue_as :default
  self.queue_adapter = :solid_queue

  def perform(*args)
    User.create(
      email: "email#{Time.now.to_i}@gmail.com",
      password: "password1234",
      password_confirmation: "password1234",
      verified: true,
      name: "user name #{Time.now.to_i}"
    )
  end
end
