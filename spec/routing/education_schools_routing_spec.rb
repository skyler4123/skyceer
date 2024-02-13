require "rails_helper"

RSpec.describe EducationSchoolsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/education_schools").to route_to("education_schools#index")
    end

    it "routes to #new" do
      expect(get: "/education_schools/new").to route_to("education_schools#new")
    end

    it "routes to #show" do
      expect(get: "/education_schools/1").to route_to("education_schools#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/education_schools/1/edit").to route_to("education_schools#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/education_schools").to route_to("education_schools#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/education_schools/1").to route_to("education_schools#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/education_schools/1").to route_to("education_schools#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/education_schools/1").to route_to("education_schools#destroy", id: "1")
    end
  end
end
