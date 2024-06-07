require "rails_helper"

RSpec.describe ReviewCommentsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/review_comments").to route_to("review_comments#index")
    end

    it "routes to #new" do
      expect(get: "/review_comments/new").to route_to("review_comments#new")
    end

    it "routes to #show" do
      expect(get: "/review_comments/1").to route_to("review_comments#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/review_comments/1/edit").to route_to("review_comments#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/review_comments").to route_to("review_comments#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/review_comments/1").to route_to("review_comments#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/review_comments/1").to route_to("review_comments#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/review_comments/1").to route_to("review_comments#destroy", id: "1")
    end
  end
end
