class EducationCategoriesController < ApplicationController
  before_action :set_education_category, only: %i[ show edit update destroy ]

  # GET /education_categories or /education_categories.json
  def index
    @education_categories = EducationCategory.all
  end

  # GET /education_categories/1 or /education_categories/1.json
  def show
  end

  # GET /education_categories/new
  def new
    @education_category = EducationCategory.new
  end

  # GET /education_categories/1/edit
  def edit
  end

  # POST /education_categories or /education_categories.json
  def create
    @education_category = EducationCategory.new(education_category_params)

    respond_to do |format|
      if @education_category.save
        format.html { redirect_to @education_category, notice: "Education category was successfully created." }
        format.json { render :show, status: :created, location: @education_category }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_categories/1 or /education_categories/1.json
  def update
    respond_to do |format|
      if @education_category.update(education_category_params)
        format.html { redirect_to @education_category, notice: "Education category was successfully updated." }
        format.json { render :show, status: :ok, location: @education_category }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_categories/1 or /education_categories/1.json
  def destroy
    @education_category.destroy!

    respond_to do |format|
      format.html { redirect_to education_categories_path, status: :see_other, notice: "Education category was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_category
      @education_category = EducationCategory.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def education_category_params
      params.expect(education_category: [ :name, :parent_category_id ])
    end
end
