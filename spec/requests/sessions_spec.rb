require 'rails_helper'

RSpec.describe "Sessions", type: :request do
  let(:user_attributes) { { email: 'email@gmail.com', password: 'password', password_confirmation: 'password' } }
  subject!(:create_user) do
    post users_url, params: { user: user_attributes }
  end
  let(:user) { User.find_by(email: user_attributes[:email]) }

  describe "GET /new" do
    it "returns http success" do
      get "/signin"
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /create" do
    it "returns http success" do
      post "/signin", params: { email: user.email, password: user_attributes[:password] }
      expect(response).to redirect_to(assigns(:user))
    end

    it "should successful due to access token expiration" do
      post "/signin", params: { email: user.email, password: user_attributes[:password] }
      travel_to (Constants::JWT_ACCESS_EXPIRATION.to_i).minutes.from_now do
        get user_url(user)
        expect(response).to render_template(:show)
      end
    end

    it "should redirect to signin due to refesh token expiration" do
      post "/signin", params: { email: user.email, password: user_attributes[:password] }
      travel_to (Constants::JWT_REFRESH_EXPIRATION.to_i).minutes.from_now do
        get user_url(user)
        expect(response).to redirect_to(signin_path)
      end
    end

    it "should redirect to signin because wrong password" do
      post "/signin", params: { email: user.email, password: 'wrong_password' }
      expect(response).to redirect_to(signin_path)
    end

    it "should redirect to signin because wrong email" do
      post "/signin", params: { email: 'wrong_email@gmail.com', password: 'wrong_password' }
      expect(response).to redirect_to(signin_path)
    end
  end

  describe "DELETE /signout" do
    it "returns signin after signout" do
      delete "/signout"
      expect(response).to redirect_to(signin_path)
    end
  end

end
