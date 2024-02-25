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

RSpec.describe "/agriculture_users", type: :request do
  
  # This should return the minimal set of attributes required to create a valid
  # AgricultureUser. As you add validations to AgricultureUser, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      AgricultureUser.create! valid_attributes
      get agriculture_users_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      agriculture_user = AgricultureUser.create! valid_attributes
      get agriculture_user_url(agriculture_user)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_agriculture_user_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      agriculture_user = AgricultureUser.create! valid_attributes
      get edit_agriculture_user_url(agriculture_user)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new AgricultureUser" do
        expect {
          post agriculture_users_url, params: { agriculture_user: valid_attributes }
        }.to change(AgricultureUser, :count).by(1)
      end

      it "redirects to the created agriculture_user" do
        post agriculture_users_url, params: { agriculture_user: valid_attributes }
        expect(response).to redirect_to(agriculture_user_url(AgricultureUser.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new AgricultureUser" do
        expect {
          post agriculture_users_url, params: { agriculture_user: invalid_attributes }
        }.to change(AgricultureUser, :count).by(0)
      end

    
      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post agriculture_users_url, params: { agriculture_user: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested agriculture_user" do
        agriculture_user = AgricultureUser.create! valid_attributes
        patch agriculture_user_url(agriculture_user), params: { agriculture_user: new_attributes }
        agriculture_user.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the agriculture_user" do
        agriculture_user = AgricultureUser.create! valid_attributes
        patch agriculture_user_url(agriculture_user), params: { agriculture_user: new_attributes }
        agriculture_user.reload
        expect(response).to redirect_to(agriculture_user_url(agriculture_user))
      end
    end

    context "with invalid parameters" do
    
      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        agriculture_user = AgricultureUser.create! valid_attributes
        patch agriculture_user_url(agriculture_user), params: { agriculture_user: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested agriculture_user" do
      agriculture_user = AgricultureUser.create! valid_attributes
      expect {
        delete agriculture_user_url(agriculture_user)
      }.to change(AgricultureUser, :count).by(-1)
    end

    it "redirects to the agriculture_users list" do
      agriculture_user = AgricultureUser.create! valid_attributes
      delete agriculture_user_url(agriculture_user)
      expect(response).to redirect_to(agriculture_users_url)
    end
  end
end