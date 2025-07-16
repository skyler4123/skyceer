RSpec.shared_context "support/shared_contexts/education/default_database", :shared_context => :metadata do
  let(:user) { create(:user) }
  let(:address) { create(:address) }

  let(:education_school) { create(:education_school) }
  let(:education_student) { create(:education_student, education_school: education_school, education_parent:) }
  let(:education_class) { create(:education_class, education_school:, education_course:) }
  let(:education_admin) { create(:education_admin, education_school: education_school) }
  let(:education_teacher) { create(:education_teacher, education_school: education_school) }
  let(:education_parent) { create(:education_parent, education_school: education_school) }
  let(:education_course) { create(:education_course, education_school:) }
  let(:education_room) { create(:education_room, education_school:) }
  let(:education_subject) { create(:education_subject, education_school:) }
  let(:education_lesson) { create(:education_lesson, education_school:, education_class:, education_subject:, education_teacher:) }
  let(:education_exam) {create(:education_exam, education_school:, education_subject:) }
  let(:education_category) { create(:education_category, user: education_school.user) }
  let(:education_question) { create(:education_question, education_school:, education_teacher:) }
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