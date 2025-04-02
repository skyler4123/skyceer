class Seeding::EducationService
  def self.run
    self.education_school_user
    self.education_category
    self.education_school
    self.education_subject
    self.education_course
    self.education_class
    self.education_room
    self.education_admin
    self.education_teacher
    self.education_student
    self.education_parent
    self.education_question
    self.education_exam
    self.education_lesson
    self.education_class_appointments
    self.education_question_appointments
    self.education_subject_appointments
    self.education_exam_to_classes
    self.education_exam_to_student
  end

  def self.create_user(education_role: :education_school, n: 0)
    user = User.create!(
      email: "#{education_role}#{n}@education.com",
      password: 'password1234',
      password_confirmation: 'password1234',
      education_role: education_role,
    )
    Seeding::AttachmentService.attach(record: user, relation: :avatar_attachment, number: 1)
  end

  def self.education_school_user
    2.times do |n|
      Seeding::EducationService.create_user(education_role: :education_school, n: n)
    end
  end

  def self.education_category
    User.all.where(education_role: :education_school).each do |user|
      50.times do
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

  def self.education_school
    User.where(education_role: :education_school).each do |user|
      2.times do
        education_school = EducationSchool.create!(
          name: Faker::Name.name,
          email: Faker::Internet.email,
          user: user,
          address: Address.create_random
        )
        education_school.education_categories << user.education_categories.sample
        Seeding::AttachmentService.attach(record: education_school, relation: :avatar_attachment, number: 1)
      end
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
    User.where(education_role: :education_school).each do |user|
      5.times do
        admin_user = Seeding::UserService.create(education_role: :education_admin)
        education_admin = EducationAdmin.create!(
          name: "#{Faker::Name.name} #{Faker::Number.number}",
          email: Faker::Internet.email,
          user: admin_user,
          education_school_user: user,
        )
        education_admin.education_schools << user.education_schools.sample
        education_admin.education_categories << user.education_categories.sample
        Seeding::AttachmentService.attach(record: education_admin, relation: :image_attachments, number: 1)
      end
    end
  end
  
  def self.education_teacher
    User.where(education_role: :education_school).each do |user|
      5.times do
        teacher_user = Seeding::UserService.create(education_role: :education_teacher)
        education_teacher = EducationTeacher.create!(
          name: "#{Faker::Name.name} #{Faker::Number.number}",
          email: Faker::Internet.email,
          user: teacher_user,
          education_school_user: user,
        )
        education_teacher.education_schools << user.education_schools.sample
        education_teacher.education_categories << user.education_categories.sample
        Seeding::AttachmentService.attach(record: education_teacher, relation: :image_attachments, number: 1)
      end
    end
  end

  def self.education_student
    User.where(education_role: :education_school).each do |user|
      40.times do
        student_user = Seeding::UserService.create(education_role: :education_student)
        education_student = EducationStudent.create!(
          name: "#{Faker::Name.name} #{Faker::Number.number}",
          email: Faker::Internet.email,
          user: student_user,
          education_school_user: user,
        )
        education_student.education_schools << user.education_schools.sample
        education_student.education_categories << user.education_categories.sample
        Seeding::AttachmentService.attach(record: education_student, relation: :image_attachments, number: 1)
      end
    end
  end

  def self.education_parent
    User.where(education_role: :education_school).each do |user|
      40.times do
        parent_user = Seeding::UserService.create(education_role: :education_parent)
        education_parent = EducationParent.create!(
          name: "#{Faker::Name.name} #{Faker::Number.number}",
          email: Faker::Internet.email,
          user: parent_user,
          education_school_user: user,
        )
        education_parent.education_schools << user.education_schools.sample
        education_parent.education_categories << user.education_categories.sample
        Seeding::AttachmentService.attach(record: education_parent, relation: :image_attachments, number: 1)
      end
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
          status: rand(0..2)
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
    EducationSchool.all.each do |education_school|
      education_school.education_classes.each do |education_class|
        EducationClassAppointment.find_or_create_by!(
          education_class: education_class,
          appoint_to: education_school.education_teachers.sample,
        )
        EducationClassAppointment.find_or_create_by!(
          education_class: education_class,
          appoint_to: education_school.education_students.sample,
        )
        # EducationClassAppointment.find_or_create_by!(
        #   education_class: education_class,
        #   appoint_to: education_school.education_exams.sample,
        # )
        EducationClassAppointment.find_or_create_by!(
          education_class: education_class,
          appoint_to: education_school.education_rooms.sample,
        )
        EducationClassAppointment.find_or_create_by!(
          education_class: education_class,
          appoint_to: education_school.education_subjects.sample,
        )
      end
      education_school.education_teachers.each do |education_teacher|
        EducationClassAppointment.find_or_create_by!(
          education_class: education_school.education_classes.sample,
          appoint_to: education_teacher,
        )
      end
      education_school.education_students.each do |education_student|
        EducationClassAppointment.find_or_create_by!(
          education_class: education_school.education_classes.sample,
          appoint_to: education_student,
        )
      end
      # education_school.education_exams.each do |education_exam|
      #   EducationClassAppointment.find_or_create_by!(
      #     education_class: education_school.education_classes.sample,
      #     appoint_to: education_exam,
      #   )
      # end
      education_school.education_rooms.each do |education_room|
        EducationClassAppointment.find_or_create_by!(
          education_class: education_school.education_classes.sample,
          appoint_to: education_room,
        )
      end
      education_school.education_subjects.each do |education_subject|
        EducationClassAppointment.find_or_create_by!(
          education_class: education_school.education_classes.sample,
          appoint_to: education_subject,
        )
      end
    end
  end

  def self.education_question_appointments
    EducationSchool.all.each do |education_school|
      education_school.education_questions.each do |education_question|
        EducationQuestionAppointment.create!(
          # education_exam: education_school.education_exams.sample,
          appoint_to: education_school.education_exams.sample,
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
        EducationSubjectAppointment.find_or_create_by!(
          education_subject: education_subject,
          education_class: education_school.education_classes.sample,
          education_teacher: education_school.education_teachers.sample,
        )
      end
      education_school.education_classes.each do |education_class|
        EducationSubjectAppointment.find_or_create_by!(
          education_class: education_class,
          education_subject: education_school.education_subjects.sample,
          education_teacher: education_school.education_teachers.sample,
        )
      end
      education_school.education_teachers.each do |education_teacher|
        EducationSubjectAppointment.find_or_create_by!(
          education_teacher: education_teacher,
          education_subject: education_school.education_subjects.sample,
          education_class: education_school.education_classes.sample,
        )
      end
    end
  end

  def self.education_exam_to_classes
    EducationSchool.all.each do |education_school|
      education_school.education_exams.each do |education_exam|
        EducationExamToClass.find_or_create_by!(
          education_exam: education_exam,
          education_class: education_school.education_classes.sample,
        )
      end
      education_school.education_classes.each do |education_class|
        EducationExamToClass.find_or_create_by!(
          education_class: education_class,
          education_exam: education_school.education_exams.sample,
        )
      end
    end
  end

  def self.education_exam_to_student
    EducationExamToClass.all.each do |education_exam_to_class|
      education_exam = education_exam_to_class.education_exam
      education_class = education_exam_to_class.education_class
      education_students = education_class.education_students
      education_students.each do |education_student|
        EducationExamToStudent.find_or_create_by!(
          education_exam: education_exam,
          education_student: education_student,
          status: rand(0..3),
          score: rand(0..10),
        )
      end
    end
  end
end
