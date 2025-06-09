module EducationExamToClass::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :education_exam, presence: true
    validates :education_class, presence: true
    # validates :name, presence: true
    # validates :description, presence: true
    validates :score, numericality: { greater_than_or_equal_to: 0 }, allow_nil: true
    validates :status, numericality: { only_integer: true }, allow_nil: true
    validate :unique_exam_class_combination

    private

    def unique_exam_class_combination
      # if EducationExamToClass.where(education_exam: education_exam, education_class: education_class).where.not(id: id).exists?
      #   errors.add(:base, "An exam can only be assigned once to a class")
      # end
    end
  end

end
