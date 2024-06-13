require "rails_helper"

RSpec.describe ArticleCommentsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/article_comments").to route_to("article_comments#index")
    end

    it "routes to #new" do
      expect(get: "/article_comments/new").to route_to("article_comments#new")
    end

    it "routes to #show" do
      expect(get: "/article_comments/1").to route_to("article_comments#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/article_comments/1/edit").to route_to("article_comments#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/article_comments").to route_to("article_comments#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/article_comments/1").to route_to("article_comments#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/article_comments/1").to route_to("article_comments#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/article_comments/1").to route_to("article_comments#destroy", id: "1")
    end
  end
end
