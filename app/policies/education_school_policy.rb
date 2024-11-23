class EducationSchoolPolicy < ApplicationPolicy
  attr_reader :user, :resource

  def initialize(user, resource)
    @user = user
    @resource = resource
  end

  def index?
    @user.admin?
  end

  # def edit?
  #   user.user_id == resource.user_id
  # end

  # def update?
  #   user.admin? || !resource.published?
  # end
end