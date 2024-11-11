class AutoGenerator::SeedService
  def self.run(seed_record: 1, seed_image: 1)
    self.seed_for_application(seed_record, seed_image)
    self.seed_for_vehicle(seed_record, seed_image)
    self.seed_for_calendar(seed_record, seed_image)
    self.seed_for_education(seed_record, seed_image)
    self.seed_for_chat(seed_record, seed_image)
    self.seed_for_article(seed_record, seed_image)
    self.seed_for_estate(seed_record, seed_image)
    self.seed_for_report(seed_record, seed_image)
    puts "db:seed done!"
    return true
  end


  def self.seed_for_application(seed_record, seed_image)
    self.seed_for_user(seed_record, seed_image)
    self.seed_for_category(seed_record, seed_image)
  end

  def self.seed_for_user(seed_record, seed_image)
    seed_record.times do |n|
      user = User.create!(
        email: "email#{Time.now.to_i}_#{n}@gmail.com",
        password: "password1234",
        password_confirmation: "password1234",
        verified: true,
        name: "user name #{Faker::Movie.title}",
        address: Address.create_random_vietnam,
      )
      self.attach(record: user, relation: :avatar, number: 1)
    end
  end

  def self.seed_for_category(seed_record, seed_image)
    seed_record.times do |n|
      category = Category.create!(
        name: "category #{n}",
        parent_category: [Category.all.sample, nil].sample
      )
    end
  end

  def self.seed_for_vehicle(seed_record, seed_image)
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

  def self.seed_for_calendar(seed_record, seed_image)
    User.all.first(seed_record).each_with_index do |user, user_index|
      2.times do |n|
        calendar_group = CalendarGroup.create!(
          user: user,
          name: "user #{user_index} group #{n}",
          color: '#' + SecureRandom.hex(3),
          backgroundColor: '#' + SecureRandom.hex(3),
          dragBackgroundColor: '#' + SecureRandom.hex(3),
          borderColor: '#' + SecureRandom.hex(3),
        )
        2.times do |n|
          CalendarEvent.create!(
            calendar_group: calendar_group,
            lib: "tui",
            title: "#{Faker::Movie.title}",
            body: "#{Faker::Movie.quote}",
            isAllday: false,
            start: Time.now + user_index.days,
            end: Time.now + 1.hours + user_index.days,
            goingDuration: 0,
            comingDuration: 0,
            location: Address.create_random,
            attendees: [],
            category: ['milestone', 'task', 'time', 'allday'].sample,
            dueDateClass: "",
            recurrenceRule: "",
            state: ["Busy", "Free"].sample,
            isVisible: true,
            isPending: false,
            isFocused: false,
            isReadOnly: false,
            isPrivate: false,
            color: '#' + SecureRandom.hex(3),
            backgroundColor: '#' + SecureRandom.hex(3),
            dragBackgroundColor: '#' + SecureRandom.hex(3),
            borderColor: '#' + SecureRandom.hex(3),
            customStyle: {},
            raw: {},
          )
        end
      end
    end
  end

  def self.seed_for_education(seed_record, seed_image)
    seed_record.times do |n|
      education_school = EducationSchool.create!(name: "education school #{n}", user: User.all.sample, address: Address.create_random)
      self.attach(record: education_school, relation: :avatar, number: 1)
      2.times do |n_1|
        education_class = EducationClass.create!(name: "education class #{n_1}", education_school: education_school)
        self.attach(record: education_class, relation: :images, number: 2)
        
        education_room = EducationRoom.create!(name: "education room #{n}_1", education_school: education_school)
        self.attach(record: education_room, relation: :images, number: 2)

      end
    end

    User.all.first(seed_record).each_with_index do |user, index|
      if index.odd?
        education_teacher = EducationTeacher.create!(name: "education teacher #{index}", user: user)
        self.attach(record: education_teacher, relation: :images, number: 2)
        
      else
        education_student = EducationStudent.create!(name: "education student #{index}", user: user)
        self.attach(record: education_student, relation: :images, number: 2)
        
      end
    end
  end

  def self.seed_for_chat(seed_record, seed_image)
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
  end

  def self.seed_for_article(seed_record, seed_image)
    User.all.first(seed_record).each_with_index do |user, user_index|
      1.times do |n|
        article_post = ArticlePost.create!(user_id: user.id, title: Faker::Movie.title)
        article_post_images = self.attach(record: user, relation: :article_post_images, number: 2)        
        content = {
          blocks: [
            {
              type: "header",
              data: {
                text: Faker::Movie.title,
                level: 2
              }
            },
            {
              type: "paragraph",
              data: {
                text: Faker::Movie.quote
              }
            },
            {
              type: "list",
              data: {
                style: "unordered",
                items: [Faker::Movie.quote, Faker::Movie.quote, Faker::Movie.quote]
              }
            },
            {
              type: "image",
              data: {
                caption: Faker::Movie.title,
                file: { url: article_post_images.first },
                stretched: false,
                withBackground: false,
                withBorder: false,
              }
            },
            {
              type: "paragraph",
              data: {
                text: Faker::Movie.quote
              }
            },
            {
              type: "image",
              data: {
                caption: Faker::Movie.title,
                file: { url: article_post_images.second },
                stretched: false,
                withBackground: false,
                withBorder: false,
              }
            },
          ],
        }
        article_post.update!(content: content)
      end
    end
    (seed_record * 5).times do |n|
      article_post = ArticlePost.all.sample
      user = User.all.sample
      article_post.article_comments << ArticleComment.new(user_id: user.id, content: "comment #{Time.now.to_i}_#{n}")
    end
  end

  def self.seed_for_estate(seed_record, seed_image)
    User.all.first(seed_record).each_with_index do |user, index|
      estate_condo = EstateCondo.create!(
        user: user,
        name: "estate user name #{Faker::Movie.title}",
        price_cents: rand(1000..9999),
        address: Address.create_random_vietnam,
      )
      self.attach(record: estate_condo, relation: :images, number: 2)

      estate_hotel = EstateHotel.create!(
        user: user,
        name: "estate hotel name #{Faker::Movie.title}",
        price_cents: rand(1000..9999),
        address: Address.create_random_vietnam,
      )
      self.attach(record: estate_hotel, relation: :images, number: 2)

      estate_house = EstateHouse.create!(
        user: user,
        name: "estate house name #{Faker::Movie.title}",
        price_cents: rand(1000..9999),
        address: Address.create_random_vietnam,
      )
      self.attach(record: estate_house, relation: :images, number: 2)
    end
  end

  def self.seed_for_report(seed_record, seed_image)
    seed_record.times do |n|
      report_ticket = ReportTicket.create(
        title: "report ticket title #{n}",
        content: Faker::Movie.quote,
        category: rand(0..3),
        status: rand(0..3),
        reporter_email: ["", User.all.sample.email].sample
      )
      self.attach(record: report_ticket, relation: :images, number: 2)
    end
  end

  def self.attach(record: ,relation: :images, number: 2)
    (Dir.glob("./faker/images/randoms/*.*").sample(number).map {|dir| File.open(dir)}).each_with_index do |file, index|
      file_name, file_type = file.path.split('/').last.split('.')
      record.send(relation).attach(io: file, filename: file_name, content_type: "image/#{file_type}")
    end
    [record.send(relation)].flatten.map { |attachment| Rails.application.routes.url_helpers.rails_blob_url(attachment, only_path: true) }
  end
end





