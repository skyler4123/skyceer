class Seeding::ArticleService
  def self.run
    User.all.each_with_index do |user, user_index|
      1.times do |n|
        article_post = ArticlePost.create!(user_id: user.id, title: Faker::Movie.title)
        image_attachments = Seeding::AttachmentService.attach(record: user, relation: :image_attachments, number: 2)        
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
                file: { url: image_attachments.first },
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
                file: { url: image_attachments.second },
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
    2.times do |n|
      article_post = ArticlePost.all.sample
      user = User.all.sample
      article_post.article_comments << ArticleComment.new(user_id: user.id, content: "comment #{Time.now.to_i}_#{n}")
    end
  end
end