class EducationSchoolPolicy < ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?
    @user.admin?
  end

  # def edit?
  #   user.user_id == record.user_id
  # end

  # def update?
  #   user.admin? || !record.published?
  # end
end