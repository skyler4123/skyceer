class Seeding::ProjectService
  def self.run
    self.create_project_owners
    self.create_project_categories
    self.create_project_groups
    self.create_project_members
    self.create_project_group_appointments
    self.create_project_tasks
    self.create_project_task_appointments
    self.create_project_subtasks
    self.create_project_subtask_appointments
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
      # For EDUCATION
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
    ProjectOwner.find_each do |project_owner|
      project_members = project_owner.project_members
      project_groups = project_owner.project_groups
      project_groups.each do |project_group|
        ProjectGroupAppointment.create!(
          project_group: project_group,
          appoint_to: project_members.sample
        )
      end
      project_members.each do |project_member|
        ProjectGroupAppointment.create!(
          project_group: project_groups.sample,
          appoint_to: project_member
        )
      end
    end
  end

  def self.create_project_tasks
    ProjectOwner.find_each do |project_owner|
      project_owner.project_groups.each do |project_group|
        5.times do |i|
          project_task = ProjectTask.create!(
            project_owner: project_owner,
            project_group: project_group,
            name: "Task #{i + 1} for #{project_group.name}",
            description: "Description for Task #{i + 1}",
            status: 'active'
          )
          ProjectCategoryAppointment.create!(
            project_category: project_owner.project_categories.sample,
            appoint_to: project_task
          )
        end
      end
    end
  end

  def self.create_project_task_appointments
    ProjectGroup.find_each do |project_group|
      project_members = project_group.project_members
      project_tasks = project_group.project_tasks
      project_tasks.each do |project_task|
        ProjectTaskAppointment.create!(
          project_task: project_task,
          appoint_to: project_members.sample
        )
      end
    end
  end

  def self.create_project_subtasks
    ProjectOwner.find_each do |project_owner|
      project_owner.project_groups.each do |project_group|
        project_group.project_tasks.each do |project_task|
          3.times do |i|
            project_subtask = ProjectSubtask.create!(
              project_owner: project_owner,
              project_group: project_group,
              project_task: project_task,
              name: "Subtask #{i + 1} for #{project_task.name}",
              description: "Description for Subtask #{i + 1}",
              status: 'active'
            )
            ProjectCategoryAppointment.create!(
              project_category: project_owner.project_categories.sample,
              appoint_to: project_subtask
            )
          end
        end
      end
    end
  end

  def self.create_project_subtask_appointments
    ProjectGroup.find_each do |project_group|
      project_members = project_group.project_members
      project_group.project_subtasks.each do |project_subtask|
        ProjectSubtaskAppointment.create!(
          project_subtask: project_subtask,
          appoint_to: project_members.sample
        )
      end
    end
  end
  
end
