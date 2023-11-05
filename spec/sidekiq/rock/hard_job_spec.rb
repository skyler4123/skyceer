require 'rails_helper'
RSpec.describe Rock::HardJob, type: :job do
  
  it "should enqueue successfully" do
    expect { Rock::HardJob.perform_async }.to change(Rock::HardJob.jobs, :size).by(1)
  end
  it "should increase User+1" do
    Sidekiq::Testing.inline! do
      expect { Rock::HardJob.perform_async }.to change(User, :count).by(1)
    end
  end
end
