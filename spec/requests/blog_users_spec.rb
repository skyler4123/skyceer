# require 'rails_helper'

# # This spec was generated by rspec-rails when you ran the scaffold generator.
# # It demonstrates how one might use RSpec to test the controller code that
# # was generated by Rails when you ran the scaffold generator.
# #
# # It assumes that the implementation code is generated by the rails scaffold
# # generator. If you are using any extension libraries to generate different
# # controller code, this generated spec may or may not pass.
# #
# # It only uses APIs available in rails and/or rspec-rails. There are a number
# # of tools you can use to make these specs even more expressive, but we're
# # sticking to rails and rspec-rails APIs to keep things simple and stable.

# RSpec.describe "/blog_users", type: :request do
  
#   # This should return the minimal set of attributes required to create a valid
#   # BlogUser. As you add validations to BlogUser, be sure to
#   # adjust the attributes here as well.
#   let(:valid_attributes) {
#     skip("Add a hash of attributes valid for your model")
#   }

#   let(:invalid_attributes) {
#     skip("Add a hash of attributes invalid for your model")
#   }

#   describe "GET /index" do
#     it "renders a successful response" do
#       BlogUser.create! valid_attributes
#       get blog_users_url
#       expect(response).to be_successful
#     end
#   end

#   describe "GET /show" do
#     it "renders a successful response" do
#       blog_user = BlogUser.create! valid_attributes
#       get blog_user_url(blog_user)
#       expect(response).to be_successful
#     end
#   end

#   describe "GET /new" do
#     it "renders a successful response" do
#       get new_blog_user_url
#       expect(response).to be_successful
#     end
#   end

#   describe "GET /edit" do
#     it "renders a successful response" do
#       blog_user = BlogUser.create! valid_attributes
#       get edit_blog_user_url(blog_user)
#       expect(response).to be_successful
#     end
#   end

#   describe "POST /create" do
#     context "with valid parameters" do
#       it "creates a new BlogUser" do
#         expect {
#           post blog_users_url, params: { blog_user: valid_attributes }
#         }.to change(BlogUser, :count).by(1)
#       end

#       it "redirects to the created blog_user" do
#         post blog_users_url, params: { blog_user: valid_attributes }
#         expect(response).to redirect_to(blog_user_url(BlogUser.last))
#       end
#     end

#     context "with invalid parameters" do
#       it "does not create a new BlogUser" do
#         expect {
#           post blog_users_url, params: { blog_user: invalid_attributes }
#         }.to change(BlogUser, :count).by(0)
#       end

    
#       it "renders a response with 422 status (i.e. to display the 'new' template)" do
#         post blog_users_url, params: { blog_user: invalid_attributes }
#         expect(response).to have_http_status(:unprocessable_entity)
#       end
    
#     end
#   end

#   describe "PATCH /update" do
#     context "with valid parameters" do
#       let(:new_attributes) {
#         skip("Add a hash of attributes valid for your model")
#       }

#       it "updates the requested blog_user" do
#         blog_user = BlogUser.create! valid_attributes
#         patch blog_user_url(blog_user), params: { blog_user: new_attributes }
#         blog_user.reload
#         skip("Add assertions for updated state")
#       end

#       it "redirects to the blog_user" do
#         blog_user = BlogUser.create! valid_attributes
#         patch blog_user_url(blog_user), params: { blog_user: new_attributes }
#         blog_user.reload
#         expect(response).to redirect_to(blog_user_url(blog_user))
#       end
#     end

#     context "with invalid parameters" do
    
#       it "renders a response with 422 status (i.e. to display the 'edit' template)" do
#         blog_user = BlogUser.create! valid_attributes
#         patch blog_user_url(blog_user), params: { blog_user: invalid_attributes }
#         expect(response).to have_http_status(:unprocessable_entity)
#       end
    
#     end
#   end

#   describe "DELETE /destroy" do
#     it "destroys the requested blog_user" do
#       blog_user = BlogUser.create! valid_attributes
#       expect {
#         delete blog_user_url(blog_user)
#       }.to change(BlogUser, :count).by(-1)
#     end

#     it "redirects to the blog_users list" do
#       blog_user = BlogUser.create! valid_attributes
#       delete blog_user_url(blog_user)
#       expect(response).to redirect_to(blog_users_url)
#     end
#   end
# end
