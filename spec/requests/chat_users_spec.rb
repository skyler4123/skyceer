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

RSpec.describe "/chat_users", type: :request do
  
  # This should return the minimal set of attributes required to create a valid
  # ChatUser. As you add validations to ChatUser, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      ChatUser.create! valid_attributes
      get chat_users_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      chat_user = ChatUser.create! valid_attributes
      get chat_user_url(chat_user)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_chat_user_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      chat_user = ChatUser.create! valid_attributes
      get edit_chat_user_url(chat_user)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new ChatUser" do
        expect {
          post chat_users_url, params: { chat_user: valid_attributes }
        }.to change(ChatUser, :count).by(1)
      end

      it "redirects to the created chat_user" do
        post chat_users_url, params: { chat_user: valid_attributes }
        expect(response).to redirect_to(chat_user_url(ChatUser.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new ChatUser" do
        expect {
          post chat_users_url, params: { chat_user: invalid_attributes }
        }.to change(ChatUser, :count).by(0)
      end

    
      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post chat_users_url, params: { chat_user: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested chat_user" do
        chat_user = ChatUser.create! valid_attributes
        patch chat_user_url(chat_user), params: { chat_user: new_attributes }
        chat_user.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the chat_user" do
        chat_user = ChatUser.create! valid_attributes
        patch chat_user_url(chat_user), params: { chat_user: new_attributes }
        chat_user.reload
        expect(response).to redirect_to(chat_user_url(chat_user))
      end
    end

    context "with invalid parameters" do
    
      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        chat_user = ChatUser.create! valid_attributes
        patch chat_user_url(chat_user), params: { chat_user: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested chat_user" do
      chat_user = ChatUser.create! valid_attributes
      expect {
        delete chat_user_url(chat_user)
      }.to change(ChatUser, :count).by(-1)
    end

    it "redirects to the chat_users list" do
      chat_user = ChatUser.create! valid_attributes
      delete chat_user_url(chat_user)
      expect(response).to redirect_to(chat_users_url)
    end
  end
end
