require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/users", type: :request do
  let(:users) do
    5.times { create(:user) }
    User.all
  end
  let(:user) { users.sample }
  subject!(:signin) {
    post "/signin", params: { email: user.email, password: 'password' }
  }
  # let(:pagination_params) { { page:  } }
  # This should return the minimal set of attributes required to create a valid
  # User. As you add validations to User, be sure to
  # adjust the attributes here as well.
  # let(:valid_attributes) {
  #   skip("Add a hash of attributes valid for your model")
  # }

  # let(:invalid_attributes) {
  #   skip("Add a hash of attributes invalid for your model")
  # }

  describe "GET /index" do
    it "renders a successful response" do
      get users_url
      expect(response).to render_template(:index)
    end
    it "pagination" do
      get users_url
      expect(assigns(:pagy).present?).to be_truthy
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      get user_url(user)
      expect(response).to render_template(:show)
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_user_url
      expect(response).to be_successful
    end
  end

  # describe "GET /edit" do
  #   it "renders a successful response" do
  #     user = User.create! valid_attributes
  #     get edit_user_url(user)
  #     expect(response).to be_successful
  #   end
  # end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new User" do
        expect {
          post users_url, params: { user: { email: 'email@gmail.com', password: 'password', password_confirmation: 'password' }}
        }.to change(User, :count).by(1)
      end

      it "redirects to the created user" do
        post users_url, params: { user: { email: 'email@gmail.com', password: 'password', password_confirmation: 'password' }}
        user = User.find_by(email: 'email@gmail.com')
        expect(response).to redirect_to(user_url(user))
      end
    end

    context "with invalid parameters" do
      it "does not create a new User" do
        expect {
          post users_url, params: { user: { email: 'email@gmail.com', password: 'password', password_confirmation: 'wrong_password' }}
        }.to change(User, :count).by(0)
      end

    
      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post users_url, params: { user: { email: 'email@gmail.com', password: 'password', password_confirmation: 'wrong_password' }}
        expect(response).to render_template(:new)
      end
    
    end
  end

  describe "PATCH /update" do
    # context "with valid parameters" do
    #   let(:new_attributes) {
    #     skip("Add a hash of attributes valid for your model")
    #   }

    #   it "updates the requested user" do
    #     user = User.create! valid_attributes
    #     patch user_url(user), params: { user: new_attributes }
    #     user.reload
    #     skip("Add assertions for updated state")
    #   end

    #   it "redirects to the user" do
    #     user = User.create! valid_attributes
    #     patch user_url(user), params: { user: new_attributes }
    #     user.reload
    #     expect(response).to redirect_to(user_url(user))
    #   end
    # end

    # context "with invalid parameters" do
    
    #   it "renders a response with 422 status (i.e. to display the 'edit' template)" do
    #     user = User.create! valid_attributes
    #     patch user_url(user), params: { user: invalid_attributes }
    #     expect(response).to have_http_status(:unprocessable_entity)
    #   end
    
    # end
  end

  describe "DELETE /destroy" do
    it "destroys the requested user" do
      expect {
        delete user_url(user)
      }.to change(User, :count).by(-1)
    end

    it "redirects to the users list" do
      delete user_url(user)
      expect(response).to redirect_to(users_path)
    end
  end
end
