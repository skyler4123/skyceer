class Rock::HardJob
  include Sidekiq::Job

  def perform
    puts "Skyler Iu Co Chu Nho!"
    User.create(
      email: Faker::Internet.email,
      password: 'password',
      password_confirmation: 'password',
    )
  end
end
