class ProjectTicketsController < ApplicationController
  before_action :set_project_ticket, only: %i[ show edit update destroy ]

  # GET /project_tickets or /project_tickets.json
  def index
    @project_tickets = ProjectTicket.all
  end

  # GET /project_tickets/1 or /project_tickets/1.json
  def show
  end

  # GET /project_tickets/new
  def new
    @project_ticket = ProjectTicket.new
  end

  # GET /project_tickets/1/edit
  def edit
  end

  # POST /project_tickets or /project_tickets.json
  def create
    @project_ticket = ProjectTicket.new(project_ticket_params)

    respond_to do |format|
      if @project_ticket.save
        format.html { redirect_to @project_ticket, notice: "Project ticket was successfully created." }
        format.json { render :show, status: :created, location: @project_ticket }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project_ticket.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_tickets/1 or /project_tickets/1.json
  def update
    respond_to do |format|
      if @project_ticket.update(project_ticket_params)
        format.html { redirect_to @project_ticket, notice: "Project ticket was successfully updated." }
        format.json { render :show, status: :ok, location: @project_ticket }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project_ticket.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_tickets/1 or /project_tickets/1.json
  def destroy
    @project_ticket.destroy!

    respond_to do |format|
      format.html { redirect_to project_tickets_path, status: :see_other, notice: "Project ticket was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_ticket
      @project_ticket = ProjectTicket.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def project_ticket_params
      params.expect(project_ticket: [ :project_group_id, :name, :description, :status ])
    end
end
