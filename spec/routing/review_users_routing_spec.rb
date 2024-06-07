require "rails_helper"

RSpec.describe ReviewUsersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/review_users").to route_to("review_users#index")
    end

    it "routes to #new" do
      expect(get: "/review_users/new").to route_to("review_users#new")
    end

    it "routes to #show" do
      expect(get: "/review_users/1").to route_to("review_users#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/review_users/1/edit").to route_to("review_users#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/review_users").to route_to("review_users#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/review_users/1").to route_to("review_users#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/review_users/1").to route_to("review_users#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/review_users/1").to route_to("review_users#destroy", id: "1")
    end
  end
end
