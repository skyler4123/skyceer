class UserPolicy < ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?
    debugger
    true
  end

  def show?
    debugger
    true
  end
end