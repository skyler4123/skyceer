require "rails_helper"

RSpec.describe AgricultureFarmersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/agriculture_farmers").to route_to("agriculture_farmers#index")
    end

    it "routes to #new" do
      expect(get: "/agriculture_farmers/new").to route_to("agriculture_farmers#new")
    end

    it "routes to #show" do
      expect(get: "/agriculture_farmers/1").to route_to("agriculture_farmers#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/agriculture_farmers/1/edit").to route_to("agriculture_farmers#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/agriculture_farmers").to route_to("agriculture_farmers#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/agriculture_farmers/1").to route_to("agriculture_farmers#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/agriculture_farmers/1").to route_to("agriculture_farmers#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/agriculture_farmers/1").to route_to("agriculture_farmers#destroy", id: "1")
    end
  end
end
