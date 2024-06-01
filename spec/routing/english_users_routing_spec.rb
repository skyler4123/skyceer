require "rails_helper"

RSpec.describe EnglishUsersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/english_users").to route_to("english_users#index")
    end

    it "routes to #new" do
      expect(get: "/english_users/new").to route_to("english_users#new")
    end

    it "routes to #show" do
      expect(get: "/english_users/1").to route_to("english_users#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/english_users/1/edit").to route_to("english_users#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/english_users").to route_to("english_users#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/english_users/1").to route_to("english_users#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/english_users/1").to route_to("english_users#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/english_users/1").to route_to("english_users#destroy", id: "1")
    end
  end
end
