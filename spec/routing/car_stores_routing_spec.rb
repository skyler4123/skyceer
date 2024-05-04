require "rails_helper"

RSpec.describe CarStoresController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/car_stores").to route_to("car_stores#index")
    end

    it "routes to #new" do
      expect(get: "/car_stores/new").to route_to("car_stores#new")
    end

    it "routes to #show" do
      expect(get: "/car_stores/1").to route_to("car_stores#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/car_stores/1/edit").to route_to("car_stores#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/car_stores").to route_to("car_stores#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/car_stores/1").to route_to("car_stores#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/car_stores/1").to route_to("car_stores#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/car_stores/1").to route_to("car_stores#destroy", id: "1")
    end
  end
end
