class EducationSchools::EducationRoomsController < EducationsController
  before_action :set_education_school
  before_action :set_education_room, only: %i[ show edit update destroy ]

  # GET /education_rooms or /education_rooms.json
  def index
    @education_rooms = @education_school.education_rooms.all
  end

  # GET /education_rooms/1 or /education_rooms/1.json
  def show
  end

  # GET /education_rooms/new
  def new
    @education_room = EducationRoom.new
  end

  # GET /education_rooms/1/edit
  def edit
  end

  # POST /education_rooms or /education_rooms.json
  def create
    @education_room = EducationRoom.new(education_room_params)

    respond_to do |format|
      if @education_room.save
        format.html { redirect_to @education_room, notice: "Education room was successfully created." }
        format.json { render :show, status: :created, location: @education_room }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @education_room.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /education_rooms/1 or /education_rooms/1.json
  def update
    respond_to do |format|
      if @education_room.update(education_room_params)
        format.html { redirect_to @education_room, notice: "Education room was successfully updated." }
        format.json { render :show, status: :ok, location: @education_room }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @education_room.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /education_rooms/1 or /education_rooms/1.json
  def destroy
    @education_room.destroy!

    respond_to do |format|
      format.html { redirect_to education_rooms_path, status: :see_other, notice: "Education room was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education_room
      @education_room = EducationRoom.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def education_room_params
      params.require(:education_room).permit(:education_school_id, :name, :category)
    end
end
