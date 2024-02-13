require "rails_helper"

RSpec.describe EducationUsersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/education_users").to route_to("education_users#index")
    end

    it "routes to #new" do
      expect(get: "/education_users/new").to route_to("education_users#new")
    end

    it "routes to #show" do
      expect(get: "/education_users/1").to route_to("education_users#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/education_users/1/edit").to route_to("education_users#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/education_users").to route_to("education_users#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/education_users/1").to route_to("education_users#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/education_users/1").to route_to("education_users#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/education_users/1").to route_to("education_users#destroy", id: "1")
    end
  end
end
