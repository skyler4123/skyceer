require "rails_helper"

RSpec.describe EnglishWordsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/english_words").to route_to("english_words#index")
    end

    it "routes to #new" do
      expect(get: "/english_words/new").to route_to("english_words#new")
    end

    it "routes to #show" do
      expect(get: "/english_words/1").to route_to("english_words#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/english_words/1/edit").to route_to("english_words#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/english_words").to route_to("english_words#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/english_words/1").to route_to("english_words#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/english_words/1").to route_to("english_words#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/english_words/1").to route_to("english_words#destroy", id: "1")
    end
  end
end
