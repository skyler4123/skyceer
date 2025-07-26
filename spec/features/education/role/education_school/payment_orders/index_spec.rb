require 'rails_helper'

RSpec.feature "payment_orders#index", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"

  before do
    payment_order
  end

  context "education_role: :education_owner" do

    it "will not be redirected" do
      sign_in(user: education_owner.education_ownerable)
      visit payment_orders_path
      expect(page).to have_current_path(payment_orders_path, ignore_query: true)
      expect(page).to have_content(education_student.name)
    end
  end

  context "education_role: :not_education_user" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_owner.education_ownerable)
      visit payment_orders_path
      expect(page).to have_routing_error
    end
  end
end
