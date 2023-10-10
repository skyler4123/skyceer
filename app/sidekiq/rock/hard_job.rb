class Rock::HardJob
  include Sidekiq::Job

  def perform
    puts "Skyler Iu Co Chu Nho!"
  end
end
