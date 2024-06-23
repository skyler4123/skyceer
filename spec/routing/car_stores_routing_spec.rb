require "rails_helper"

RSpec.describe VehicleStoresController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/vehicle_stores").to route_to("vehicle_stores#index")
    end

    it "routes to #new" do
      expect(get: "/vehicle_stores/new").to route_to("vehicle_stores#new")
    end

    it "routes to #show" do
      expect(get: "/vehicle_stores/1").to route_to("vehicle_stores#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/vehicle_stores/1/edit").to route_to("vehicle_stores#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/vehicle_stores").to route_to("vehicle_stores#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/vehicle_stores/1").to route_to("vehicle_stores#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/vehicle_stores/1").to route_to("vehicle_stores#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/vehicle_stores/1").to route_to("vehicle_stores#destroy", id: "1")
    end
  end
end
