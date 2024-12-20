module User::EducationConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :education_school, dependent: :destroy
    has_many :education_teachers, dependent: :destroy
    has_many :education_students, dependent: :destroy


    def education
      case self.education_role.to_sym
      when :school
        self.education_school
      when :teacher
        self.education_teacher
      when :student
        self.education_student
      end
    end

    def navigation_record
      return self.education_school if self.education_school
      self
    end

    def education_schools
      if self.education_role == 'teacher'
        self.education_teachers.map(&:education_school)
      elsif self.education_role == 'student'
        self.education_students.map(&:education_school)
      end
    end

    def education_courses
      if self.education_role == 'teacher'
        self.education_schools.map(&:education_courses).flatten
      elsif self.education_role == 'student'
        self.education_schools.map(&:education_courses).flatten
      end
    end

    def education_classes
      if self.education_role == 'teacher'
        self.education_teachers.map(&:education_classes).flatten
      elsif self.education_role == 'student'
        self.education_students.map(&:education_classes).flatten
      end
    end

    def education_exams
      if self.education_role == 'teacher'
        self.education_teachers.map(&:education_exams).flatten
      elsif self.education_role == 'student'
        self.education_students.map(&:education_exams).flatten
      end
    end



  end

end
