require "rails_helper"

RSpec.describe MapUsersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/map_users").to route_to("map_users#index")
    end

    it "routes to #new" do
      expect(get: "/map_users/new").to route_to("map_users#new")
    end

    it "routes to #show" do
      expect(get: "/map_users/1").to route_to("map_users#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/map_users/1/edit").to route_to("map_users#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/map_users").to route_to("map_users#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/map_users/1").to route_to("map_users#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/map_users/1").to route_to("map_users#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/map_users/1").to route_to("map_users#destroy", id: "1")
    end
  end
end
