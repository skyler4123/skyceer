require "rails_helper"

RSpec.describe CarCarsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/car_cars").to route_to("car_cars#index")
    end

    it "routes to #new" do
      expect(get: "/car_cars/new").to route_to("car_cars#new")
    end

    it "routes to #show" do
      expect(get: "/car_cars/1").to route_to("car_cars#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/car_cars/1/edit").to route_to("car_cars#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/car_cars").to route_to("car_cars#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/car_cars/1").to route_to("car_cars#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/car_cars/1").to route_to("car_cars#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/car_cars/1").to route_to("car_cars#destroy", id: "1")
    end
  end
end
