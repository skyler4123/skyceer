class CalendarCategoriesController < ApplicationController
  before_action :set_calendar_category, only: %i[ show edit update destroy ]

  # GET /calendar_categories or /calendar_categories.json
  def index
    @calendar_categories = CalendarCategory.all
  end

  # GET /calendar_categories/1 or /calendar_categories/1.json
  def show
  end

  # GET /calendar_categories/new
  def new
    @calendar_category = CalendarCategory.new
  end

  # GET /calendar_categories/1/edit
  def edit
  end

  # POST /calendar_categories or /calendar_categories.json
  def create
    @calendar_category = CalendarCategory.new(calendar_category_params)

    respond_to do |format|
      if @calendar_category.save
        format.html { redirect_to @calendar_category, notice: "Calendar category was successfully created." }
        format.json { render :show, status: :created, location: @calendar_category }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @calendar_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /calendar_categories/1 or /calendar_categories/1.json
  def update
    respond_to do |format|
      if @calendar_category.update(calendar_category_params)
        format.html { redirect_to @calendar_category, notice: "Calendar category was successfully updated." }
        format.json { render :show, status: :ok, location: @calendar_category }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @calendar_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /calendar_categories/1 or /calendar_categories/1.json
  def destroy
    @calendar_category.destroy!

    respond_to do |format|
      format.html { redirect_to calendar_categories_path, status: :see_other, notice: "Calendar category was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_calendar_category
      @calendar_category = CalendarCategory.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def calendar_category_params
      params.expect(calendar_category: [ :name, :userable_id, :userable_type, :parent_category_id, :nested_level, :discarded_at ])
    end
end
