RSpec.shared_context "support/shared_contexts/education/role/education_school", :shared_context => :metadata do
  let(:education_school_user) { create(:user, role: role, education_role: education_role) }
  let(:education_role) { :education_school }
  let(:role) { :normal }
  let(:education_school) { create(:education_school, user: education_school_user) }
  let!(:education_student) do
    student = create(:education_student)
    education_school.education_students << student
    student
  end
  let!(:education_class) do
    klass = create(:education_class, education_school: education_school)
    education_school.education_classes << klass
    klass.education_students << education_student
    klass
  end
  let!(:education_admin) do
    admin = create(:education_admin)
    education_school.education_admins << admin
    admin
  end
end

RSpec.configure do |rspec|
  rspec.include_context "support/shared_contexts/education/role/education_school", :include_shared => true
end