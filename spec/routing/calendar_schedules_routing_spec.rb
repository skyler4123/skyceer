require "rails_helper"

RSpec.describe CalendarSchedulesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/calendar_schedules").to route_to("calendar_schedules#index")
    end

    it "routes to #new" do
      expect(get: "/calendar_schedules/new").to route_to("calendar_schedules#new")
    end

    it "routes to #show" do
      expect(get: "/calendar_schedules/1").to route_to("calendar_schedules#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/calendar_schedules/1/edit").to route_to("calendar_schedules#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/calendar_schedules").to route_to("calendar_schedules#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/calendar_schedules/1").to route_to("calendar_schedules#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/calendar_schedules/1").to route_to("calendar_schedules#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/calendar_schedules/1").to route_to("calendar_schedules#destroy", id: "1")
    end
  end
end
