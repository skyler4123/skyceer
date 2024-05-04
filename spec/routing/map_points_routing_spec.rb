require "rails_helper"

RSpec.describe MapPointsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/map_points").to route_to("map_points#index")
    end

    it "routes to #new" do
      expect(get: "/map_points/new").to route_to("map_points#new")
    end

    it "routes to #show" do
      expect(get: "/map_points/1").to route_to("map_points#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/map_points/1/edit").to route_to("map_points#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/map_points").to route_to("map_points#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/map_points/1").to route_to("map_points#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/map_points/1").to route_to("map_points#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/map_points/1").to route_to("map_points#destroy", id: "1")
    end
  end
end
