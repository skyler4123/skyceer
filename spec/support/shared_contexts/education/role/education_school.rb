RSpec.shared_context "support/shared_contexts/education/role/education_school", :shared_context => :metadata do

  let(:education_school) { create(:education_school) }
  let!(:education_student) do
    student = create(:education_student)
    education_school.education_students << student
    student
  end
  let!(:education_class) do
    klass = create(:education_class)
    education_school.education_classes << klass
    klass.education_students << education_student
    klass.education_teachers << education_teacher
    klass.education_rooms << education_room
    klass.education_subjects << education_subject
    klass.education_exams << education_exam
    klass
  end
  let!(:education_admin) do
    admin = create(:education_admin)
    education_school.education_admins << admin
    admin
  end
  let!(:education_teacher) do
    teacher = create(:education_teacher)
    education_school.education_teachers << teacher
    teacher
  end
  let!(:education_course) do
    course = create(:education_course)
    education_school.education_courses << course
    course
  end
  let!(:education_room) do
    room = create(:education_room)
    education_school.education_rooms << room
    room
  end
  let!(:education_subject) do
    subject = create(:education_subject)
    education_school.education_subjects << subject
    subject
  end
  let!(:education_lesson) do
    lesson = create(:education_lesson)
    education_school.education_lessons << lesson
    lesson
  end
  let!(:education_exam) do
    exam = create(:education_exam)
    education_school.education_exams << exam
    exam
  end
  let!(:education_category) do
    category = create(:education_category)
    education_school.education_categories << category
    category
  end
end

RSpec.configure do |rspec|
  rspec.include_context "support/shared_contexts/education/role/education_school", :include_shared => true
end