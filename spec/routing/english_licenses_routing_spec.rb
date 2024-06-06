require "rails_helper"

RSpec.describe EnglishLicensesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/english_licenses").to route_to("english_licenses#index")
    end

    it "routes to #new" do
      expect(get: "/english_licenses/new").to route_to("english_licenses#new")
    end

    it "routes to #show" do
      expect(get: "/english_licenses/1").to route_to("english_licenses#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/english_licenses/1/edit").to route_to("english_licenses#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/english_licenses").to route_to("english_licenses#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/english_licenses/1").to route_to("english_licenses#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/english_licenses/1").to route_to("english_licenses#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/english_licenses/1").to route_to("english_licenses#destroy", id: "1")
    end
  end
end
