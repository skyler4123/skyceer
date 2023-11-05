require "rails_helper"

RSpec.describe ChatUsersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/chat_users").to route_to("chat_users#index")
    end

    it "routes to #new" do
      expect(get: "/chat_users/new").to route_to("chat_users#new")
    end

    it "routes to #show" do
      expect(get: "/chat_users/1").to route_to("chat_users#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/chat_users/1/edit").to route_to("chat_users#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/chat_users").to route_to("chat_users#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/chat_users/1").to route_to("chat_users#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/chat_users/1").to route_to("chat_users#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/chat_users/1").to route_to("chat_users#destroy", id: "1")
    end
  end
end
