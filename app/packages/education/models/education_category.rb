class EducationCategory < ApplicationRecord
  before_destroy :remove_association
  # a category can have many subcategories.
  has_many :subcategories, class_name: "EducationCategory", foreign_key: "parent_category_id", dependent: :destroy

  # a category can have one parent category.
  belongs_to :parent_category, class_name: "EducationCategory", optional: true
  belongs_to :education_school

  has_many :education_courses
  has_many :education_exams
  has_many :education_questions
  has_many :education_subjects
  has_many :education_classes
  has_many :education_rooms
  has_many :education_students
  has_many :education_teachers

  def remove_association
    education_courses.each { |course| course.update(education_category: nil) }
    education_exams.each { |exam| exam.update(education_category: nil) }
    education_questions.each { |question| question.update(education_category: nil) }
    education_subjects.each { |subject| subject.update(education_category: nil) }
    education_classes.each { |klass| klass.update(education_category: nil) }
    education_rooms.each { |room| room.update(education_category: nil) }
    education_students.each { |student| student.update(education_category: nil) }
    education_teachers.each { |teacher| teacher.update(education_category: nil) }
  end
end
