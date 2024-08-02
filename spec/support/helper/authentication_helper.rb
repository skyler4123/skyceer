module AuthenticationHelper

  def demo_user_for_authentication
    create(:user)
  end

  def sign_in
    
  end

  def signed_in_user

  end

  def logged_in_user
    signed_in_user
  end
end
