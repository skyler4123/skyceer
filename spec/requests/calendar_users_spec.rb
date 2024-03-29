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

RSpec.describe "/calendar_users", type: :request do
  
  # This should return the minimal set of attributes required to create a valid
  # CalendarUser. As you add validations to CalendarUser, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      CalendarUser.create! valid_attributes
      get calendar_users_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      calendar_user = CalendarUser.create! valid_attributes
      get calendar_user_url(calendar_user)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_calendar_user_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      calendar_user = CalendarUser.create! valid_attributes
      get edit_calendar_user_url(calendar_user)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new CalendarUser" do
        expect {
          post calendar_users_url, params: { calendar_user: valid_attributes }
        }.to change(CalendarUser, :count).by(1)
      end

      it "redirects to the created calendar_user" do
        post calendar_users_url, params: { calendar_user: valid_attributes }
        expect(response).to redirect_to(calendar_user_url(CalendarUser.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new CalendarUser" do
        expect {
          post calendar_users_url, params: { calendar_user: invalid_attributes }
        }.to change(CalendarUser, :count).by(0)
      end

    
      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post calendar_users_url, params: { calendar_user: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested calendar_user" do
        calendar_user = CalendarUser.create! valid_attributes
        patch calendar_user_url(calendar_user), params: { calendar_user: new_attributes }
        calendar_user.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the calendar_user" do
        calendar_user = CalendarUser.create! valid_attributes
        patch calendar_user_url(calendar_user), params: { calendar_user: new_attributes }
        calendar_user.reload
        expect(response).to redirect_to(calendar_user_url(calendar_user))
      end
    end

    context "with invalid parameters" do
    
      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        calendar_user = CalendarUser.create! valid_attributes
        patch calendar_user_url(calendar_user), params: { calendar_user: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested calendar_user" do
      calendar_user = CalendarUser.create! valid_attributes
      expect {
        delete calendar_user_url(calendar_user)
      }.to change(CalendarUser, :count).by(-1)
    end

    it "redirects to the calendar_users list" do
      calendar_user = CalendarUser.create! valid_attributes
      delete calendar_user_url(calendar_user)
      expect(response).to redirect_to(calendar_users_url)
    end
  end
end
