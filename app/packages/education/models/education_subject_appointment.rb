class EducationSubjectAppointment < ApplicationRecord
  belongs_to :education_subject
  belongs_to :appoint_from, polymorphic: true, optional: true # "Appoint From Teacher, can be null if appointment only to assinged subject to class as placeholder"
  belongs_to :appoint_to, polymorphic: true, optional: true # "Appoint To Class, can be null if appointment only to assinged subject to teacher as placeholder"
  # belongs_to :education_class, optional: true, class_name: "EducationClass", foreign_key: :appoint_to_id #, foreign_type: :appoint_to_type
  # belongs_to :education_teacher, optional: true, class_name: "EducationTeacher", foreign_key: :appoint_from_id #, foreign_type: :appoint_from_type

  validates :education_subject, presence: true
end
