class EducationCategoryAppointment < ApplicationRecord
  belongs_to :education_category
  belongs_to :education_class, optional: true
  belongs_to :education_room, optional: true
  belongs_to :education_teacher, optional: true
  belongs_to :education_student, optional: true
  belongs_to :education_subject, optional: true
  belongs_to :education_course, optional: true
  belongs_to :education_exam, optional: true
  belongs_to :education_question, optional: true
  belongs_to :education_lesson, optional: true
  belongs_to :education_shift, optional: true
end
