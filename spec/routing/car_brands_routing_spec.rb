require "rails_helper"

RSpec.describe CarBrandsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/car_brands").to route_to("car_brands#index")
    end

    it "routes to #new" do
      expect(get: "/car_brands/new").to route_to("car_brands#new")
    end

    it "routes to #show" do
      expect(get: "/car_brands/1").to route_to("car_brands#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/car_brands/1/edit").to route_to("car_brands#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/car_brands").to route_to("car_brands#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/car_brands/1").to route_to("car_brands#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/car_brands/1").to route_to("car_brands#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/car_brands/1").to route_to("car_brands#destroy", id: "1")
    end
  end
end
