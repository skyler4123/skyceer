class Seeding::ArticleService
  def self.run
    NosqlUser.all.each_with_index do |nosql_user, user_index|
      1.times do |n|
        article_post = ArticlePost.create!(nosql_user: nosql_user, title: Faker::Movie.title)
        image_attachments = Seeding::AttachmentService.attach(record: nosql_user.user, relation: :image_attachments, number: 2)
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
    ArticlePost.all.each_with_index do |article_post, n|
      2.times do
        nosql_user = NosqlUser.all.sample
        article_post.article_comments << ArticleComment.new(nosql_user_id: nosql_user.id, content: "comment #{Time.now.to_i}")
      end
    end
  end
end