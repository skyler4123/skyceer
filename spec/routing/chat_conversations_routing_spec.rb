require "rails_helper"

RSpec.describe ChatConversationsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/chat_conversations").to route_to("chat_conversations#index")
    end

    it "routes to #new" do
      expect(get: "/chat_conversations/new").to route_to("chat_conversations#new")
    end

    it "routes to #show" do
      expect(get: "/chat_conversations/1").to route_to("chat_conversations#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/chat_conversations/1/edit").to route_to("chat_conversations#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/chat_conversations").to route_to("chat_conversations#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/chat_conversations/1").to route_to("chat_conversations#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/chat_conversations/1").to route_to("chat_conversations#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/chat_conversations/1").to route_to("chat_conversations#destroy", id: "1")
    end
  end
end
