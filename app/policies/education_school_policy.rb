class EducationSchoolPolicy < ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?
    @user.admin?
  end

  def show?
    true
  end

  def create?
    true
  end

  def new?
    create?
  end

  def edit?
    return true if @user.admin?
    return true if record.user_id == @user.user_id
    false
  end

  def update?
    edit?
  end

  def destroy?
    false
  end

  def education_school?
    return true if @user.admin?
    return true if @user.education_school?
    false
  end

  def education_teacher?
    return true if @user.admin?
    return true if @user.education_teacher?
    false
  end

  def education_student?
    return true if @user.admin?
    return true if @user.education_student?
    false
  end

  def teachers?
    @user.user_id == @record.user_id
  end
end
