require "rails_helper"

RSpec.describe EnglishMeaningsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/english_meanings").to route_to("english_meanings#index")
    end

    it "routes to #new" do
      expect(get: "/english_meanings/new").to route_to("english_meanings#new")
    end

    it "routes to #show" do
      expect(get: "/english_meanings/1").to route_to("english_meanings#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/english_meanings/1/edit").to route_to("english_meanings#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/english_meanings").to route_to("english_meanings#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/english_meanings/1").to route_to("english_meanings#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/english_meanings/1").to route_to("english_meanings#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/english_meanings/1").to route_to("english_meanings#destroy", id: "1")
    end
  end
end
