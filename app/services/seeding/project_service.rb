class Seeding::ProjectService
  def self.run
    self.create_project_categories
    self.create_project_groups
    self.create_project_members
    self.create_project_tickets
    self.create_project_subtickets
    self.create_project_categories
  end

  def self.create_project_categories
    User.where(education_role: "education_school").find_each do |user|
      50.times do |i|
        ProjectCategory.create!(
          name: "Category #{i + 1} for #{user.name}",
          project_ownerable: user
        )
      end
    end
  end

  def self.create_project_groups
    # Logic to create project groups
    EducationSchool.all.each do |school|
      project_categories = school.user.project_categories
      project_group = ProjectGroup.create!(
        name: "#{school.name} Project Group",
        project_ownerable: school
      )
      ProjectCategoryAppointment.create!(
        project_category: project_categories.sample,
        appoint_to: project_group
      )
      # Additional logic for project group creation if needed
    end
  end

  def self.create_project_members
  end

  def self.create_project_tickets
    # Logic to create project tickets
    ProjectGroup.find_each do |group|
      user = group.project_ownerable.user
      project_categories = user.project_categories
      5.times do |i|
        project_ticket = ProjectTicket.create!(
          name: "Ticket #{i + 1} for #{group.name}",
          project_group: group
        )
        ProjectCategoryAppointment.create!(
          project_category: project_categories.sample,
          appoint_to: project_ticket
        )
      end
    end
  end

  def self.create_project_subtickets
    # Logic to create project subtickets
    ProjectTicket.find_each do |ticket|
      user = ticket.project_group.project_ownerable.user
      project_categories = user.project_categories
      3.times do |i|
        project_subticket = ProjectSubticket.create!(
          name: "Subticket #{i + 1} for #{ticket.name}",
          project_ticket: ticket
        )
        ProjectCategoryAppointment.create!(
          project_category: project_categories.sample,
          appoint_to: project_subticket
        )
      end
    end
  end

  def self.create_project_ticket_appointments
    # Logic to create project ticket appointments
    ProjectTicket.find_each do |ticket|
      project_group = ticket.project_group
      school = project_group.project_ownerable
      staffs = school.education_staffs
      staffs.each do |staff|
        ProjectTicketAppointment.create!(
          project_ticket: ticket,
          appoint_to: staff,
        )
      end
    end
  end
  
  
end