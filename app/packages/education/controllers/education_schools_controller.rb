class EducationSchoolsController < ApplicationController
  before_action :set_education_school, only: %i[ show edit update destroy ]

  # GET /education_schools or /education_schools.json
  def index
    @education_schools = EducationSchool.all
  end

  # GET /education_schools/1 or /education_schools/1.json
  def show
  end

  # GET /education_schools/new
  def new
    @education_school = EducationSchool.new
  end

  # GET /education_schools/1/edit
  def edit
  end

  # POST /education_schools or /education_schools.json
  def create
    @education_school = EducationSchool.new(education_school_params)

    respond_to do |format|
      if @education_school.save
        format.html { redirect_to education_school_url(@education_school), notice: "Education school was successfully created." }
        format.json { render :show, status: :created, location: @education_school }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_school.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_schools/1 or /education_schools/1.json
  def update
    respond_to do |format|
      if @education_school.update(education_school_params)
        format.html { redirect_to education_school_url(@education_school), notice: "Education school was successfully updated." }
        format.json { render :show, status: :ok, location: @education_school }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_school.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_schools/1 or /education_schools/1.json
  def destroy
    @education_school.destroy!

    respond_to do |format|
      format.html { redirect_to education_schools_url, notice: "Education school was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_school
      @education_school = EducationSchool.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def education_school_params
      params.require(:education_school).permit(:education_user_id, :name)
    end
end
