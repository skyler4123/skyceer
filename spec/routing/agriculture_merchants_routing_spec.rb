require "rails_helper"

RSpec.describe AgricultureMerchantsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/agriculture_merchants").to route_to("agriculture_merchants#index")
    end

    it "routes to #new" do
      expect(get: "/agriculture_merchants/new").to route_to("agriculture_merchants#new")
    end

    it "routes to #show" do
      expect(get: "/agriculture_merchants/1").to route_to("agriculture_merchants#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/agriculture_merchants/1/edit").to route_to("agriculture_merchants#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/agriculture_merchants").to route_to("agriculture_merchants#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/agriculture_merchants/1").to route_to("agriculture_merchants#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/agriculture_merchants/1").to route_to("agriculture_merchants#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/agriculture_merchants/1").to route_to("agriculture_merchants#destroy", id: "1")
    end
  end
end
