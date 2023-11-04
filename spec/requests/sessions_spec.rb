require 'rails_helper'

RSpec.describe "Sessions", type: :request do
  let!(:user) { create(:user) }
  describe "GET /new" do
    it "returns http success" do
      get "/signin"
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /create" do
    it "returns http success" do
      # User.create(email: 'email1@gmail.com', password: 'password', password_confirmation: 'password')
      post "/signin", params: { email: user.email, password: 'password' }
      expect(response).to redirect_to(assigns(:user))
    end
  end

end
