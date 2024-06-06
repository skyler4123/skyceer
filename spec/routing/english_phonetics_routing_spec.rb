require "rails_helper"

RSpec.describe EnglishPhoneticsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/english_phonetics").to route_to("english_phonetics#index")
    end

    it "routes to #new" do
      expect(get: "/english_phonetics/new").to route_to("english_phonetics#new")
    end

    it "routes to #show" do
      expect(get: "/english_phonetics/1").to route_to("english_phonetics#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/english_phonetics/1/edit").to route_to("english_phonetics#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/english_phonetics").to route_to("english_phonetics#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/english_phonetics/1").to route_to("english_phonetics#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/english_phonetics/1").to route_to("english_phonetics#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/english_phonetics/1").to route_to("english_phonetics#destroy", id: "1")
    end
  end
end
