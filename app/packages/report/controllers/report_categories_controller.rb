class ReportCategoriesController < ApplicationController
  before_action :set_report_category, only: %i[ show edit update destroy ]

  # GET /report_categories or /report_categories.json
  def index
    @report_categories = ReportCategory.all
  end

  # GET /report_categories/1 or /report_categories/1.json
  def show
  end

  # GET /report_categories/new
  def new
    @report_category = ReportCategory.new
  end

  # GET /report_categories/1/edit
  def edit
  end

  # POST /report_categories or /report_categories.json
  def create
    @report_category = ReportCategory.new(report_category_params)

    respond_to do |format|
      if @report_category.save
        format.html { redirect_to @report_category, notice: "Report category was successfully created." }
        format.json { render :show, status: :created, location: @report_category }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @report_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /report_categories/1 or /report_categories/1.json
  def update
    respond_to do |format|
      if @report_category.update(report_category_params)
        format.html { redirect_to @report_category, notice: "Report category was successfully updated." }
        format.json { render :show, status: :ok, location: @report_category }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @report_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /report_categories/1 or /report_categories/1.json
  def destroy
    @report_category.destroy!

    respond_to do |format|
      format.html { redirect_to report_categories_path, status: :see_other, notice: "Report category was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_report_category
      @report_category = ReportCategory.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def report_category_params
      params.expect(report_category: [ :name, :parent_category_id, :nested_level, :discarded_at ])
    end
end
