class Application::User::SyncWithPackageUserJob < ApplicationJob
  queue_as :default
  # self.queue_adapter = :solid_queue

  # assign user to package user if package user have same email with user
  def perform(user_id)
    user = User.find(user_id)
    package_user_classes = [ EducationSchool, EducationAdmin, EducationTeacher, EducationStudent ]
    package_user_classes.each do |package_user_class|
      package_user = package_user_class.find_by(email: user.email)
      if package_user.present?
        package_user.update(user_id: user.id)
      end
    end
  end
end
