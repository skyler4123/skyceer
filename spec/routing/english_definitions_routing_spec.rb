require "rails_helper"

RSpec.describe EnglishDefinitionsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/english_definitions").to route_to("english_definitions#index")
    end

    it "routes to #new" do
      expect(get: "/english_definitions/new").to route_to("english_definitions#new")
    end

    it "routes to #show" do
      expect(get: "/english_definitions/1").to route_to("english_definitions#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/english_definitions/1/edit").to route_to("english_definitions#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/english_definitions").to route_to("english_definitions#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/english_definitions/1").to route_to("english_definitions#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/english_definitions/1").to route_to("english_definitions#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/english_definitions/1").to route_to("english_definitions#destroy", id: "1")
    end
  end
end
