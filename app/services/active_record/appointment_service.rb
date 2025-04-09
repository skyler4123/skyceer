module ActiveRecord
  class AppointmentService
    def initialize(parent, children, association_name)
      @parent = parent
      @children = children
      @association_name = association_name
      @to_append = []
      @to_remove = []
      process_appointments # Ensure appointments are processed first
      yield(self) if block_given?
    end

    # Define the logic for appending children
    def append
      yield(@to_append) if block_given?
    end

    # Define the logic for removing children
    def remove
      yield(@to_remove) if block_given?
    end

    private

    # Get the current children through the association
    def current_children
      @parent.public_send(@association_name)
    end

    # Process the appointments (append and remove)
    def process_appointments
      @to_append = @children - current_children
      @to_remove = current_children - @children
      process_append
      process_remove
    end

    # Process the appointments by appending children
    def process_append
      current_children << @to_append if @to_append.any?
    end

    # Process the appointments by removing children
    def process_remove
      current_children.delete(@to_remove) if @to_remove.any?
    end
  end
end
