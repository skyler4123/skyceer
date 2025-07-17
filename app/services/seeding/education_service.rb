class Seeding::EducationService
  def self.run
    self.owner_user
    self.education_owner
    self.education_category
    self.education_school
    self.education_subject
    self.education_course
    self.education_class
    self.education_room
    self.education_admin
    self.education_teacher
    self.education_parent
    self.education_student
    self.education_staff
    self.education_question
    self.education_exam
    self.education_lesson
    self.education_class_appointments
    self.education_question_appointments
    self.education_subject_to_teachers
    self.education_subject_appointments
    self.education_exam_to_classes
    self.education_exam_to_student
  end

  def self.owner_user
    education_role = :education_owner
    2.times do |n|
      user = User.create!(
        email: "#{education_role}#{n}@education.com",
        name: "#{education_role} #{n}",
        uid: "#{education_role}#{n}",
        password: 'password1234',
        password_confirmation: 'password1234',
        education_role: education_role,
      )
      Seeding::AttachmentService.attach(record: user, relation: :avatar_attachment, number: 1)
    end
  end

  def self.education_owner
    User.where(education_role: :education_owner).find_each do |user|
      EducationOwner.create!(
        education_ownerable: user,
        uid: user.uid,
        name: user.name,
        email: user.email,
      )
    end
  end

  def self.education_category
    EducationOwner.find_each do |owner|
      10.times do |i|
        EducationCategory.create!(
          name: "Category #{i + 1} for #{owner.name}",
          education_owner: owner,
          uid: SecureRandom.uuid,
          color: Faker::Color.hex_color,
          nested_level: 0
        )
      end
    end
  end

  def self.education_school
    EducationOwner.find_each do |owner|
      2.times do |n|
        education_school = EducationSchool.create!(
          name: "School #{n + 1} for #{owner.name}",
          description: Faker::Company.catch_phrase,
          phone: Faker::PhoneNumber.phone_number,
          email: Faker::Internet.email,
          uid: SecureRandom.uuid,
          education_owner: owner
        )
        education_school.education_categories << owner.education_categories.sample
        Seeding::AttachmentService.attach(record: education_school, relation: :image_attachments, number: 1)
      end
    end
  end

  def self.education_subject
    EducationOwner.find_each do |owner|
      owner.education_schools.each do |education_school|
        2.times do |n|
          education_subject = EducationSubject.create!(
            education_owner: owner,
            name: "#{Faker::Educator.subject} #{n}",
            description: Faker::Movie.quote,
            education_school: education_school
          )
          education_subject.education_categories << owner.education_categories.sample
        end
      end
    end
  end

  def self.education_course
    EducationOwner.find_each do |owner|
      owner.education_schools.each do |education_school|
        2.times do |n|
          education_course = EducationCourse.create!(
            education_owner: owner,
            name: "#{Faker::Educator.course_name} #{n}",
            description: Faker::Movie.quote,
            education_school: education_school
          )
          education_course.education_categories << owner.education_categories.sample
        end
      end
    end
  end

  def self.education_class
    EducationOwner.find_each do |owner|
      owner.education_schools.each do |education_school|
        2.times do |n|
          education_class = EducationClass.create!(
            education_owner: owner,
            name: "Class #{n + 1} for #{education_school.name}",
            description: Faker::Movie.quote,
            education_school: education_school,
            education_course: education_school.education_courses.sample
          )
          education_class.education_categories << owner.education_categories.sample
          Seeding::AttachmentService.attach(record: education_class, relation: :image_attachments, number: 1)
        end
      end
    end
  end

  def self.education_room
    EducationOwner.find_each do |owner|
      owner.education_schools.each do |education_school|
        2.times do
          education_room = EducationRoom.create!(
            name: "Room #{SecureRandom.hex(3)}",
            education_school: education_school,
            education_owner: owner
          )
          education_room.education_categories << owner.education_categories.sample
          Seeding::AttachmentService.attach(record: education_room, relation: :image_attachments, number: 1)
        end
      end
    end
  end

  def self.education_admin
    EducationOwner.find_each do |owner|
      owner.education_schools.each do |education_school|
        2.times do
          admin_user = Seeding::UserService.create(education_role: :education_admin)
          education_admin = EducationAdmin.create!(
            education_owner: owner,
            name: "#{Faker::Name.name} #{SecureRandom.hex(3)}",
            email: Faker::Internet.email,
            user: admin_user,
            education_school: education_school,
          )
          education_admin.education_categories << owner.education_categories.sample
          Seeding::AttachmentService.attach(record: education_admin, relation: :image_attachments, number: 1)
        end
      end
    end
  end
  
  def self.education_teacher
    EducationOwner.find_each do |owner|
      owner.education_schools.each do |education_school|
        2.times do |n|
          teacher_user = Seeding::UserService.create(education_role: :education_teacher)
          education_teacher = EducationTeacher.create!(
            education_owner: owner,
            name: "#{Faker::Name.name} #{SecureRandom.hex(3)}",
            email: Faker::Internet.email,
            user: teacher_user,
            education_school: education_school,
          )
          education_teacher.education_categories << owner.education_categories.sample
          Seeding::AttachmentService.attach(record: education_teacher, relation: :image_attachments, number: 1)
        end
      end
    end
  end

  def self.education_parent
    EducationOwner.find_each do |owner|
      owner.education_schools.each do |education_school|
        2.times do
          parent_user = Seeding::UserService.create(education_role: :education_parent)
          education_parent = EducationParent.create!(
            education_owner: owner,
            name: "#{Faker::Name.name} #{SecureRandom.hex(3)}",
            email: Faker::Internet.email,
            user: parent_user,
            education_school: education_school,
          )
          education_parent.education_categories << owner.education_categories.sample
          Seeding::AttachmentService.attach(record: education_parent, relation: :image_attachments, number: 1)
        end
      end
    end
  end

  def self.education_staff
    EducationOwner.find_each do |owner|
      owner.education_schools.each do |education_school|
        2.times do
          staff_user = Seeding::UserService.create(education_role: :education_staff)
          education_staff = EducationStaff.create!(
            education_owner: owner,
            name: "#{Faker::Name.name} #{SecureRandom.hex(3)}",
            position: Faker::Job.position,
            title: Faker::Job.title,
            department: Faker::Company.industry,
            phone: Faker::PhoneNumber.phone_number,
            email: Faker::Internet.email,
            user: staff_user,
            education_school: education_school,
          )
          education_staff.education_categories << owner.education_categories.sample
          Seeding::AttachmentService.attach(record: education_staff, relation: :image_attachments, number: 1)
        end
      end
    end
  end

  def self.education_student
    EducationOwner.find_each do |owner|
      owner.education_schools.each do |education_school|
        2.times do
          student_user = Seeding::UserService.create(education_role: :education_student)
          education_student = EducationStudent.create!(
            education_owner: owner,
            name: "#{Faker::Name.name} #{SecureRandom.hex(3)}",
            email: Faker::Internet.email,
            user: student_user,
            education_school: education_school,
          )
          education_student.education_parent << owner.education_parents.sample
          education_student.education_categories << owner.education_categories.sample
          Seeding::AttachmentService.attach(record: education_student, relation: :image_attachments, number: 1)
        end
      end
    end
  end

  def self.education_question
    EducationOwner.find_each do |owner|
      owner.education_schools.each do |education_school|
        2.times do
          education_question = EducationQuestion.create!(
            education_owner: owner,
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
          education_question.education_categories << owner.education_categories.sample
        end
      end
    end
  end

  def self.education_exam
    EducationOwner.find_each do |owner|
      owner.education_schools.each do |education_school|
        (education_school.education_classes.count * 5).times do
          education_exam = EducationExam.create!(
            education_owner: owner,
            education_school: education_school,
            education_subject: education_school.education_subjects.sample,
            name: "Exam #{SecureRandom.hex(3)}",
            description: Faker::Movie.quote,
            status: rand(0..2)
          )
          education_exam.education_categories << owner.education_categories.sample
        end
      end
    end
  end

  def self.education_lesson
    EducationOwner.find_each do |owner|
      owner.education_schools.each do |education_school|
        2.times do
          education_lesson = EducationLesson.create!(
            title: Faker::Movie.title,
            content: Faker::Movie.quote,
            education_owner: owner,
            education_school: education_school,
            education_class: education_school.education_classes.sample,
            education_subject: education_school.education_subjects.sample,
            education_teacher: education_school.education_teachers.sample,
          )
          education_lesson.education_categories << owner.education_categories.sample
        end
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

  def self.education_subject_to_teachers
    EducationSchool.all.each do |education_school|
      education_school.education_subjects.each do |education_subject|
        education_subject.education_teachers << education_school.education_teachers.sample
      end
      education_school.education_teachers.each do |education_teacher|
        education_teacher.education_subjects << education_school.education_subjects.sample
      end
    end
  end

  def self.education_subject_appointments
    EducationSchool.all.each do |education_school|
      education_school.education_subjects.each do |education_subject|
        EducationSubjectAppointment.find_or_create_by!(
          education_subject: education_subject,
          education_class: education_subject.education_classes.sample,
          education_teacher: education_subject.education_teachers.sample,
        )
      rescue ActiveRecord::RecordInvalid => e
        puts "Error creating EducationExamToClass: #{e.message}"
        next
      end
      education_school.education_classes.each do |education_class|
        EducationSubjectAppointment.find_or_create_by!(
          education_class: education_class,
          education_subject: education_class.education_subjects.sample,
          education_teacher: education_class.education_teachers.sample,
        )
      rescue ActiveRecord::RecordInvalid => e
        puts "Error creating EducationExamToClass: #{e.message}"
        next
      end
      education_school.education_teachers.each do |education_teacher|
        EducationSubjectAppointment.find_or_create_by!(
          education_teacher: education_teacher,
          education_subject: education_teacher.education_subjects.sample,
          education_class: education_teacher.education_classes.sample,
        )
      rescue
        next
      end
    end
  end

  def self.education_exam_to_classes
    EducationSchool.all.each do |education_school|
      education_school.education_exams.each do |education_exam|
        EducationExamToClass.find_or_create_by!(
          education_exam: education_exam,
          education_class: education_school.education_classes.sample,
          education_subject: education_exam.education_subject,
          name: "Exam" + "#{SecureRandom.hex(3)}",
          description: Faker::Movie.quote,
        )
      rescue ActiveRecord::RecordInvalid => e
        puts "Error creating EducationExamToClass: #{e.message}"
        next
      end
      education_school.education_classes.each do |education_class|
        education_exam = education_school.education_exams.sample
        EducationExamToClass.find_or_create_by!(
          education_class: education_class,
          education_exam: education_exam,
          education_subject: education_exam.education_subject,

          name: "Exam" + "#{SecureRandom.hex(3)}",
          description: Faker::Movie.quote,
        )
      rescue ActiveRecord::RecordInvalid => e
        puts "Error creating EducationExamToClass: #{e.message}"
        next
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
          education_exam_to_class: education_exam_to_class,
          status: rand(0..2),
          score: rand(0..10),
        )
      end
    end
  end
end
