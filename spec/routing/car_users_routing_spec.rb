require "rails_helper"

RSpec.describe CarUsersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/car_users").to route_to("car_users#index")
    end

    it "routes to #new" do
      expect(get: "/car_users/new").to route_to("car_users#new")
    end

    it "routes to #show" do
      expect(get: "/car_users/1").to route_to("car_users#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/car_users/1/edit").to route_to("car_users#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/car_users").to route_to("car_users#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/car_users/1").to route_to("car_users#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/car_users/1").to route_to("car_users#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/car_users/1").to route_to("car_users#destroy", id: "1")
    end
  end
end
