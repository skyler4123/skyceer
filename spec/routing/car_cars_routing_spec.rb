require "rails_helper"

RSpec.describe VehicleCarsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/vehicle_cars").to route_to("vehicle_cars#index")
    end

    it "routes to #new" do
      expect(get: "/vehicle_cars/new").to route_to("vehicle_cars#new")
    end

    it "routes to #show" do
      expect(get: "/vehicle_cars/1").to route_to("vehicle_cars#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/vehicle_cars/1/edit").to route_to("vehicle_cars#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/vehicle_cars").to route_to("vehicle_cars#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/vehicle_cars/1").to route_to("vehicle_cars#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/vehicle_cars/1").to route_to("vehicle_cars#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/vehicle_cars/1").to route_to("vehicle_cars#destroy", id: "1")
    end
  end
end
