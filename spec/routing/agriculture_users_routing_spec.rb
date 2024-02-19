require "rails_helper"

RSpec.describe AgricultureUsersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/agriculture_users").to route_to("agriculture_users#index")
    end

    it "routes to #new" do
      expect(get: "/agriculture_users/new").to route_to("agriculture_users#new")
    end

    it "routes to #show" do
      expect(get: "/agriculture_users/1").to route_to("agriculture_users#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/agriculture_users/1/edit").to route_to("agriculture_users#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/agriculture_users").to route_to("agriculture_users#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/agriculture_users/1").to route_to("agriculture_users#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/agriculture_users/1").to route_to("agriculture_users#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/agriculture_users/1").to route_to("agriculture_users#destroy", id: "1")
    end
  end
end
