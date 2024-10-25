
class AutoGenerator::SeedService
  def self.run(seed_record: 1, seed_image: 1)

    ### APPLICATION PACKAGE
    # Address
    seed_record.times do |n|
      Address.create(
        unit_number: SecureRandom.hex(3),
        street_number: Faker::Address.street_address,
        address_line_1: Faker::Movies::HarryPotter.character,
        address_line_2: Faker::Movies::HarryPotter.character,
        city: Faker::Address.city,
        country_code: COUNTRY.pluck(:alpha_2_code).sample,
        postal_code: Faker::Address.postcode,
        longitude: rand(-180..180),
        latitude: rand(-90..90),
      )
    end
    # User
    seed_record.times do |n|
      user = User.create(
        email: "email#{Time.now.to_i}_#{n}@gmail.com",
        password: "password1234",
        password_confirmation: "password1234",
        verified: true,
        name: "user name #{Faker::Movies::HarryPotter.character}"
        
      )
      (Dir.glob("./faker/images/randoms/*.*").sample(1).map {|dir| File.open(dir)}).each_with_index do |file, index|
        file_name, file_type = file.path.split('/').last.split('.')
        user.avatar.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
      end
    end
    


    # Vehicle Package
    ActiveRecord::Base.transaction do
      # User.first(10).each do |user|
      #   VehicleUser.create(user: user)
      # end
      VehicleUser.all.sample(seed_record).each do |vehicle_user|
        1.times do
          vehicle_store = VehicleStore.create(
            name: "vehicle store name #{Faker::Movies::HarryPotter.character}",
            vehicle_user_id: vehicle_user.id,
            coordinates: [rand(-10e6..10e6), rand(-10e6..10e6)],
          )
          1.times do
            VehicleCar.create(
              name: "vehicle car name #{Faker::Movies::HarryPotter.character}",
              model: "model #{Faker::Movies::HarryPotter.character}",
              brand: ['tesla', 'toyota', 'honda'].sample,
              vehicle_store: vehicle_store,
              vehicle_user: vehicle_user,
              price: rand(1..1000),
              year: rand(1900..2024),
              post_purpose: [0, 1, 2].sample,
              version: "version #{Faker::Movies::HarryPotter.character}",
              coordinates: vehicle_store.coordinates,
              released_at: rand(10.years).seconds.from_now,
              verified: true,
              expired: false,
            )
          end
        end
      end
    end
    
    
    # CALENDAR PACKAGE
    # CalendarUser.destroy_all
    # ActiveRecord::Base.transaction do
    #   User.first(10).each_with_index do |user, index|
    #     CalendarUser.create(name: "calendar_user_#{index}", user: user)
    #   endq
    #   CalendarUser.all.each_with_index do |calendar_user|
    #     2.times do |n|
    #       CalendarSchedule.create(
    #         calendar_user: calendar_user,
    #         name: "calendar_schedule_#{n}",
    #         color: '#' + SecureRandom.hex(3),
    #         background_color: '#' + SecureRandom.hex(3),
    #         drag_background_color: '#' + SecureRandom.hex(3),
    #         border_color: '#' + SecureRandom.hex(3),
    #         )
    #     end
    #   end
    # end
    
    
    # EDUCATION PACKAGE
    # EducationUser.destroy_all
    # EducationSchool.destroy_all
    # EducationTeacher.destroy_all
    # EducationStudent.destroy_all
    # EducationRoom.destroy_all
    # EducationClass.destroy_all
    
    # ActiveRecord::Base.transaction do
    #   User.first(10).each_with_index do |user, index|
    #     EducationUser.create(name: "education_user_#{index}", user: user)
    #   end
    
    #   EducationUser.all.each_with_index do |user, index|
    #     if index < 2
    #       school = EducationSchool.create(name: "education_school_#{index}", education_user: user)
    #       5.times do |n|
    #         EducationRoom.create(name: "education_room_#{n}", education_school: school)
    #       end
    #       5.times do |n|
    #         EducationClass.create(name: "education_class_#{n}", education_school: school)
    #       end
    #     end
    #     school = EducationSchool.all.sample
    #     if index >=2 && index < 6
    #       EducationTeacher.create(name: "education_teacher_#{index}", education_user: user, education_school: school)
    #     end
    #     if index >= 6
    #       EducationStudent.create(name: "education_student_#{index}", education_user: user, education_school: school, education_class: school.education_classes.sample)
    #     end
    #   end
    # end
    
    
    # AGRICULTURE PACKAGE
    # AgricultureUser.destroy_all
    # ActiveRecord::Base.transaction do
    #   User.first(10).each_with_index do |user, index|
    #     AgricultureUser.create(name: "agriculture_user_#{index}", user: user)
    #   end
    #   AgricultureUser.all.each_with_index do |user, index|
    #     if (index % 2 == 0)
    #       AgricultureFarmer.create(name: "agriculture_farmer_#{index}", agriculture_user: user)
    #     else
    #       AgricultureMerchant.create(name: "agriculture_merchant_#{index}", agriculture_user: user)
    #     end
    #   end
    #   AgricultureFarmer.all.each_with_index do |farmer, index|
    #     AgricultureFarm.create(name: "agriculture_farm_#{index}", agriculture_farmer: farmer)
    #   end
    # end
    
    
    # CHAT PACKAGE
    ChatUser.all.sample(seed_record).each do |chat_user|
      # ChatConversation.create(chat_user_ids: ChatUser.pluck(:id).sample((2..5).to_a.sample).map(&:to_s))
      # ChatConversation.create(chat_user_ids: [ChatUser.first.id, ChatUser.second.id])
      # ChatConversation.create(chat_user_ids: ChatUser.pluck(:id).sample((2..2).to_a.sample).map(&:to_s))
      ChatConversation.create(chat_user_ids: [chat_user.id.to_s, ChatUser.where.not(id: chat_user.id).first(seed_record).sample.id.to_s])
    end
    
    (seed_record * 5).times do |n|
      chat_conversation = ChatConversation.all.sample
      chat_user_ids = chat_conversation.chat_user_ids
      chat_conversation.chat_messages << ChatMessage.new(chat_user_id: chat_user_ids.sample, content: "content #{Time.now.to_i}_#{n}")
    end
    
    
    # ARTICLE package
    ArticleUser.all.sample(seed_record).each_with_index do |user, user_index|
      1.times do |n|
        content = {
          blocks: [{
            id: "oUq2g_tl8y",
            type: "header",
            data: {
               text: Faker::Movies::HarryPotter.quote,
               level: 2
            }
         }],
        }
        ArticlePost.create(article_user: user, package: 'vehicle', title: Faker::Movies::HarryPotter.character, content: content)
      end
    end
    (seed_record * 5).times do |n|
      article_post = ArticlePost.all.sample
      article_user = ArticleUser.all.sample
      article_post.article_comments << ArticleComment.new(article_user_id: article_user.id, content: "comment #{Time.now.to_i}_#{n}")
    end
    
    # ENGLISH Package
    
    # REAL ESTATE
    # User.first(10).each do |user|
    #   EstateUser.create(user: user)
    # end
    
    EstateUser.all.sample(seed_record).each_with_index do |estate_user, index|
      estate_user.estate_condos.create(
        name: "estate user name #{Faker::Movies::HarryPotter.character}",
        address: "address #{Faker::Movies::HarryPotter.character}",
        longitude: rand(-180..180),
        latitude: rand(-90..90),
        price_cents: rand(1000..9999),
      )
      estate_user.estate_hotels.create(
        name: "estate hotel name #{Faker::Movies::HarryPotter.character}",
        address: "address #{Faker::Movies::HarryPotter.character}",
        longitude: rand(-180..180),
        latitude: rand(-90..90),
        price_cents: rand(1000..9999),
      )
      estate_user.estate_houses.create(
        name: "estate house name #{Faker::Movies::HarryPotter.character}",
        address: Address.all.sample,
        price_cents: rand(1000..9999),
      )
    end
    
    
    # UPLOAD IMAGE
    # 15.times do |n|
    #   (Dir.glob("/rails/faker/images/laptop/*.*").sample(2).map {|dir| File.open(dir)}).each_with_index do |file, index|
    #     file_name, file_type = file.path.split('/').last.split('.')
    #     Laptop.all.sample.images.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
    #   end
    # end
    (seed_image).times do |n|
      (Dir.glob("./faker/images/randoms/*.*").sample(1).map {|dir| File.open(dir)}).each_with_index do |file, index|
        file_name, file_type = file.path.split('/').last.split('.')

        EstateHouse.all.sample.images.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
      end
    end
    
    
    puts "db:seed done!"
  end
end