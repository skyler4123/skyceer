class AutoGenerator::EducationService
  def self.run(seed_number: 5)
    seed_number.times do |index|
      user = AutoGenerator::UserService.create(education_role: :school)
      education_school = EducationSchool.create!(name: "#{EmailService.username(user.email)} education school name", user: user, address: Address.create_random)
      10.times do |n|
        education_category = EducationCategory.create!(
          name: "education category #{n}",
          parent_category: [EducationCategory.all.sample, nil].sample,
          education_school: education_school
        )
        education_subject = EducationSubject.create!(
          name: Faker::Educator.subject,
          description: Faker::Movie.quote,
          education_category: education_category,
          education_school: education_school
        )
        education_course = EducationCourse.create!(
          name: Faker::Educator.course_name,
          description: Faker::Movie.quote,
          education_category: education_category,
          education_school: education_school
        )
      end

      AutoGenerator::AttachmentService.attach(record: education_school, relation: :avatar, number: 1)
      education_classses = (1..5).map do |n|
        education_class = EducationClass.create!(name: "education class #{n}", education_school: education_school)
        AutoGenerator::AttachmentService.attach(record: education_class, relation: :images, number: 2)
        education_class
      end

      education_rooms = education_classses.map do |education_class|
        education_room = EducationRoom.create!(name: "education room #{SecureRandom.hex(3)}", education_school: education_school)
        AutoGenerator::AttachmentService.attach(record: education_room, relation: :images, number: 2)
        education_room
      end

      education_teachers = (1..5).map do |n|
        teacher_user = AutoGenerator::UserService.create(education_role: :teacher)
        education_teacher = EducationTeacher.create!(name: "#{EmailService.username(teacher_user.email)} education teacher name", user: teacher_user, education_school: education_school)
        AutoGenerator::AttachmentService.attach(record: education_teacher, relation: :images, number: 2)
        education_teacher
      end

      education_students = (1..10).map do |n|
        student_user = AutoGenerator::UserService.create(education_role: :student)
        education_student = EducationStudent.create!(name: "#{EmailService.username(student_user.email)} education student name", user: student_user, education_school: education_school)
        AutoGenerator::AttachmentService.attach(record: education_student, relation: :images, number: 2)
        education_student
      end

      education_questions = (1..20).map do |n|
        education_question = EducationQuestion.create!(
          education_school: education_school,
          education_category: education_school.education_categories.all.sample,
          education_teacher: education_school.education_teachers.all.sample,
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

      education_school.education_students.each do |education_student|
        5.times do |n|
          education_exam = EducationExam.create!(
            education_school: education_school,
            education_student: education_student,
            education_course: education_school.education_courses.all.sample,
            education_subject: education_school.education_subjects.all.sample,
            education_category: education_school.education_categories.all.sample,
            name: "education exam name #{n}",
            description: Faker::Movie.quote,
            score: rand(0..10),
            status: rand(0..3)
          )
        end
      end

      education_school.education_exams.each do |education_exam|
        5.times do |n|
          education_exam_question = EducationExamQuestion.create!(
            education_exam: education_exam,
            education_question: education_questions.sample,
            score: rand(0..10),
            time: rand(0..10),
            status: rand(0..3),
            anwser: ['A', 'B', 'C', 'D'].sample,
            result: rand(0..1),
          )
        end
      end
    end
  end
end