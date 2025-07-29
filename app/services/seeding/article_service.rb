class Seeding::ArticleService
  def self.run
    NosqlUser.all.each_with_index do |nosql_user, user_index|
      1.times do |n|
        article_post = ArticlePost.create!(
          nosql_user: nosql_user,
          title: Faker::Movie.title,
          teaser: Faker::Movie.quote,
          categories: [Faker::Book.genre],
          content: {
            blocks: [
              {
                type: "paragraph",
                data: {
                  text: Faker::Movie.quote
                }
              },
            ]
          }
        )
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
                text: Faker::Lorem.paragraph(sentence_count: 30)
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
              type: "list",
              data: {
                style: "unordered",
                items: [
                  {
                    content: "Apples",
                    meta: {},
                    items: [
                      {
                        content: "Red",
                        meta: {},
                        items: []
                      },
                    ]
                  },
                ]
              }
            },
            {
              type: "list",
              data: {
                style: "ordered",
                meta: {
                  start: 2,
                  counterType: "upper-roman",
                },
                items: [
                  {
                    content: "Apples",
                    meta: {},
                    items: [
                      {
                        content: "Red",
                        meta: {},
                        items: []
                      },
                    ]
                  },
                ]
              }
            },
            {
              type: "list",
              data: {
                style: "checklist",
                items: [
                  {
                    content: "Apples",
                    meta: {
                      checked: false
                    },
                    items: [
                      {
                        content: "Red",
                        meta: {
                          checked: true
                        },
                        items: []
                      },
                    ]
                  },
                ]
              }
            },
            {
              type: "checklist",
              data: {
                items: [
                  {
                    text: "This is a block-styled editor",
                    checked: true
                  },
                  {
                    text: "Clean output data",
                    checked: false
                  },
                  {
                    text: "Simple and powerful API",
                    checked: true
                  }
                ]
              }
            },
            {
              type: "delimiter",
              data: {}
            },
            {
              type: "table",
              data: {
                withHeadings: true,
                stretched: false,
                content: [ [ "Kine", "Pigs", "Chicken" ], [ "1 pcs", "3 pcs", "12 pcs" ], [ "100$", "200$", "150$" ] ]
              }
            },
            {
              type: "warning",
              data: {
                title: "Note:",
                message: "Avoid using this method just for lulz. It can be very dangerous opposite your daily fun stuff."
              }
            },
            {
              type: "code",
              data: {
                  code: "body {\n font-size: 14px;\n line-height: 16px;\n}",
              }
            },
            {
              type: "text",
              data: {
                text: "Create a directory for your module, enter it and run <mark class=\"cdx-marker\">npm init</mark> command."
              }
            },
            {
              type: "paragraph",
              data: {
                text: Faker::Lorem.paragraph(sentence_count: 30)
              }
            },
            {
              type: "quote",
              data: {
                text: Faker::Movie.quote,
                caption: "#{Faker::Name.name}, #{Faker::Company.name}",
                alignment: "left"
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
                text: Faker::Lorem.paragraph(sentence_count: 30)
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
            {
              type: "paragraph",
              data: {
                text: Faker::Lorem.paragraph(sentence_count: 30)
              }
            },
          ],
        }
        article_post.update!(content: content)
      end
    end
    ArticlePost.all.each_with_index do |article_post, n|
      2.times do
        article_post.article_comments << ArticleComment.new(nosql_user_id: NosqlUser.all.sample.id, content: "comment #{Time.now.to_i}")
      end
      article_post.article_comments.each do |article_comment|
        2.times do
          article_comment.article_subcomments << ArticleSubcomment.new(nosql_user_id: NosqlUser.all.sample.id, content: "subcomment #{Time.now.to_i}")
        end
      end
    end
  end
end
