class EducationSubjectAppointment < ApplicationRecord
  belongs_to :education_subject
  belongs_to :education_class
  belongs_to :education_teacher

  validates :education_subject, presence: true
  validates :education_class, presence: true
  validates :education_teacher, presence: true

  # Custom validation to ensure uniqueness of subject-teacher-class combination
  validate :unique_subject_teacher_class_combination

  private

  def unique_subject_teacher_class_combination
    # Check if a record with the same subject, teacher, and class already exists
    if EducationSubjectAppointment.where(education_subject: education_subject, education_class: education_class)
                                  .where.not(id: id) # Exclude the current record for updates
                                  .exists?(education_teacher: education_teacher)
      errors.add(:base, "A subject can only appoint one teacher to a class")
    end
  end
end
