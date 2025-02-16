RSpec.shared_context "support/shared_contexts/education/education_school_context", :shared_context => :metadata do
  # before { @some_var = :some_value }
  # def shared_method
  #   "it works"
  # end
  # let(:shared_let) { {'arbitrary' => 'object'} }
  # subject do
  #   'this is the subject'
  # end
  let(:user) { create(:user, role: role, education_role: education_role) }
  let(:role) { :normal }
  let(:education_role) { :education_school }
  let!(:education_schools) do
    (1..2).map do |n|
      create(:education_school, user: user, name: "School #{n}")
    end
  end
end

RSpec.configure do |rspec|
  rspec.include_context "support/shared_contexts/education/education_school_context", :include_shared => true
end