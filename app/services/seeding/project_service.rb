class Seeding::ProjectService
  def self.run
    self.create_project_owners
    self.create_project_categories
    self.create_project_groups
    self.create_project_members
    self.create_project_group_appointments
    self.create_project_tasks
    self.create_project_subtasks
    self.create_project_categories
  end

  def self.create_project_owners
    User.where(education_role: :education_owner).find_each do |user|
      ProjectOwner.create!(
        project_ownerable: user
      )
    end
  end

  def self.create_project_categories
    ProjectOwner.find_each do |project_owner|
      50.times do |i|
        ProjectCategory.create!(
          name: "Category #{i + 1} for #{project_owner.project_ownerable.name}",
          project_owner: project_owner
        )
      end
    end
  end

  def self.create_project_groups
    ProjectOwner.find_each do |project_owner|
      10.times do |i|
        project_group = ProjectGroup.create!(
          name: "Group #{i + 1} for #{project_owner.project_ownerable.name}",
          project_owner: project_owner
        )
        ProjectCategoryAppointment.create!(
          project_category: project_owner.project_categories.sample,
          appoint_to: project_group
        )
      end
    end
  end

  def self.create_project_members
    ProjectOwner.find_each do |project_owner|
      project_owner.project_ownerable.education_owner.education_staffs.each do |education_staff|
        project_member = ProjectMember.create!(
          project_owner: project_owner,
          project_memberable: education_staff,
          name: education_staff.name,
          description: "Member of #{project_owner.project_ownerable.name}",
          status: 'active'
        )
        ProjectCategoryAppointment.create!(
          project_category: project_owner.project_categories.sample,
          appoint_to: project_member
        )
      end
    end
  end

  def self.create_project_group_appointments
  end

  def self.create_project_tasks
  end

  def self.create_project_task_appointments
  end

  def self.create_project_subtasks
  end

  def self.create_project_subtask_appointments
  end

  # Uncomment the following methods to implement the logic for creating project tasks and subtasks
  # def self.create_project_group_appointments
  #   ProjectGroup.find_each do |group|
  #     user = group.project_ownerable.user
  #     project_categories = user.project_categories
  #     group.project_members.each do |member|
  #       ProjectGroupAppointment.create!(
  #         project_group: group,
  #         appoint_to: member
  #       )
  #     end
  #   end
  # end

  # def self.create_project_tasks
  #   # Logic to create project tickets
  #   ProjectGroup.find_each do |group|
  #     user = group.project_ownerable.user
  #     project_categories = user.project_categories
  #     5.times do |i|
  #       project_task = ProjectTask.create!(
  #         name: "Task #{i + 1} for #{group.name}",
  #         project_group: group
  #       )
  #       ProjectCategoryAppointment.create!(
  #         project_category: project_categories.sample,
  #         appoint_to: project_task
  #       )
  #     end
  #   end
  # end

  # def self.create_project_subtasks
  #   # Logic to create project subtasks
  #   ProjectTask.find_each do |ticket|
  #     user = ticket.project_group.project_ownerable.user
  #     project_categories = user.project_categories
  #     3.times do |i|
  #       project_subtask = ProjectSubtask.create!(
  #         name: "Subtask #{i + 1} for #{ticket.name}",
  #         project_task: ticket
  #       )
  #       ProjectCategoryAppointment.create!(
  #         project_category: project_categories.sample,
  #         appoint_to: project_subtask
  #       )
  #     end
  #   end
  # end

  # def self.create_project_task_appointments
  #   # Logic to create project ticket appointments
  #   ProjectTask.find_each do |ticket|
  #     project_group = ticket.project_group
  #     school = project_group.project_ownerable
  #     staffs = school.education_staffs
  #     staffs.each do |staff|
  #       ProjectTaskAppointment.create!(
  #         project_task: ticket,
  #         appoint_to: staff,
  #       )
  #     end
  #   end
  # end
  
  
end