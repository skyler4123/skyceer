require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/vehicle_brands", type: :request do
  
  # This should return the minimal set of attributes required to create a valid
  # VehicleBrand. As you add validations to VehicleBrand, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      VehicleBrand.create! valid_attributes
      get vehicle_brands_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      vehicle_brand = VehicleBrand.create! valid_attributes
      get vehicle_brand_url(vehicle_brand)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_vehicle_brand_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      vehicle_brand = VehicleBrand.create! valid_attributes
      get edit_vehicle_brand_url(vehicle_brand)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new VehicleBrand" do
        expect {
          post vehicle_brands_url, params: { vehicle_brand: valid_attributes }
        }.to change(VehicleBrand, :count).by(1)
      end

      it "redirects to the created vehicle_brand" do
        post vehicle_brands_url, params: { vehicle_brand: valid_attributes }
        expect(response).to redirect_to(vehicle_brand_url(VehicleBrand.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new VehicleBrand" do
        expect {
          post vehicle_brands_url, params: { vehicle_brand: invalid_attributes }
        }.to change(VehicleBrand, :count).by(0)
      end

    
      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post vehicle_brands_url, params: { vehicle_brand: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested vehicle_brand" do
        vehicle_brand = VehicleBrand.create! valid_attributes
        patch vehicle_brand_url(vehicle_brand), params: { vehicle_brand: new_attributes }
        vehicle_brand.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the vehicle_brand" do
        vehicle_brand = VehicleBrand.create! valid_attributes
        patch vehicle_brand_url(vehicle_brand), params: { vehicle_brand: new_attributes }
        vehicle_brand.reload
        expect(response).to redirect_to(vehicle_brand_url(vehicle_brand))
      end
    end

    context "with invalid parameters" do
    
      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        vehicle_brand = VehicleBrand.create! valid_attributes
        patch vehicle_brand_url(vehicle_brand), params: { vehicle_brand: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested vehicle_brand" do
      vehicle_brand = VehicleBrand.create! valid_attributes
      expect {
        delete vehicle_brand_url(vehicle_brand)
      }.to change(VehicleBrand, :count).by(-1)
    end

    it "redirects to the vehicle_brands list" do
      vehicle_brand = VehicleBrand.create! valid_attributes
      delete vehicle_brand_url(vehicle_brand)
      expect(response).to redirect_to(vehicle_brands_url)
    end
  end
end
