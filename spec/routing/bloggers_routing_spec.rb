require "rails_helper"

RSpec.describe BloggersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/bloggers").to route_to("bloggers#index")
    end

    it "routes to #new" do
      expect(get: "/bloggers/new").to route_to("bloggers#new")
    end

    it "routes to #show" do
      expect(get: "/bloggers/1").to route_to("bloggers#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/bloggers/1/edit").to route_to("bloggers#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/bloggers").to route_to("bloggers#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/bloggers/1").to route_to("bloggers#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/bloggers/1").to route_to("bloggers#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/bloggers/1").to route_to("bloggers#destroy", id: "1")
    end
  end
end
