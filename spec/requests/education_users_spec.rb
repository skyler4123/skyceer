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

RSpec.describe "/education_users", type: :request do
  
  # This should return the minimal set of attributes required to create a valid
  # EducationUser. As you add validations to EducationUser, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      EducationUser.create! valid_attributes
      get education_users_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      education_user = EducationUser.create! valid_attributes
      get education_user_url(education_user)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_education_user_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      education_user = EducationUser.create! valid_attributes
      get edit_education_user_url(education_user)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new EducationUser" do
        expect {
          post education_users_url, params: { education_user: valid_attributes }
        }.to change(EducationUser, :count).by(1)
      end

      it "redirects to the created education_user" do
        post education_users_url, params: { education_user: valid_attributes }
        expect(response).to redirect_to(education_user_url(EducationUser.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new EducationUser" do
        expect {
          post education_users_url, params: { education_user: invalid_attributes }
        }.to change(EducationUser, :count).by(0)
      end

    
      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post education_users_url, params: { education_user: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested education_user" do
        education_user = EducationUser.create! valid_attributes
        patch education_user_url(education_user), params: { education_user: new_attributes }
        education_user.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the education_user" do
        education_user = EducationUser.create! valid_attributes
        patch education_user_url(education_user), params: { education_user: new_attributes }
        education_user.reload
        expect(response).to redirect_to(education_user_url(education_user))
      end
    end

    context "with invalid parameters" do
    
      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        education_user = EducationUser.create! valid_attributes
        patch education_user_url(education_user), params: { education_user: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested education_user" do
      education_user = EducationUser.create! valid_attributes
      expect {
        delete education_user_url(education_user)
      }.to change(EducationUser, :count).by(-1)
    end

    it "redirects to the education_users list" do
      education_user = EducationUser.create! valid_attributes
      delete education_user_url(education_user)
      expect(response).to redirect_to(education_users_url)
    end
  end
end
