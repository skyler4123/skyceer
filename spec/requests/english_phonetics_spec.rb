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

RSpec.describe "/english_phonetics", type: :request do
  
  # This should return the minimal set of attributes required to create a valid
  # EnglishPhonetic. As you add validations to EnglishPhonetic, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      EnglishPhonetic.create! valid_attributes
      get english_phonetics_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      english_phonetic = EnglishPhonetic.create! valid_attributes
      get english_phonetic_url(english_phonetic)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_english_phonetic_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      english_phonetic = EnglishPhonetic.create! valid_attributes
      get edit_english_phonetic_url(english_phonetic)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new EnglishPhonetic" do
        expect {
          post english_phonetics_url, params: { english_phonetic: valid_attributes }
        }.to change(EnglishPhonetic, :count).by(1)
      end

      it "redirects to the created english_phonetic" do
        post english_phonetics_url, params: { english_phonetic: valid_attributes }
        expect(response).to redirect_to(english_phonetic_url(EnglishPhonetic.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new EnglishPhonetic" do
        expect {
          post english_phonetics_url, params: { english_phonetic: invalid_attributes }
        }.to change(EnglishPhonetic, :count).by(0)
      end

    
      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post english_phonetics_url, params: { english_phonetic: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested english_phonetic" do
        english_phonetic = EnglishPhonetic.create! valid_attributes
        patch english_phonetic_url(english_phonetic), params: { english_phonetic: new_attributes }
        english_phonetic.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the english_phonetic" do
        english_phonetic = EnglishPhonetic.create! valid_attributes
        patch english_phonetic_url(english_phonetic), params: { english_phonetic: new_attributes }
        english_phonetic.reload
        expect(response).to redirect_to(english_phonetic_url(english_phonetic))
      end
    end

    context "with invalid parameters" do
    
      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        english_phonetic = EnglishPhonetic.create! valid_attributes
        patch english_phonetic_url(english_phonetic), params: { english_phonetic: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested english_phonetic" do
      english_phonetic = EnglishPhonetic.create! valid_attributes
      expect {
        delete english_phonetic_url(english_phonetic)
      }.to change(EnglishPhonetic, :count).by(-1)
    end

    it "redirects to the english_phonetics list" do
      english_phonetic = EnglishPhonetic.create! valid_attributes
      delete english_phonetic_url(english_phonetic)
      expect(response).to redirect_to(english_phonetics_url)
    end
  end
end
