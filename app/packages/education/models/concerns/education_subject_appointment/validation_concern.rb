module EducationSubjectAppointment::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :education_subject, presence: true
    validates :education_class, presence: true
    validates :education_teacher, presence: true
    validate :unique_subject_per_class

    private

    # def unique_subject_class_teacher_combination
    #   if EducationSubjectAppointment.where(
    #       education_subject: education_subject,
    #       education_class: education_class,
    #       education_teacher: education_teacher
    #     ).where.not(id: id).exists?
    #     errors.add(:base, "A subject can only appoint one time to a class with a teacher")
    #   end
    # end

    def unique_subject_per_class
      if EducationSubjectAppointment.where(
           education_subject: education_subject,
           education_class: education_class
         ).where.not(id: id).exists?
        errors.add(:education_subject, "A subject can only appoint one time to a class with a teacher")
      end
    end
  end

end
