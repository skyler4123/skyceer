require 'rails_helper'

RSpec.feature "Demos", type: :feature do
  include_context "shared stuff"
  it "has access to methods defined in shared context" do
    expect(shared_method).to eq("it works")
  end
  it "has access to methods defined with let in shared context" do
    expect(shared_let['arbitrary']).to eq('object')
  end

  it "runs the before hooks defined in the shared context" do
    expect(@some_var).to be(:some_value)
  end

  it "accesses the subject defined in the shared context" do
    expect(subject).to eq('this is the subject')
  end
end
