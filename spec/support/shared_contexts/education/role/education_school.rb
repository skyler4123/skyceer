RSpec.shared_context "support/shared_contexts/education/role/education_school", :shared_context => :metadata do
  let(:user) { create(:user) }
  let(:address) { create(:address) }
  let(:education_school) { create(:education_school) }
  let(:education_student) do
    student = create(:education_student)
    education_school.education_students << student
    education_class.education_students << student
    student
  end
  let(:education_class) do
    klass = create(:education_class)
    education_school.education_classes << klass
    klass
  end
  let(:education_admin) do
    admin = create(:education_admin)
    education_school.education_admins << admin
    admin
  end
  let(:education_teacher) do
    teacher = create(:education_teacher)
    education_school.education_teachers << teacher
    education_class.education_teachers << teacher
    teacher
  end
  let(:education_course) do
    course = create(:education_course)
    education_school.education_courses << course
    course
  end
  let(:education_room) do
    room = create(:education_room)
    education_school.education_rooms << room
    education_class.education_rooms << room
    room
  end
  let(:education_subject) do
    subject = create(:education_subject)
    education_school.education_subjects << subject
    education_class.education_subjects << subject
    subject
  end
  let(:education_lesson) do
    lesson = create(:education_lesson)
    education_school.education_lessons << lesson
    lesson
  end
  let(:education_exam) do
    exam = create(:education_exam)
    education_school.education_exams << exam
    education_class.education_exams << exam
    exam
  end
  let(:education_category) do
    category = create(:education_category)
    education_school.education_categories << category
    category
  end
  let(:education_question) do
    question = create(:education_question)
    education_school.education_questions << question
    question
  end

  let(:payment_user) { create(:payment_user, payment_userable: education_school) }
  let(:payment_customer) { create(:payment_customer, payment_customerable: education_student) }
  let(:payment_method) do
    method = create(:payment_method)
    payment_user.payment_methods << method
    method
  end
  let(:payment_discount) { create(:payment_discount, payment_user: payment_user) }
  let(:payment_item) { create(:payment_item, payment_itemable: education_course, payment_user: payment_user) }
  let(:payment_order) { create(:payment_order, payment_user: payment_user, payment_customer: payment_customer, payment_method: payment_method, payment_discount: payment_discount) }
end

RSpec.configure do |rspec|
  rspec.include_context "support/shared_contexts/education/role/education_school", :include_shared => true
end