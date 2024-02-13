require "rails_helper"

RSpec.describe EducationStudentsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/education_students").to route_to("education_students#index")
    end

    it "routes to #new" do
      expect(get: "/education_students/new").to route_to("education_students#new")
    end

    it "routes to #show" do
      expect(get: "/education_students/1").to route_to("education_students#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/education_students/1/edit").to route_to("education_students#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/education_students").to route_to("education_students#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/education_students/1").to route_to("education_students#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/education_students/1").to route_to("education_students#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/education_students/1").to route_to("education_students#destroy", id: "1")
    end
  end
end
