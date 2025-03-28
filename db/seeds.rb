# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create!(name: "Luke", movie: movies.first)



return if ENV['RAILS_ENV'] == 'production'
# REDIS.set('time', Date.current.to_s)

# DESTROY ALL
User.destroy_all
Session.destroy_all
Address.destroy_all
Category.destroy_all

ChatConversation.destroy_all

ArticlePost.destroy_all

EducationSchool.destroy_all
EducationCategory.destroy_all
EducationAdmin.destroy_all
EducationTeacher.destroy_all
EducationParent.destroy_all
EducationStudent.destroy_all
EducationRoom.destroy_all
EducationClass.destroy_all
EducationCourse.destroy_all
EducationSubject.destroy_all
EducationExam.destroy_all
EducationQuestion.destroy_all
EducationSchoolAppointment.destroy_all
EducationCategoryAppointment.destroy_all
EducationClassAppointment.destroy_all
EducationQuestionAppointment.destroy_all
EducationSubjectAppointment.destroy_all

CalendarEvent.destroy_all
CalendarCategory.destroy_all
CalendarCategoryAppointment.destroy_all

ReportTicket.destroy_all
ReportFrontend.destroy_all

PaymentUser.destroy_all
PaymentCustomer.destroy_all
PaymentMethod.destroy_all
PaymentMethodAppointment.destroy_all
PaymentDiscount.destroy_all
PaymentOrder.destroy_all
PaymentInvoice.destroy_all
PaymentLog.destroy_all
PaymentCategory.destroy_all
PaymentCategoryAppointment.destroy_all

# Run generator for development
Seeding::SeedService.run
puts "db:seed doneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!!"