class AutoGenerator::EducationService
  def self.run
    self.education_school
    self.education_category
    self.education_subject
    self.education_course
    self.education_class
    self.education_room
    self.education_admin
    self.education_teacher
    self.education_student
    self.education_school_appointments
    self.education_question
    self.education_exam
    self.education_lesson
    self.education_shift
    self.education_class_appointments
    self.education_question_appointments
    self.education_subject_appointments
    self.education_category_appointments
  end

  def self.education_school
    2.times do
      school_user = AutoGenerator::UserService.create(education_role: :school)
      school_user_count = User.where(education_role: :school).count 
      school_user_count < 2 ? n = 2 : n = 1
      n.times do
        education_school = EducationSchool.create!(name: "#{Faker::Name.name} #{Faker::Number.number}", user: school_user, address: Address.create_random)
        AutoGenerator::AttachmentService.attach(record: education_school, relation: :avatar_attachment, number: 1)
      end
    end
  end

  def self.education_category
    EducationSchool.all.each do |education_school|
      10.times do
        EducationCategory.create!(
          name: "Category #{Faker::Number.number}",
          parent_category: [EducationCategory.all.sample, nil].sample,
          education_school: education_school
        )
      end
    end
  end

  def self.education_subject
    EducationSchool.all.each do |education_school|
      5.times do
        EducationSubject.create!(
          name: Faker::Educator.subject,
          description: Faker::Movie.quote,
          education_school: education_school
        )
      end
    end
  end

  def self.education_course
    EducationSchool.all.each do |education_school|
      5.times do
        EducationCourse.create!(
          name: Faker::Educator.course_name,
          description: Faker::Movie.quote,
          education_school: education_school
        )
      end
    end
  end

  def self.education_class
    EducationSchool.all.each do |education_school|
      5.times do
        education_class = EducationClass.create!(name: "Class #{Faker::Number.number}", education_school: education_school)
        AutoGenerator::AttachmentService.attach(record: education_class, relation: :image_attachments, number: 1)
      end
    end
  end

  def self.education_room
    EducationSchool.all.each do |education_school|
      10.times do
        education_room = EducationRoom.create!(name: "Room #{Faker::Number.number}", education_school: education_school)
        AutoGenerator::AttachmentService.attach(record: education_room, relation: :image_attachments, number: 1)
      end
    end
  end

  def self.education_admin
    5.times do
      admin_user = AutoGenerator::UserService.create(education_role: :admin)
      education_admin = EducationAdmin.create!(name: "#{Faker::Name.name} #{Faker::Number.number}", user: admin_user)
      AutoGenerator::AttachmentService.attach(record: education_admin, relation: :image_attachments, number: 1)
    end
  end
  
  def self.education_teacher
    10.times do
      teacher_user = AutoGenerator::UserService.create(education_role: :teacher)
      education_teacher = EducationTeacher.create!(name: "#{Faker::Name.name} #{Faker::Number.number}", user: teacher_user)
      AutoGenerator::AttachmentService.attach(record: education_teacher, relation: :image_attachments, number: 1)
    end
  end

  def self.education_student
    50.times do
      student_user = AutoGenerator::UserService.create(education_role: :student)
      education_student = EducationStudent.create!(name: "#{Faker::Name.name} #{Faker::Number.number}", user: student_user)
      AutoGenerator::AttachmentService.attach(record: education_student, relation: :image_attachments, number: 1)
    end
  end

  def self.education_school_appointments
    EducationAdmin.all.each do |education_admin|
      EducationSchoolAppointment.create!(
        education_school: EducationSchool.all.sample,
        education_school_appointmentable: education_admin,
      )
    end
    EducationTeacher.all.each do |education_teacher|
      EducationSchoolAppointment.create!(
        education_school: EducationSchool.all.sample,
        education_school_appointmentable: education_teacher,
      )
    end
    EducationStudent.all.each do |education_student|
      EducationSchoolAppointment.create!(
        education_school: EducationSchool.all.sample,
        education_school_appointmentable: education_student,
      )
    end
  end

  def self.education_question
    EducationSchool.all.each do |education_school|
      50.times do
        EducationQuestion.create!(
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
      end
    end
  end

  def self.education_exam
    EducationSchool.all.each do |education_school|
      10.times do
        EducationExam.create!(
          education_school: education_school,
          education_course: education_school.education_courses.sample,
          education_subject: education_school.education_subjects.sample,
          name: "Exam #{Faker::Number.number}",
          description: Faker::Movie.quote,
          status: rand(0..3)
        )
      end
    end
  end

  def self.education_lesson
    EducationSchool.all.each do |education_school|
      10.times do
        EducationLesson.create!(
          title: Faker::Movie.title,
          content: Faker::Movie.quote,
          education_school: education_school,
          education_class: education_school.education_classes.sample,
          education_subject: education_school.education_subjects.sample,
          education_teacher: education_school.education_teachers.sample,
        )
      end
    end
  end

  def self.education_shift
    EducationSchool.all.each do |education_school|
      20.times do
        start = Time.now + rand(1..50000).minutes
        EducationShift.create!(
          education_school: education_school,
          education_class: education_school.education_classes.sample,
          education_subject: education_school.education_subjects.sample,
          education_teacher: education_school.education_teachers.sample,
        )
      end
    end
  end
  
  def self.education_class_appointments
    EducationTeacher.all.each do |education_teacher|
      EducationClassAppointment.create!(
        education_class: education_teacher.education_schools.sample.education_classes.sample,
        education_class_appointmentable: education_teacher,
      )
    end
    EducationStudent.all.each do |education_student|
      EducationClassAppointment.create!(
        education_class: education_student.education_schools.sample.education_classes.sample,
        education_class_appointmentable: education_student,
      )
    end
    EducationSubject.all.each do |education_subject|
      EducationClassAppointment.create!(
        education_class: education_subject.education_school.education_classes.sample,
        education_class_appointmentable: education_subject,
      )
    end
    EducationRoom.all.each do |education_room|
      EducationClassAppointment.create!(
        education_class: education_room.education_school.education_classes.sample,
        education_class_appointmentable: education_room,
      )
    end
    EducationCourse.all.each do |education_course|
      EducationClassAppointment.create!(
        education_class: education_course.education_school.education_classes.sample,
        education_class_appointmentable: education_course,
      )
    end
    EducationExam.all.each do |education_exam|
      EducationClassAppointment.create!(
        education_class: education_exam.education_school.education_classes.sample,
        education_class_appointmentable: education_exam,
      )
    end
  end

  def self.education_category_appointments
    EducationSchool.all.each do |education_school|
      EducationClass.all.each do |education_class|
        EducationCategoryAppointment.create!(
          education_category: education_school.education_categories.sample,
          education_category_appointmentable: education_class,
        )
      end
      EducationRoom.all.each do |education_room|
        EducationCategoryAppointment.create!(
          education_category: education_school.education_categories.sample,
          education_category_appointmentable: education_room,
        )
      end
      EducationTeacher.all.each do |education_teacher|
        EducationCategoryAppointment.create!(
          education_category: education_school.education_categories.sample,
          education_category_appointmentable: education_teacher,
        )
      end
      EducationStudent.all.each do |education_student|
        EducationCategoryAppointment.create!(
          education_category: education_school.education_categories.sample,
          education_category_appointmentable: education_student,
        )
      end
      EducationSubject.all.each do |education_subject|
        EducationCategoryAppointment.create!(
          education_category: education_school.education_categories.sample,
          education_category_appointmentable: education_subject,
        )
      end
      EducationCourse.all.each do |education_course|
        EducationCategoryAppointment.create!(
          education_category: education_school.education_categories.sample,
          education_category_appointmentable: education_course,
        )
      end
      EducationExam.all.each do |education_exam|
        EducationCategoryAppointment.create!(
          education_category: education_school.education_categories.sample,
          education_category_appointmentable: education_exam,
        )
      end
      EducationQuestion.all.each do |education_question|
        EducationCategoryAppointment.create!(
          education_category: education_school.education_categories.sample,
          education_category_appointmentable: education_question,
        )
      end
      EducationLesson.all.each do |education_lesson|
        EducationCategoryAppointment.create!(
          education_category: education_school.education_categories.sample,
          education_category_appointmentable: education_lesson,
        )
      end
      EducationShift.all.each do |education_shift|
        EducationCategoryAppointment.create!(
          education_category: education_school.education_categories.sample,
          education_category_appointmentable: education_shift,
        )
      end
    end
  end

  def self.education_question_appointments
    EducationSchool.all.each do |education_school|
      education_school.education_questions.each do |education_question|
        EducationQuestionAppointment.create!(
          # education_exam: education_school.education_exams.sample,
          education_question_appointmentable: education_school.education_exams.sample,
          education_question: education_question,
          score: rand(0..10),
          time: rand(0..10),
          status: rand(0..3),
          anwser: ['A', 'B', 'C', 'D'].sample,
          result: rand(0..1),
        )
      end
    end
  end

  def self.education_subject_appointments
    EducationSchool.all.each do |education_school|
      education_school.education_subjects.each do |education_subject|
        EducationSubjectAppointment.create!(
          # education_teacher: education_school.education_teachers.sample,
          education_subject_appointmentable: education_school.education_teachers.sample,
          education_subject: education_subject,
        )
      end
    end
  end
end
