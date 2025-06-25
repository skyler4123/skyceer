class EducationAdmin::EducationRoomsController < EducationAdmin::EducationsController

  # GET /education_rooms or /education_rooms.json
  def index
    @education_rooms = EducationRoom.where(education_school: @education_schools)
    @pagination, @education_rooms = pagy(@education_rooms)
    @json_data = {
      education_rooms: @education_rooms.as_json(only: %i[id education_school_id name discarded_at created_at updated_at], include: { education_school: { only: %i[id name] } }),
    }.to_json
  end

end
