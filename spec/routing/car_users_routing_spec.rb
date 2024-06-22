require "rails_helper"

RSpec.describe VehicleUsersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/vehicle_users").to route_to("vehicle_users#index")
    end

    it "routes to #new" do
      expect(get: "/vehicle_users/new").to route_to("vehicle_users#new")
    end

    it "routes to #show" do
      expect(get: "/vehicle_users/1").to route_to("vehicle_users#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/vehicle_users/1/edit").to route_to("vehicle_users#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/vehicle_users").to route_to("vehicle_users#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/vehicle_users/1").to route_to("vehicle_users#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/vehicle_users/1").to route_to("vehicle_users#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/vehicle_users/1").to route_to("vehicle_users#destroy", id: "1")
    end
  end
end
