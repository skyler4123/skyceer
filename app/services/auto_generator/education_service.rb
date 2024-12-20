class AutoGenerator::EducationService
  def self.run(seed_number: 2)
    seed_number.times do |index|
      education_school = self.education_school
      5.times do
        self.education_category(education_school:)
      end
      10.times do
        self.education_subject(education_school:)
      end
      10.times do
        self.education_course(education_school:)
      end
      5.times do
        self.education_class(education_school:)
      end
      5.times do
        self.education_room(education_school:)
      end
      10.times do
        self.education_teacher(education_school:)
      end
      30.times do
        self.education_student(education_school:)
      end
      20.times do
        self.education_question(education_school:)
      end
      10.times do
        self.education_exam(education_school:)
      end
      10.times do
        self.education_lesson(education_school:)
      end
      20.times do
        self.education_shift(education_school:)
      end
      100.times do
        self.education_class_appointments(education_school:)
      end
      100.times do
        self.education_question_appointments(education_school:)
      end
      100.times do
        self.education_subject_appointments(education_school:)
      end
      100.times do
        self.education_category_appointments(education_school:)
      end
    end
  end

  def self.education_school
    user = AutoGenerator::UserService.create(education_role: :school)
    education_school = EducationSchool.create!(name: "#{EmailService.username(user.email)} education school name", user: user, address: Address.create_random)
    AutoGenerator::AttachmentService.attach(record: education_school, relation: :avatar, number: 1)
    education_school
  end

  def self.education_category(education_school:)
    education_category = EducationCategory.create!(
      name: "education category #{SecureRandom.hex(3)}",
      parent_category: [EducationCategory.all.sample, nil].sample,
      education_school: education_school
    )
    education_category
  end

  def self.education_subject(education_school:)
    education_subject = EducationSubject.create!(
      name: Faker::Educator.subject,
      description: Faker::Movie.quote,
      education_school: education_school
    )
    education_subject
  end

  def self.education_course(education_school:)
    education_course = EducationCourse.create!(
      name: Faker::Educator.course_name,
      description: Faker::Movie.quote,
      education_school: education_school
    )
    education_course
  end
  def self.education_class(education_school:)
    education_class = EducationClass.create!(name: "education class #{SecureRandom.hex(3)}", education_school: education_school)
    AutoGenerator::AttachmentService.attach(record: education_class, relation: :images, number: 1)
    education_class
  end

  def self.education_room(education_school:)
    education_room = EducationRoom.create!(name: "education room #{SecureRandom.hex(3)}", education_school: education_school)
    AutoGenerator::AttachmentService.attach(record: education_room, relation: :images, number: 1)
    education_room
  end

  def self.education_teacher(education_school:)
    teacher_user = AutoGenerator::UserService.create(education_role: :teacher)
    education_teacher = EducationTeacher.create!(name: "#{EmailService.username(teacher_user.email)} education teacher name", user: teacher_user, education_school: education_school)
    AutoGenerator::AttachmentService.attach(record: education_teacher, relation: :images, number: 1)
    education_teacher
  end

  def self.education_student(education_school:)
    student_user = AutoGenerator::UserService.create(education_role: :student)
    education_student = EducationStudent.create!(name: "#{EmailService.username(student_user.email)} education student name", user: student_user, education_school: education_school)
    AutoGenerator::AttachmentService.attach(record: education_student, relation: :images, number: 1)
    education_student
  end

  def self.education_question(education_school:)
    education_question = EducationQuestion.create!(
      education_school: education_school,
      education_teacher: education_school.education_teachers.sample,
      question_type: rand(0..3),
      title: Faker::Movie.title,
      content: Faker::Movie.quote,
      anwser: ['A', 'B', 'C', 'D'].sample,
      choice_1: 'A',
      choice_2: 'B',
      choice_3: 'C',
      choice_4: 'D',
    )
    education_question
  end

  def self.education_exam(education_school:)
    education_exam = EducationExam.create!(
      education_school: education_school,
      education_teacher: education_school.education_teachers.sample,
      education_student: education_school.education_students.sample,
      education_course: education_school.education_courses.sample,
      education_subject: education_school.education_subjects.sample,
      name: "education exam name #{SecureRandom.hex(3)}",
      description: Faker::Movie.quote,
      score: rand(0..10),
      status: rand(0..3)
    )
    education_exam
  end

  def self.education_lesson(education_school:)
    EducationLesson.create!(
      title: Faker::Movie.title,
      content: Faker::Movie.quote,
      education_school: education_school,
      education_class: education_school.education_classes.sample,
      education_subject: education_school.education_subjects.sample,
      education_teacher: education_school.education_teachers.sample,
    )
  end

  def self.education_shift(education_school:)
    EducationShift.create!(
      title: Faker::Movie.title,
      location: nil,
      start_time: Time.now.utc,
      end_time: nil,
      duration: [45, 90, 135, 180].sample,
      education_school: education_school,
      education_class: education_school.education_classes.sample,
      education_subject: education_school.education_subjects.sample,
      education_teacher: education_school.education_teachers.sample,
    )
  end
  
  def self.education_class_appointments(education_school:)
    EducationClassAppointment.create!(
      education_class: education_school.education_classes.sample,
      education_teacher: [education_school.education_teachers.sample, nil].sample,
      education_student: [education_school.education_students.sample, nil].sample,
      education_subject: [education_school.education_subjects.sample, nil].sample,
      education_room: [education_school.education_rooms.sample, nil].sample,
    )
  end

  def self.education_category_appointments(education_school:)
    EducationCategoryAppointment.create!(
      education_category: education_school.education_categories.sample,
      education_class: [education_school.education_classes.sample, nil].sample,
      education_room: [education_school.education_rooms.sample, nil].sample,
      education_teacher: [education_school.education_teachers.sample, nil].sample,
      education_student: [education_school.education_students.sample, nil].sample,
      education_subject: [education_school.education_subjects.sample, nil].sample,
      education_course: [education_school.education_courses.sample, nil].sample,
      education_exam: [education_school.education_exams.sample, nil].sample,
      education_question: [education_school.education_questions.sample, nil].sample,
      education_lesson: [education_school.education_lessons.sample, nil].sample,
      education_shift: [education_school.education_shifts.sample, nil].sample,
    )
  end

  def self.education_question_appointments(education_school:)
    EducationQuestionAppointment.create!(
      education_exam: education_school.education_exams.sample ,
      education_question: education_school.education_questions.sample,
      score: rand(0..10),
      time: rand(0..10),
      status: rand(0..3),
      anwser: ['A', 'B', 'C', 'D'].sample,
      result: rand(0..1),
    )
  end

  def self.education_subject_appointments(education_school:)
    EducationSubjectAppointment.create!(
      education_teacher: education_school.education_teachers.sample,
      education_subject: education_school.education_subjects.sample,
    )
  end
end