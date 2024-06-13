require "rails_helper"

RSpec.describe ArticlePostsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/article_posts").to route_to("article_posts#index")
    end

    it "routes to #new" do
      expect(get: "/article_posts/new").to route_to("article_posts#new")
    end

    it "routes to #show" do
      expect(get: "/article_posts/1").to route_to("article_posts#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/article_posts/1/edit").to route_to("article_posts#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/article_posts").to route_to("article_posts#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/article_posts/1").to route_to("article_posts#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/article_posts/1").to route_to("article_posts#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/article_posts/1").to route_to("article_posts#destroy", id: "1")
    end
  end
end
