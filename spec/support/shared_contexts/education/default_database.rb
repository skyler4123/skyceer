RSpec.shared_context "support/shared_contexts/education/default_database", :shared_context => :metadata do
  let(:education_owner_user) { create(:user, role: :normal, education_role: :education_owner) }
  let(:address) { create(:address) }

  let(:education_owner) { create(:education_owner, education_ownerable: education_owner_user, address:) }
  let(:education_school) { create(:education_school, education_owner:) }
  let(:education_student) { create(:education_student, education_owner:, education_school: education_school, education_parent:) }
  let(:education_class) { create(:education_class, education_owner:, education_school:, education_course:) }
  let(:education_admin) { create(:education_admin, education_owner:, education_school: education_school) }
  let(:education_teacher) { create(:education_teacher, education_owner:, education_school: education_school) }
  let(:education_parent) { create(:education_parent, education_owner:, education_school: education_school) }
  let(:education_course) { create(:education_course, education_owner:, education_school:) }
  let(:education_room) { create(:education_room, education_owner:, education_school:) }
  let(:education_subject) { create(:education_subject, education_owner:, education_school:) }
  let(:education_lesson) { create(:education_lesson, education_owner:, education_school:, education_class:, education_subject:, education_teacher:) }
  let(:education_exam) {create(:education_exam, education_owner:, education_school:, education_subject:) }
  let(:education_category) { create(:education_category, education_owner:, user: education_school.user) }
  let(:education_question) { create(:education_question, education_owner:, education_school:, education_teacher:) }
  let(:education_exam_to_class) { create(:education_exam_to_class, education_exam:, education_class:, education_subject:) }
  let(:education_exam_to_student) { create(:education_exam_to_student, education_exam:, education_student:, education_exam_to_class:) }

  let(:payment_owner) { create(:payment_owner, payment_ownerable: education_school) }
  let(:payment_customer) { create(:payment_customer, payment_customerable: education_student) }
  let(:payment_method) { create(:payment_method) }
  let(:payment_discount) { create(:payment_discount, payment_owner:) }
  let(:payment_item) { create(:payment_item, payment_itemable: education_course, payment_owner:) }
  let(:payment_order) { create(:payment_order, payment_owner:, payment_customer:, payment_method:, payment_discount:) }
end

RSpec.configure do |rspec|
  rspec.include_context "support/shared_contexts/education/default_database", :include_shared => true
end