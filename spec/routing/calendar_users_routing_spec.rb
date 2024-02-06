require "rails_helper"

RSpec.describe CalendarUsersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/calendar_users").to route_to("calendar_users#index")
    end

    it "routes to #new" do
      expect(get: "/calendar_users/new").to route_to("calendar_users#new")
    end

    it "routes to #show" do
      expect(get: "/calendar_users/1").to route_to("calendar_users#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/calendar_users/1/edit").to route_to("calendar_users#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/calendar_users").to route_to("calendar_users#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/calendar_users/1").to route_to("calendar_users#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/calendar_users/1").to route_to("calendar_users#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/calendar_users/1").to route_to("calendar_users#destroy", id: "1")
    end
  end
end
