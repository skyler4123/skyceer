class EducationOwner::EducationRoomsController < EducationOwner::EducationsController
  before_action :set_education_room, only: %i[ edit update destroy ]

  # GET /education_rooms or /education_rooms.json
  def index
    @education_rooms = EducationRoom.where(education_school: @education_schools)
    @pagination, @education_rooms = pagy(@education_rooms)
    @json_data = {
      education_rooms: @education_rooms.as_json(only: %i[id education_school_id name discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } })
    }.to_json
  end

  # GET /education_rooms/new
  def new
    @education_room = EducationRoom.new
  end

  # GET /education_rooms/1/edit
  def edit
    @selected_categories = @education_room.education_categories
  end

  # POST /education_rooms or /education_rooms.json
  def create
    @education_room = EducationRoom.new(education_room_params)

    respond_to do |format|
      if @education_room.save
        if params[:education_room][:education_category_id].present?
          education_categories = EducationCategory.where(id: params[:education_room][:education_category_id])
          @education_room.education_categories = education_categories
        end

        format.html { redirect_to education_rooms_path, notice: CREATED_SUCCESS_MESSAGE }
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
        if params[:education_room][:education_category_id].present?
          education_categories = EducationCategory.where(id: params[:education_room][:education_category_id])
          @education_room.education_categories = education_categories
        end

        format.html { redirect_to education_rooms_path, notice: UPDATED_SUCCESS_MESSAGE }
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
      format.html { redirect_to education_rooms_path, status: :see_other, notice: DELETED_SUCCESS_MESSAGE }
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
      params.expect(education_room: [ :education_school_id, :name ])
    end

    def update_education_room_params
      params.expect(education_room: [ :name ])
    end
end
