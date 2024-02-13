require "rails_helper"

RSpec.describe EducationRoomsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/education_rooms").to route_to("education_rooms#index")
    end

    it "routes to #new" do
      expect(get: "/education_rooms/new").to route_to("education_rooms#new")
    end

    it "routes to #show" do
      expect(get: "/education_rooms/1").to route_to("education_rooms#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/education_rooms/1/edit").to route_to("education_rooms#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/education_rooms").to route_to("education_rooms#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/education_rooms/1").to route_to("education_rooms#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/education_rooms/1").to route_to("education_rooms#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/education_rooms/1").to route_to("education_rooms#destroy", id: "1")
    end
  end
end
