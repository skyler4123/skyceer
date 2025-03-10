class Seeding::EducationService
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
    self.education_parent
    self.education_school_appointments
    self.education_question
    self.education_exam
    self.education_lesson
    self.education_class_appointments
    self.education_question_appointments
    self.education_subject_appointments
    # self.education_category_appointments
    self.education_exam_appointments
  end

  def self.education_school
    2.times do
      school_user = Seeding::UserService.create(education_role: :education_school)
      school_user_count = User.where(education_role: :education_school).count 
      school_user_count < 2 ? n = 2 : n = 1
      n.times do
        education_school = EducationSchool.create!(
          name: Faker::Name.name,
          email: Faker::Internet.email,
          user: school_user,
          address: Address.create_random
        )
        Seeding::AttachmentService.attach(record: education_school, relation: :avatar_attachment, number: 1)
      end
    end
  end

  def self.education_category
    User.all.where(education_role: :education_school).each do |user|
      20.times do
        EducationCategory.create!(
          name: "Category #{Faker::Number.number}",
          parent_category: [EducationCategory.all.sample, nil].sample,
          user: user
        )
      end
    end
    EducationSchool.all.each do |education_school|
      education_school.education_categories << education_school.user.education_categories.sample
    end
  end

  def self.education_subject
    EducationSchool.all.each do |education_school|
      5.times do
        education_subject = EducationSubject.create!(
          name: Faker::Educator.subject,
          description: Faker::Movie.quote,
          education_school: education_school
        )
        education_subject.education_categories << education_school.user.education_categories.sample
      end
    end
  end

  def self.education_course
    EducationSchool.all.each do |education_school|
      5.times do
        education_course = EducationCourse.create!(
          name: Faker::Educator.course_name,
          description: Faker::Movie.quote,
          education_school: education_school
        )
        education_course.education_categories << education_school.user.education_categories.sample
      end
    end
  end

  def self.education_class
    EducationSchool.all.each do |education_school|
      5.times do
        education_class = EducationClass.create!(
          name: "Class #{Faker::Number.number}",
          education_school: education_school,
          education_course: education_school.education_courses.sample,
        )
        education_class.education_categories << education_school.user.education_categories.sample
        Seeding::AttachmentService.attach(record: education_class, relation: :image_attachments, number: 1)
      end
    end
  end

  def self.education_room
    EducationSchool.all.each do |education_school|
      10.times do
        education_room = EducationRoom.create!(name: "Room #{Faker::Number.number}", education_school: education_school)
        education_room.education_categories << education_school.user.education_categories.sample
        Seeding::AttachmentService.attach(record: education_room, relation: :image_attachments, number: 1)
      end
    end
  end

  def self.education_admin
    EducationSchool.all.each do |education_school|
      5.times do
        admin_user = Seeding::UserService.create(education_role: :education_admin)
        education_admin = EducationAdmin.create!(
          name: "#{Faker::Name.name} #{Faker::Number.number}",
          email: Faker::Internet.email,
          user: admin_user,
          education_school_user: education_school.user,
        )
        Seeding::AttachmentService.attach(record: education_admin, relation: :image_attachments, number: 1)
      end
    end
  end
  
  def self.education_teacher
    (EducationClass.count * 5).times do
      teacher_user = Seeding::UserService.create(education_role: :education_teacher)
      education_teacher = EducationTeacher.create!(
        name: "#{Faker::Name.name} #{Faker::Number.number}",
        email: Faker::Internet.email,
        user: teacher_user,
      )
      Seeding::AttachmentService.attach(record: education_teacher, relation: :image_attachments, number: 1)
    end
  end

  def self.education_student
    (EducationClass.count * 10).times do
      student_user = Seeding::UserService.create(education_role: :education_student)
      education_student = EducationStudent.create!(
        name: "#{Faker::Name.name} #{Faker::Number.number}",
        email: Faker::Internet.email,
        user: student_user,
      )
      Seeding::AttachmentService.attach(record: education_student, relation: :image_attachments, number: 1)
    end
  end

  def self.education_parent
    EducationStudent.all.each do |education_student|
      parent_user = Seeding::UserService.create(education_role: :education_parent)
      education_parent = EducationParent.create!(
        name: "#{Faker::Name.name} #{Faker::Number.number}",
        email: Faker::Internet.email,
        user: parent_user,
      )
      education_student.update(education_parent: education_parent)
      Seeding::AttachmentService.attach(record: education_parent, relation: :image_attachments, number: 1)
    end
  end

  def self.education_school_appointments
    EducationAdmin.all.each do |education_admin|
      education_school = EducationSchool.all.sample
      EducationSchoolAppointment.create!(
        education_school: education_school,
        education_school_appointmentable: education_admin,
      )
      education_admin.education_categories << education_school.user.education_categories.sample
    end
    EducationTeacher.all.each do |education_teacher|
      education_school = EducationSchool.all.sample
      EducationSchoolAppointment.create!(
        education_school: education_school,
        education_school_appointmentable: education_teacher,
      )
      education_teacher.education_categories << education_school.user.education_categories.sample
    end
    EducationStudent.all.each do |education_student|
      education_school = EducationSchool.all.sample
      EducationSchoolAppointment.create!(
        education_school: education_school,
        education_school_appointmentable: education_student,
      )
      education_student.education_categories << education_school.user.education_categories.sample
    end
    EducationParent.all.each do |education_parent|
      education_school = EducationSchool.all.sample
      EducationSchoolAppointment.create!(
        education_school: education_school,
        education_school_appointmentable: education_parent,
      )
      education_parent.education_categories << education_school.user.education_categories.sample
    end
  end

  def self.education_question
    EducationSchool.all.each do |education_school|
      50.times do
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
        education_question.education_categories << education_school.user.education_categories.sample
      end
    end
  end

  def self.education_exam
    EducationSchool.all.each do |education_school|
      (education_school.education_classes.count * 5).times do
        education_exam = EducationExam.create!(
          education_school: education_school,
          education_subject: education_school.education_subjects.sample,
          name: "Exam #{Faker::Number.number}",
          description: Faker::Movie.quote,
          status: rand(0..3)
        )
        education_exam.education_categories << education_school.user.education_categories.sample
      end
    end
  end

  def self.education_lesson
    EducationSchool.all.each do |education_school|
      10.times do
        education_lesson = EducationLesson.create!(
          title: Faker::Movie.title,
          content: Faker::Movie.quote,
          education_school: education_school,
          education_class: education_school.education_classes.sample,
          education_subject: education_school.education_subjects.sample,
          education_teacher: education_school.education_teachers.sample,
        )
        education_lesson.education_categories << education_school.user.education_categories.sample
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
    EducationExam.all.each do |education_exam|
      EducationClassAppointment.create!(
        education_class: education_exam.education_school.education_classes.sample,
        education_class_appointmentable: education_exam,
      )
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

  def self.education_exam_appointments
    education_class_appointments_for_exam = EducationClassAppointment.where(education_class_appointmentable_type: 'EducationExam')
    education_class_appointments_for_exam.each do |education_class_appointment|
      education_class = education_class_appointment.education_class
      education_exam = education_class_appointment.education_class_appointmentable
      education_students = education_class.education_students
      education_students.each do |education_student|
        education_student.education_exam_appointments.create!(
          education_exam: education_exam,
          score: rand(0..10),
        )
      end
    end
  end
end
