require "rails_helper"

RSpec.describe AgricultureFarmsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/agriculture_farms").to route_to("agriculture_farms#index")
    end

    it "routes to #new" do
      expect(get: "/agriculture_farms/new").to route_to("agriculture_farms#new")
    end

    it "routes to #show" do
      expect(get: "/agriculture_farms/1").to route_to("agriculture_farms#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/agriculture_farms/1/edit").to route_to("agriculture_farms#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/agriculture_farms").to route_to("agriculture_farms#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/agriculture_farms/1").to route_to("agriculture_farms#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/agriculture_farms/1").to route_to("agriculture_farms#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/agriculture_farms/1").to route_to("agriculture_farms#destroy", id: "1")
    end
  end
end
