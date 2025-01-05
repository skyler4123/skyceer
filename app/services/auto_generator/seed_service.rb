class AutoGenerator::SeedService
  def self.run(seed_number: 0)
    AutoGenerator::UserService.run
    self.category
    self.category_appointment
        
    AutoGenerator::EducationService.run
    # AutoGenerator::VehicleService.run
    AutoGenerator::CalendarService.run
    # AutoGenerator::ChatService.run
    # AutoGenerator::ArticleService.run
    # AutoGenerator::EstateService.run
    AutoGenerator::ReportService.run
    AutoGenerator::PaymentService.run

    
    self.puts_count
    puts "AutoGenerator::SeedService doneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!"
    return true
  end


  def self.category
    20.times do |n|
      category = Category.create!(
        name: "category #{n}",
        parent_category: [Category.all.sample, nil].sample
      )
    end
  end

  def self.category_appointment
    Address.all.each do |address|
      CategoryAppointment.create!(
        category: Category.all.sample,
        category_appointmentable: address
      )
    end
  end

  def self.puts_count
    count_array = []
    skip_models = [ApplicationRecord, Current, Demo, Session, SessionApplicationRecord, EstateUser, VehicleUser, VehicleStore, VehicleCar]
    Dir[Rails.root.to_s + '/app/**/models/*.rb'].each do |file| 
      # Given string
      file_name = file.split('/').last
      
      # Step 1: Remove the file extension
      class_name = file_name.sub('.rb', '')
    
      # Step 2: Convert the string to CamelCase
      class_name = class_name.camelize
    
      # Step 3: Use `constantize` to get the model class
      model_class = class_name.constantize
      next if skip_models.include?(model_class)

      # Push model class count to count_array
      count_array << {model_class.to_s => model_class.count}
    end
    puts count_array
  end
end
