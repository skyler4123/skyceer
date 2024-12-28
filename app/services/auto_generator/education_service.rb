class AutoGenerator::EducationService
  def self.run(seed_number: 2)
    seed_number.times do |index|
      user = AutoGenerator::UserService.create(education_role: :school)
      2.times do
        education_school = self.education_school(user:)
        30.times do
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
        5.times do
          self.education_teacher(education_school:)
        end
        10.times do
          self.education_student(education_school:)
        end
        20.times do
          self.education_question(education_school:)
        end
        5.times do
          self.education_exam(education_school:)
        end
        3.times do
          self.education_lesson(education_school:)
        end
        20.times do
          self.education_shift(education_school:)
        end
        50.times do
          self.education_class_appointments(education_school:)
        end
        50.times do
          self.education_question_appointments(education_school:)
        end
        20.times do
          self.education_subject_appointments(education_school:)
        end
        50.times do
          self.education_category_appointments(education_school:)
        end
      end
    end
  end

  def self.education_school(user:)
    education_school = EducationSchool.create!(name: "#{Faker::Name.name} #{Faker::Number.number}", user: user, address: Address.create_random)
    AutoGenerator::AttachmentService.attach(record: education_school, relation: :avatar, number: 1)
    education_school
  end

  def self.education_category(education_school:)
    education_category = EducationCategory.create!(
      name: "Category #{Faker::Number.number}",
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
    education_class = EducationClass.create!(name: "Class #{Faker::Number.number}", education_school: education_school)
    AutoGenerator::AttachmentService.attach(record: education_class, relation: :images, number: 1)
    education_class
  end

  def self.education_room(education_school:)
    education_room = EducationRoom.create!(name: "Room #{Faker::Number.number}", education_school: education_school)
    AutoGenerator::AttachmentService.attach(record: education_room, relation: :images, number: 1)
    education_room
  end

  def self.education_teacher(education_school:)
    teacher_user = AutoGenerator::UserService.create(education_role: :teacher)
    education_teacher = EducationTeacher.create!(name: "#{Faker::Name.name} #{Faker::Number.number}", user: teacher_user, education_school: education_school)
    AutoGenerator::AttachmentService.attach(record: education_teacher, relation: :images, number: 1)
    education_teacher
  end

  def self.education_student(education_school:)
    student_user = AutoGenerator::UserService.create(education_role: :student)
    education_student = EducationStudent.create!(name: "#{Faker::Name.name} #{Faker::Number.number}", user: student_user, education_school: education_school)
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
      name: "Exam #{Faker::Number.number}",
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
    start = Time.now + rand(1..50000).minutes
    EducationShift.create!(
      education_school: education_school,
      education_class: education_school.education_classes.sample,
      education_subject: education_school.education_subjects.sample,
      education_teacher: education_school.education_teachers.sample,
      lib: "tui",
      title: "#{Faker::Movie.title}",
      body: "#{Faker::Movie.quote}",
      isAllday: false,
      start: start,
      end: start + rand(10..60).minutes,
      goingDuration: 0,
      comingDuration: 0,
      location: Address.create_random.id,
      attendees: [],
      category: ['milestone', 'task', 'time', 'allday'].sample,
      dueDateClass: "",
      recurrenceRule: "",
      state: ["Busy", "Free"].sample,
      isVisible: true,
      isPending: false,
      isFocused: false,
      isReadOnly: false,
      isPrivate: false,
      color: '#' + SecureRandom.hex(3),
      backgroundColor: '#' + SecureRandom.hex(3),
      dragBackgroundColor: '#' + SecureRandom.hex(3),
      borderColor: '#' + SecureRandom.hex(3),
      customStyle: {},
      raw: {},
    )
  end
  
  def self.education_class_appointments(education_school:)
    EducationClassAppointment.create!(
      education_class: education_school.education_classes.sample,
      education_teacher: [education_school.education_teachers.sample, nil].sample,
      education_student: [education_school.education_students.sample, nil].sample,
      education_subject: [education_school.education_subjects.sample, nil].sample,
      education_room: [education_school.education_rooms.sample, nil].sample,
      education_course: [education_school.education_courses.sample, nil].sample,
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