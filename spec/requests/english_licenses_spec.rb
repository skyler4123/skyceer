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

RSpec.describe "/english_licenses", type: :request do
  
  # This should return the minimal set of attributes required to create a valid
  # EnglishLicense. As you add validations to EnglishLicense, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      EnglishLicense.create! valid_attributes
      get english_licenses_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      english_license = EnglishLicense.create! valid_attributes
      get english_license_url(english_license)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_english_license_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      english_license = EnglishLicense.create! valid_attributes
      get edit_english_license_url(english_license)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new EnglishLicense" do
        expect {
          post english_licenses_url, params: { english_license: valid_attributes }
        }.to change(EnglishLicense, :count).by(1)
      end

      it "redirects to the created english_license" do
        post english_licenses_url, params: { english_license: valid_attributes }
        expect(response).to redirect_to(english_license_url(EnglishLicense.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new EnglishLicense" do
        expect {
          post english_licenses_url, params: { english_license: invalid_attributes }
        }.to change(EnglishLicense, :count).by(0)
      end

    
      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post english_licenses_url, params: { english_license: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested english_license" do
        english_license = EnglishLicense.create! valid_attributes
        patch english_license_url(english_license), params: { english_license: new_attributes }
        english_license.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the english_license" do
        english_license = EnglishLicense.create! valid_attributes
        patch english_license_url(english_license), params: { english_license: new_attributes }
        english_license.reload
        expect(response).to redirect_to(english_license_url(english_license))
      end
    end

    context "with invalid parameters" do
    
      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        english_license = EnglishLicense.create! valid_attributes
        patch english_license_url(english_license), params: { english_license: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested english_license" do
      english_license = EnglishLicense.create! valid_attributes
      expect {
        delete english_license_url(english_license)
      }.to change(EnglishLicense, :count).by(-1)
    end

    it "redirects to the english_licenses list" do
      english_license = EnglishLicense.create! valid_attributes
      delete english_license_url(english_license)
      expect(response).to redirect_to(english_licenses_url)
    end
  end
end