class EducationSchool::EducationSchoolPolicy < ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?
    debugger
    # @user.education_school?
  end

  # def edit?
  #   user.user_id == record.user_id
  # end

  # def update?
  #   user.admin? || !record.published?
  # end
end