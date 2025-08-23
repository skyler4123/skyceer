class EducationPolicy < ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?
    return true if @user.admin?
    @user.education_role.present?
  end
end
