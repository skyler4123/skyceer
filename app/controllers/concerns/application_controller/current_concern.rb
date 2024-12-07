module ApplicationController::CurrentConcern
  extend ActiveSupport::Concern
  
  included do
    before_action :set_current_request_details

    def current_user
      Current.session
    end

    def set_current_request_details
      Current.user_agent = request.user_agent
      Current.ip_address = request.ip
    end

    def create_session_for_all_package(user:)
      Session.create!(
        name: user.name,
        email: user.email,
        user_id: user.id,
        role: user.role,
        education_role: user.education_role,
        education_school_id: user.education_role_school? ? user.education_school.id : nil,
        education_teacher_id: user.education_role_teacher? ? user.education_teacher.id : nil,
        education_student_id: user.education_role_student? ? user.education_student.id : nil,
      )
    end
  end
end
