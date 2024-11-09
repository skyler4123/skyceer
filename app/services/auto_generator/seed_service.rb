
class AutoGenerator::SeedService
  def self.run(seed_record: 1, seed_image: 1)

    ### APPLICATION PACKAGE
    # User
    seed_record.times do |n|
      user = User.create!(
        email: "email#{Time.now.to_i}_#{n}@gmail.com",
        password: "password1234",
        password_confirmation: "password1234",
        verified: true,
        name: "user name #{Faker::Movie.title}",
        address: Address.create_random_vietnam,
      )
      (Dir.glob("./faker/images/randoms/*.*").sample(1).map {|dir| File.open(dir)}).each_with_index do |file, index|
        file_name, file_type = file.path.split('/').last.split('.')
        user.avatar.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
      end
    end
    


    # Vehicle Package
    ActiveRecord::Base.transaction do
      # User.first(10).each do |user|
      #   VehicleUser.create!(user: user)
      # end
      User.all.first(seed_record).each do |user|
        1.times do
          vehicle_store = VehicleStore.create!(
            name: "vehicle store name #{Faker::Movie.title}",
            user: user,
            coordinates: [rand(-10e6..10e6), rand(-10e6..10e6)],
          )
          1.times do
            VehicleCar.create!(
              name: "vehicle car name #{Faker::Movie.title}",
              model: "model #{Faker::Movie.title}",
              brand: ['tesla', 'toyota', 'honda'].sample,
              vehicle_store: vehicle_store,
              user: user,
              price: rand(1..1000),
              year: rand(1900..2024),
              post_purpose: [0, 1, 2].sample,
              version: "version #{Faker::Movie.title}",
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
    #     CalendarUser.create!(name: "calendar_user_#{index}", user: user)
    #   endq
    #   CalendarUser.all.each_with_index do |calendar_user|
    #     2.times do |n|
    #       CalendarSchedule.create!(
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
    User.all.first(seed_record).each do |user|
      2.times do |n|
        calendar_group = CalendarGroup.create!(
          user: user,
          name: "calendars group #{n}",
          color: '#' + SecureRandom.hex(3),
          background_color: '#' + SecureRandom.hex(3),
          drag_background_color: '#' + SecureRandom.hex(3),
          border_color: '#' + SecureRandom.hex(3),
        )
        2.times do |n|
          CalendarEvent.create!(
            calendar_group: calendar_group
            lib: "tui",
            title: "#{Faker::Movie.title}",
            body: "#{Faker::Movie.quote}",
            is_allday: false,
            start: Time.now,
            end: Time.now + 1.hours,
            going_duration: 0,
            coming_duration: 0,
            location: Address.create_random,
            attendees: [],
            category: "",
            recurrence_rule: "",
            state: "",
            is_visible: "",
            is_pending: "",
            is_focused: "",
            is_readOnly: "",
            is_private: "",
            color: "",
            background_color: "",
            drag_background_color: "",
            border_color: "",
            custom_style: "",
            raw: "",
          )
        end
      end
    end
    
    
    # EDUCATION PACKAGE
    seed_record.times do |n|
      education_school = EducationSchool.create!(name: "education school #{n}", user: User.all.sample, address: Address.create_random)
      (Dir.glob("./faker/images/randoms/*.*").sample(1).map {|dir| File.open(dir)}).each_with_index do |file, index|
        file_name, file_type = file.path.split('/').last.split('.')
        education_school.avatar.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
      end
    end

    seed_record.times do |n|
      education_class = EducationClass.create!(name: "education class #{n}", education_school: EducationSchool.all.sample)
      (Dir.glob("./faker/images/randoms/*.*").sample(1).map {|dir| File.open(dir)}).each_with_index do |file, index|
        file_name, file_type = file.path.split('/').last.split('.')
        education_class.images.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
      end
    end

    seed_record.times do |n|
      education_room = EducationRoom.create!(name: "education room #{n}", education_school: EducationSchool.all.sample)
      (Dir.glob("./faker/images/randoms/*.*").sample(1).map {|dir| File.open(dir)}).each_with_index do |file, index|
        file_name, file_type = file.path.split('/').last.split('.')
        education_room.images.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
      end
    end

    seed_record.times do |n|
      education_teacher = EducationTeacher.create!(name: "education teacher #{n}", user: User.all.sample)
      (Dir.glob("./faker/images/randoms/*.*").sample(1).map {|dir| File.open(dir)}).each_with_index do |file, index|
        file_name, file_type = file.path.split('/').last.split('.')
        education_teacher.images.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
      end
    end

    seed_record.times do |n|
      education_student = EducationStudent.create!(name: "education student #{n}", user: User.all.sample)
      (Dir.glob("./faker/images/randoms/*.*").sample(1).map {|dir| File.open(dir)}).each_with_index do |file, index|
        file_name, file_type = file.path.split('/').last.split('.')
        education_student.images.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
      end
    end
    
    
    # CHAT PACKAGE
    ChatUser.all.sample(seed_record).each do |chat_user|
      # ChatConversation.create!(chat_user_ids: ChatUser.pluck(:id).sample((2..5).to_a.sample).map(&:to_s))
      # ChatConversation.create!(chat_user_ids: [ChatUser.first.id, ChatUser.second.id])
      # ChatConversation.create!(chat_user_ids: ChatUser.pluck(:id).sample((2..2).to_a.sample).map(&:to_s))
      ChatConversation.create!(chat_user_ids: [chat_user.id.to_s, ChatUser.where.not(id: chat_user.id).first(seed_record).sample.id.to_s])
    end
    
    (seed_record * 5).times do |n|
      chat_conversation = ChatConversation.all.sample
      chat_user_ids = chat_conversation.chat_user_ids
      chat_conversation.chat_messages << ChatMessage.new(chat_user_id: chat_user_ids.sample, content: "content #{Time.now.to_i}_#{n}")
    end
    
    
    # ARTICLE package
    User.all.sample(seed_record).each_with_index do |user, user_index|
      1.times do |n|
        content = {
          blocks: [{
            id: "oUq2g_tl8y",
            type: "header",
            data: {
               text: Faker::Movie.quote,
               level: 2
            }
         }],
        }
        ArticlePost.create!(user_id: user.id, title: Faker::Movie.title, content: content)
      end
    end
    (seed_record * 5).times do |n|
      article_post = ArticlePost.all.sample
      user = User.all.sample
      article_post.article_comments << ArticleComment.new(user_id: user.id, content: "comment #{Time.now.to_i}_#{n}")
    end
    
    # ENGLISH Package
    
    # REAL ESTATE
    # User.first(10).each do |user|
    #   EstateUser.create!(user: user)
    # end
    
    User.all.sample(seed_record).each_with_index do |user, index|
      user.estate_condos.create!(
        name: "estate user name #{Faker::Movie.title}",
        price_cents: rand(1000..9999),
        address: Address.create_random_vietnam,
      )
      user.estate_hotels.create!(
        name: "estate hotel name #{Faker::Movie.title}",
        price_cents: rand(1000..9999),
        address: Address.create_random_vietnam,
      )
      user.estate_houses.create!(
        name: "estate house name #{Faker::Movie.title}",
        price_cents: rand(1000..9999),
        address: Address.create_random_vietnam,
      )
    end
    
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
    
    # REPORT
    (seed_record * 2).times do |n|
      report_ticket = ReportTicket.create(
        title: "report ticket title #{n}",
        content: Faker::Movie.quote,
        category: rand(0..3),
        status: rand(0..3),
        reporter_email: ["", User.all.sample.email].sample
      )

      (Dir.glob("./faker/images/randoms/*.*").sample(2).map {|dir| File.open(dir)}).each_with_index do |file, index|
        file_name, file_type = file.path.split('/').last.split('.')
        report_ticket.images.attach(io: file, filename: file_name, content_type: "image/#{file_type}")
      end
    end

    puts "db:seed done!"
  end

  def self.attach(record: ,relation: :images, number: 2)
    (Dir.glob("./faker/images/randoms/*.*").sample(number).map {|dir| File.open(dir)}).each_with_index do |file, index|
      file_name, file_type = file.path.split('/').last.split('.')
      record.send(relation).attach(io: file, filename: file_name, content_type: "image/#{file_type}")
    end
  end
end