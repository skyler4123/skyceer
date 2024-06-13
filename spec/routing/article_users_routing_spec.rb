require "rails_helper"

RSpec.describe ArticleUsersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/article_users").to route_to("article_users#index")
    end

    it "routes to #new" do
      expect(get: "/article_users/new").to route_to("article_users#new")
    end

    it "routes to #show" do
      expect(get: "/article_users/1").to route_to("article_users#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/article_users/1/edit").to route_to("article_users#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/article_users").to route_to("article_users#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/article_users/1").to route_to("article_users#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/article_users/1").to route_to("article_users#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/article_users/1").to route_to("article_users#destroy", id: "1")
    end
  end
end
