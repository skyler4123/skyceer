require "rails_helper"

RSpec.describe EducationTeachersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/education_teachers").to route_to("education_teachers#index")
    end

    it "routes to #new" do
      expect(get: "/education_teachers/new").to route_to("education_teachers#new")
    end

    it "routes to #show" do
      expect(get: "/education_teachers/1").to route_to("education_teachers#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/education_teachers/1/edit").to route_to("education_teachers#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/education_teachers").to route_to("education_teachers#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/education_teachers/1").to route_to("education_teachers#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/education_teachers/1").to route_to("education_teachers#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/education_teachers/1").to route_to("education_teachers#destroy", id: "1")
    end
  end
end
