class ReportTicketsController < ApplicationController
  before_action :set_report_ticket, only: %i[ show edit update destroy ]

  # GET /report_tickets or /report_tickets.json
  def index
    @report_tickets = ReportTicket.all
  end

  # GET /report_tickets/1 or /report_tickets/1.json
  def show
  end

  # GET /report_tickets/new
  def new
    @report_ticket = ReportTicket.new
  end

  # GET /report_tickets/1/edit
  def edit
  end

  # POST /report_tickets or /report_tickets.json
  def create
    @report_ticket = ReportTicket.new(report_ticket_params)

    respond_to do |format|
      if @report_ticket.save
        format.html { redirect_to @report_ticket, notice: "Report ticket was successfully created." }
        format.json { render :show, status: :created, location: @report_ticket }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @report_ticket.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /report_tickets/1 or /report_tickets/1.json
  def update
    respond_to do |format|
      if @report_ticket.update(report_ticket_params)
        format.html { redirect_to @report_ticket, notice: "Report ticket was successfully updated." }
        format.json { render :show, status: :ok, location: @report_ticket }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @report_ticket.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /report_tickets/1 or /report_tickets/1.json
  def destroy
    @report_ticket.destroy!

    respond_to do |format|
      format.html { redirect_to report_tickets_path, status: :see_other, notice: "Report ticket was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_report_ticket
      @report_ticket = ReportTicket.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def report_ticket_params
      params.expect(report_ticket: [ :report_owner_id, :title, :content, :status, :email, :phone, :nation, :discarded_at ])
    end
end
