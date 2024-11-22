class EducationSchoolPolicy < ApplicationPolicy
  attr_reader :user, :resources

  def initialize(user, resources)
    @user = user
    @resources = resources
  end

  def index?
    false
  end

  # def edit?
  #   user.user_id == resources.user_id
  # end

  # def update?
  #   user.admin? || !resources.published?
  # end
  class Scope
    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      redirect_to root_path
      # raise NoMethodError, "You must define #resolve in #{self.class}"
    end

    private

    attr_reader :user, :scope
  end
end