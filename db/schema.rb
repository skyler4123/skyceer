# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_07_13_060059) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"
  enable_extension "pgcrypto"

  create_table "active_storage_attachments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.uuid "record_id", null: false
    t.uuid "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "addresses", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "uid"
    t.string "alpha2"
    t.string "alpha3"
    t.string "continent"
    t.string "nationality"
    t.string "region"
    t.string "subdivision"
    t.decimal "longitude"
    t.decimal "latitude"
    t.integer "level_total"
    t.string "level_1"
    t.string "level_2"
    t.string "level_3"
    t.string "level_4"
    t.string "level_5"
    t.string "level_6"
    t.string "level_7"
    t.string "level_8"
    t.string "level_9"
    t.string "level_10"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["alpha2"], name: "index_addresses_on_alpha2"
    t.index ["alpha3"], name: "index_addresses_on_alpha3"
    t.index ["continent"], name: "index_addresses_on_continent"
    t.index ["level_1"], name: "index_addresses_on_level_1"
    t.index ["level_10"], name: "index_addresses_on_level_10"
    t.index ["level_2"], name: "index_addresses_on_level_2"
    t.index ["level_3"], name: "index_addresses_on_level_3"
    t.index ["level_4"], name: "index_addresses_on_level_4"
    t.index ["level_5"], name: "index_addresses_on_level_5"
    t.index ["level_6"], name: "index_addresses_on_level_6"
    t.index ["level_7"], name: "index_addresses_on_level_7"
    t.index ["level_8"], name: "index_addresses_on_level_8"
    t.index ["level_9"], name: "index_addresses_on_level_9"
    t.index ["nationality"], name: "index_addresses_on_nationality"
    t.index ["region"], name: "index_addresses_on_region"
  end

  create_table "calendar_categories", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.string "uid"
    t.string "color"
    t.string "calendar_ownerable_type", null: false
    t.uuid "calendar_ownerable_id", null: false
    t.uuid "parent_category_id"
    t.integer "nested_level", default: 0
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["calendar_ownerable_type", "calendar_ownerable_id"], name: "index_calendar_categories_on_calendar_ownerable"
    t.index ["parent_category_id"], name: "index_calendar_categories_on_parent_category_id"
  end

  create_table "calendar_category_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "calendar_category_id", null: false
    t.string "appoint_to_type", null: false
    t.uuid "appoint_to_id", null: false
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["appoint_to_type", "appoint_to_id"], name: "index_calendar_category_appointments_on_appoint_to"
    t.index ["calendar_category_id"], name: "index_calendar_category_appointments_on_calendar_category_id"
  end

  create_table "calendar_events", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "calendar_ownerable_type", null: false
    t.uuid "calendar_ownerable_id", null: false
    t.string "calendar_groupable_type", null: false
    t.uuid "calendar_groupable_id", null: false
    t.string "uid"
    t.integer "library"
    t.string "title"
    t.string "body"
    t.boolean "isAllday"
    t.datetime "start"
    t.datetime "end"
    t.integer "goingDuration"
    t.integer "comingDuration"
    t.string "location"
    t.text "attendees"
    t.integer "category"
    t.string "dueDateClass"
    t.string "recurrenceRule"
    t.integer "state"
    t.boolean "isVisible"
    t.boolean "isPending"
    t.boolean "isFocused"
    t.boolean "isReadOnly"
    t.boolean "isPrivate"
    t.string "color"
    t.string "backgroundColor"
    t.string "dragBackgroundColor"
    t.string "borderColor"
    t.json "customStyle"
    t.json "raw"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["calendar_groupable_type", "calendar_groupable_id"], name: "index_calendar_events_on_calendar_groupable"
    t.index ["calendar_ownerable_type", "calendar_ownerable_id"], name: "index_calendar_events_on_calendar_ownerable"
  end

  create_table "categories", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "uid"
    t.string "name"
    t.string "color"
    t.uuid "parent_category_id"
    t.integer "nested_level", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["parent_category_id"], name: "index_categories_on_parent_category_id"
  end

  create_table "category_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "category_id", null: false
    t.string "appoint_to_type", null: false
    t.uuid "appoint_to_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["appoint_to_type", "appoint_to_id"], name: "index_category_appointments_on_appoint_to"
    t.index ["category_id"], name: "index_category_appointments_on_category_id"
  end

  create_table "demos", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "string"
    t.text "text"
    t.float "float"
    t.decimal "decimal"
    t.datetime "datetime"
    t.time "time"
    t.date "date"
    t.binary "binary"
    t.boolean "boolean"
    t.json "json"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "education_admins", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_owner_id", null: false
    t.uuid "user_id"
    t.uuid "education_school_id"
    t.string "uid"
    t.string "name", null: false
    t.string "email", comment: "Admin can be created without user at first time then will match with user by email"
    t.string "status", default: "active", comment: "Status of the admin, can be active, inactive, or archived"
    t.string "role", default: "admin", comment: "Role of the admin, can be admin or super_admin"
    t.string "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_owner_id"], name: "index_education_admins_on_education_owner_id"
    t.index ["education_school_id"], name: "index_education_admins_on_education_school_id"
    t.index ["user_id"], name: "index_education_admins_on_user_id"
  end

  create_table "education_categories", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_owner_id", null: false
    t.string "name", null: false
    t.string "uid"
    t.string "color"
    t.uuid "parent_category_id"
    t.integer "nested_level", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_owner_id"], name: "index_education_categories_on_education_owner_id"
    t.index ["parent_category_id"], name: "index_education_categories_on_parent_category_id"
  end

  create_table "education_category_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_category_id", null: false
    t.string "appoint_to_type", null: false
    t.uuid "appoint_to_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["appoint_to_type", "appoint_to_id"], name: "index_education_category_appointments_on_appoint_to"
    t.index ["education_category_id"], name: "index_education_category_appointments_on_education_category_id"
  end

  create_table "education_class_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_class_id", null: false
    t.string "appoint_to_type", null: false
    t.uuid "appoint_to_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["appoint_to_type", "appoint_to_id"], name: "index_education_class_appointments_on_appoint_to"
    t.index ["education_class_id"], name: "index_education_class_appointments_on_education_class_id"
  end

  create_table "education_classes", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_school_id", null: false
    t.uuid "education_course_id", null: false
    t.string "uid"
    t.string "name", null: false
    t.string "description"
    t.string "status", default: "active", comment: "Status of the class, can be active, inactive, or archived"
    t.string "color", comment: "Color theme of the class"
    t.string "language", default: "en", comment: "Language of the class, default is English"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_education_classes_on_discarded_at"
    t.index ["education_course_id"], name: "index_education_classes_on_education_course_id"
    t.index ["education_school_id"], name: "index_education_classes_on_education_school_id"
  end

  create_table "education_courses", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_school_id", null: false
    t.string "uid"
    t.string "name", null: false
    t.string "description"
    t.string "status", default: "active", comment: "Status of the course, can be active, inactive, or archived"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_school_id"], name: "index_education_courses_on_education_school_id"
  end

  create_table "education_exam_to_classes", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_exam_id", null: false
    t.uuid "education_class_id", null: false
    t.uuid "education_subject_id", null: false
    t.string "uid"
    t.string "name"
    t.string "description"
    t.decimal "score"
    t.integer "status"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_education_exam_to_classes_on_discarded_at"
    t.index ["education_class_id"], name: "index_education_exam_to_classes_on_education_class_id"
    t.index ["education_exam_id"], name: "index_education_exam_to_classes_on_education_exam_id"
    t.index ["education_subject_id"], name: "index_education_exam_to_classes_on_education_subject_id"
  end

  create_table "education_exam_to_students", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_exam_id", null: false
    t.uuid "education_student_id", null: false
    t.uuid "education_exam_to_class_id"
    t.json "answer"
    t.decimal "score"
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_exam_id"], name: "index_education_exam_to_students_on_education_exam_id"
    t.index ["education_exam_to_class_id"], name: "index_education_exam_to_students_on_education_exam_to_class_id"
    t.index ["education_student_id"], name: "index_education_exam_to_students_on_education_student_id"
  end

  create_table "education_exams", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_owner_id", null: false
    t.uuid "education_school_id", null: false
    t.uuid "education_subject_id", null: false
    t.string "uid"
    t.string "name", null: false
    t.string "description"
    t.integer "status"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_owner_id"], name: "index_education_exams_on_education_owner_id"
    t.index ["education_school_id"], name: "index_education_exams_on_education_school_id"
    t.index ["education_subject_id"], name: "index_education_exams_on_education_subject_id"
  end

  create_table "education_lessons", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_owner_id", null: false
    t.uuid "education_school_id", null: false
    t.uuid "education_class_id"
    t.uuid "education_subject_id"
    t.uuid "education_teacher_id"
    t.string "title", null: false
    t.string "content"
    t.string "uid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_class_id"], name: "index_education_lessons_on_education_class_id"
    t.index ["education_owner_id"], name: "index_education_lessons_on_education_owner_id"
    t.index ["education_school_id"], name: "index_education_lessons_on_education_school_id"
    t.index ["education_subject_id"], name: "index_education_lessons_on_education_subject_id"
    t.index ["education_teacher_id"], name: "index_education_lessons_on_education_teacher_id"
  end

  create_table "education_owners", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.string "uid"
    t.string "name", null: false
    t.string "email", comment: "Email address of the school can be different from the user's email address"
    t.string "category"
    t.string "phone", comment: "Phone number of the school can be different from the user's phone number"
    t.string "description", comment: "Description of the school"
    t.string "status", default: "active", comment: "Status of the school, can be active, inactive, or archived"
    t.string "website", comment: "Website of the school"
    t.string "avatar", comment: "Avatar image of the school"
    t.string "logo"
    t.string "banner"
    t.string "color", comment: "Color theme of the school"
    t.string "timezone", default: "UTC", comment: "Timezone of the school, default is UTC"
    t.string "language", default: "en", comment: "Language of the school, default is English"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_education_owners_on_discarded_at"
    t.index ["user_id"], name: "index_education_owners_on_user_id"
  end

  create_table "education_parents", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_owner_id", null: false
    t.uuid "user_id"
    t.uuid "education_school_id", null: false
    t.string "uid"
    t.string "name", null: false
    t.string "email", comment: "Parent can be created without user at first time then will match with user by email"
    t.string "status", default: "active", comment: "Status of the parent, can be active, inactive, or archived"
    t.string "phone"
    t.string "description", comment: "Description of the parent"
    t.string "language", default: "en", comment: "Language of the parent, default is English"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_education_parents_on_discarded_at"
    t.index ["education_owner_id"], name: "index_education_parents_on_education_owner_id"
    t.index ["education_school_id"], name: "index_education_parents_on_education_school_id"
    t.index ["user_id"], name: "index_education_parents_on_user_id"
  end

  create_table "education_question_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_question_id", null: false
    t.string "appoint_to_type", null: false
    t.uuid "appoint_to_id", null: false
    t.decimal "score"
    t.integer "time"
    t.string "status"
    t.string "anwser"
    t.integer "result"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["appoint_to_type", "appoint_to_id"], name: "index_education_question_appointments_on_appoint_to"
    t.index ["education_question_id"], name: "index_education_question_appointments_on_education_question_id"
  end

  create_table "education_questions", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_owner_id", null: false
    t.uuid "education_school_id", null: false
    t.uuid "education_teacher_id"
    t.string "uid"
    t.integer "question_type"
    t.string "title"
    t.string "content"
    t.string "anwser"
    t.string "choice_1"
    t.string "choice_2"
    t.string "choice_3"
    t.string "choice_4"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_owner_id"], name: "index_education_questions_on_education_owner_id"
    t.index ["education_school_id"], name: "index_education_questions_on_education_school_id"
    t.index ["education_teacher_id"], name: "index_education_questions_on_education_teacher_id"
  end

  create_table "education_rooms", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_school_id", null: false
    t.string "uid"
    t.string "name", null: false
    t.string "description"
    t.string "status", default: "active", comment: "Status of the room, can be active, inactive, or archived"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_education_rooms_on_discarded_at"
    t.index ["education_school_id"], name: "index_education_rooms_on_education_school_id"
  end

  create_table "education_school_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_school_id", null: false
    t.string "appoint_to_type", null: false
    t.uuid "appoint_to_id", null: false
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["appoint_to_type", "appoint_to_id"], name: "index_education_school_appointments_on_appoint_to"
    t.index ["education_school_id"], name: "index_education_school_appointments_on_education_school_id"
  end

  create_table "education_schools", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_owner_id", null: false
    t.uuid "address_id"
    t.string "uid"
    t.string "name", null: false
    t.string "email", comment: "Email address of the school can be different from the user's email address"
    t.string "category"
    t.string "phone", comment: "Phone number of the school can be different from the user's phone number"
    t.string "description", comment: "Description of the school"
    t.string "status", default: "active", comment: "Status of the school, can be active, inactive, or archived"
    t.string "website", comment: "Website of the school"
    t.string "logo"
    t.string "banner"
    t.string "color", comment: "Color theme of the school"
    t.string "timezone", default: "UTC", comment: "Timezone of the school, default is UTC"
    t.string "language", default: "en", comment: "Language of the school, default is English"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address_id"], name: "index_education_schools_on_address_id"
    t.index ["discarded_at"], name: "index_education_schools_on_discarded_at"
    t.index ["education_owner_id"], name: "index_education_schools_on_education_owner_id"
  end

  create_table "education_staffs", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_owner_id", null: false
    t.uuid "user_id"
    t.uuid "education_school_id", null: false
    t.string "uid"
    t.string "name", null: false
    t.string "position"
    t.string "title"
    t.string "department"
    t.string "avatar"
    t.string "phone"
    t.string "status", default: "active", comment: "Status of the staff, can be active, inactive, or archived"
    t.string "description", comment: "Description of the staff"
    t.string "email", comment: "Student can be created without user at first time then will match with user by email"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_education_staffs_on_discarded_at"
    t.index ["education_owner_id"], name: "index_education_staffs_on_education_owner_id"
    t.index ["education_school_id"], name: "index_education_staffs_on_education_school_id"
    t.index ["user_id"], name: "index_education_staffs_on_user_id"
  end

  create_table "education_students", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_owner_id", null: false
    t.uuid "user_id"
    t.uuid "education_school_id", null: false
    t.uuid "education_parent_id"
    t.string "uid"
    t.string "name", null: false
    t.string "email", comment: "Student can be created without user at first time then will match with user by email"
    t.string "status", default: "active", comment: "Status of the student, can be active, inactive, or archived"
    t.string "phone"
    t.string "description", comment: "Description of the student"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_education_students_on_discarded_at"
    t.index ["education_owner_id"], name: "index_education_students_on_education_owner_id"
    t.index ["education_parent_id"], name: "index_education_students_on_education_parent_id"
    t.index ["education_school_id"], name: "index_education_students_on_education_school_id"
    t.index ["user_id"], name: "index_education_students_on_user_id"
  end

  create_table "education_subject_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_subject_id", null: false
    t.uuid "education_class_id", null: false
    t.uuid "education_teacher_id", null: false
    t.integer "status", comment: "0 = assigned, 1 = unassigned"
    t.datetime "discarded_at", comment: "Soft delete"
    t.string "uid", comment: "Unique Identifier"
    t.string "name", comment: "Name of the appointment"
    t.string "description", comment: "Description of the appointment"
    t.datetime "start_at", comment: "Start date and time of the appointment"
    t.datetime "end_at", comment: "End date and time of the appointment"
    t.datetime "appoint_at", comment: "Appointment date and time"
    t.datetime "cancel_at", comment: "Cancellation date and time"
    t.datetime "reschedule_at", comment: "Reschedule date and time"
    t.datetime "remind_at", comment: "Remind date and time"
    t.string "remind_type", comment: "Remind type, can be email, sms, push notification, etc."
    t.string "remind_to", comment: "Remind to, can be teacher, student, parent, etc."
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_education_subject_appointments_on_discarded_at"
    t.index ["education_class_id"], name: "index_education_subject_appointments_on_education_class_id"
    t.index ["education_subject_id"], name: "index_education_subject_appointments_on_education_subject_id"
    t.index ["education_teacher_id"], name: "index_education_subject_appointments_on_education_teacher_id"
  end

  create_table "education_subject_to_teachers", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_subject_id", null: false
    t.uuid "education_teacher_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_subject_id"], name: "index_education_subject_to_teachers_on_education_subject_id"
    t.index ["education_teacher_id"], name: "index_education_subject_to_teachers_on_education_teacher_id"
  end

  create_table "education_subjects", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_owner_id", null: false
    t.uuid "education_school_id", null: false
    t.string "uid"
    t.string "name", null: false
    t.string "description"
    t.string "status", default: "active", comment: "Status of the subject, can be active, inactive, or archived"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_owner_id"], name: "index_education_subjects_on_education_owner_id"
    t.index ["education_school_id"], name: "index_education_subjects_on_education_school_id"
  end

  create_table "education_teachers", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_owner_id", null: false
    t.uuid "user_id"
    t.uuid "education_school_id", null: false
    t.string "uid"
    t.string "name", null: false
    t.string "email", comment: "Teacher can be created without user at first time then will match with user by email"
    t.string "status", default: "active", comment: "Status of the teacher, can be active, inactive, or archived"
    t.string "phone"
    t.string "description", comment: "Description of the teacher"
    t.string "language", default: "en", comment: "Language of the teacher, default is English"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_education_teachers_on_discarded_at"
    t.index ["education_owner_id"], name: "index_education_teachers_on_education_owner_id"
    t.index ["education_school_id"], name: "index_education_teachers_on_education_school_id"
    t.index ["user_id"], name: "index_education_teachers_on_user_id"
  end

  create_table "payment_categories", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.string "uid"
    t.string "color"
    t.uuid "payment_owner_id", null: false
    t.uuid "parent_category_id"
    t.integer "nested_level", default: 0
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["parent_category_id"], name: "index_payment_categories_on_parent_category_id"
    t.index ["payment_owner_id"], name: "index_payment_categories_on_payment_owner_id"
  end

  create_table "payment_category_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "payment_category_id", null: false
    t.string "appoint_to_type", null: false
    t.uuid "appoint_to_id", null: false
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["appoint_to_type", "appoint_to_id"], name: "index_payment_category_appointments_on_appoint_to"
    t.index ["payment_category_id"], name: "index_payment_category_appointments_on_payment_category_id"
  end

  create_table "payment_customers", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "payment_customerable_type", null: false
    t.uuid "payment_customerable_id", null: false
    t.string "uid"
    t.string "name"
    t.string "email"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_customerable_type", "payment_customerable_id"], name: "index_payment_customers_on_payment_customerable"
  end

  create_table "payment_discounts", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "payment_owner_id", null: false
    t.string "uid"
    t.string "name"
    t.string "description"
    t.string "code"
    t.datetime "expire"
    t.decimal "amount"
    t.integer "status"
    t.integer "kind"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_owner_id"], name: "index_payment_discounts_on_payment_owner_id"
  end

  create_table "payment_invoices", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "payment_order_id", null: false
    t.string "uid"
    t.string "transaction_id"
    t.integer "status"
    t.decimal "amount"
    t.string "tax_code"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_order_id"], name: "index_payment_invoices_on_payment_order_id"
  end

  create_table "payment_item_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "payment_item_id", null: false
    t.uuid "payment_order_id"
    t.integer "item_quantity"
    t.decimal "unit_price"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_item_id"], name: "index_payment_item_appointments_on_payment_item_id"
    t.index ["payment_order_id"], name: "index_payment_item_appointments_on_payment_order_id"
  end

  create_table "payment_items", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "payment_owner_id", null: false
    t.string "payment_itemable_type", null: false
    t.uuid "payment_itemable_id", null: false
    t.string "uid"
    t.decimal "price"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_itemable_type", "payment_itemable_id"], name: "index_payment_items_on_payment_itemable"
    t.index ["payment_owner_id"], name: "index_payment_items_on_payment_owner_id"
  end

  create_table "payment_logs", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "payment_owner_id", null: false
    t.uuid "payment_customer_id", null: false
    t.uuid "payment_order_id", null: false
    t.uuid "payment_method_id", null: false
    t.uuid "payment_discount_id", null: false
    t.uuid "payment_invoice_id", null: false
    t.string "action"
    t.decimal "amount"
    t.string "note"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_customer_id"], name: "index_payment_logs_on_payment_customer_id"
    t.index ["payment_discount_id"], name: "index_payment_logs_on_payment_discount_id"
    t.index ["payment_invoice_id"], name: "index_payment_logs_on_payment_invoice_id"
    t.index ["payment_method_id"], name: "index_payment_logs_on_payment_method_id"
    t.index ["payment_order_id"], name: "index_payment_logs_on_payment_order_id"
    t.index ["payment_owner_id"], name: "index_payment_logs_on_payment_owner_id"
  end

  create_table "payment_method_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "payment_owner_id"
    t.uuid "payment_method_id", null: false
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_method_id"], name: "index_payment_method_appointments_on_payment_method_id"
    t.index ["payment_owner_id"], name: "index_payment_method_appointments_on_payment_owner_id"
  end

  create_table "payment_methods", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.string "uid"
    t.string "description"
    t.integer "region"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "payment_orders", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "payment_owner_id", null: false
    t.uuid "payment_customer_id", null: false
    t.uuid "payment_method_id", null: false
    t.uuid "payment_discount_id", null: false
    t.string "uid"
    t.integer "status"
    t.decimal "amount"
    t.decimal "paid"
    t.decimal "due"
    t.datetime "expire"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_customer_id"], name: "index_payment_orders_on_payment_customer_id"
    t.index ["payment_discount_id"], name: "index_payment_orders_on_payment_discount_id"
    t.index ["payment_method_id"], name: "index_payment_orders_on_payment_method_id"
    t.index ["payment_owner_id"], name: "index_payment_orders_on_payment_owner_id"
  end

  create_table "payment_owners", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "payment_ownerable_type", null: false
    t.uuid "payment_ownerable_id", null: false
    t.string "uid"
    t.datetime "discarded_at"
    t.string "status", default: "active", null: false, comment: "Status of the payment owner, can be active, inactive, or archived"
    t.string "name", null: false, comment: "Name of the payment owner"
    t.string "description", null: false, comment: "Description of the payment owner"
    t.string "language", default: "en", null: false, comment: "Language of the payment owner, default is English"
    t.string "email", comment: "Email of the payment owner, can be null if not provided"
    t.string "phone", comment: "Phone number of the payment owner, can be null if not provided"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_payment_owners_on_discarded_at"
    t.index ["payment_ownerable_type", "payment_ownerable_id"], name: "index_payment_owners_on_payment_ownerable"
  end

  create_table "project_categories", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "project_owner_id", null: false
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_owner_id"], name: "index_project_categories_on_project_owner_id"
  end

  create_table "project_category_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "project_category_id", null: false
    t.string "appoint_to_type", null: false
    t.uuid "appoint_to_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["appoint_to_type", "appoint_to_id"], name: "index_project_category_appointments_on_appoint_to"
    t.index ["project_category_id"], name: "index_project_category_appointments_on_project_category_id"
  end

  create_table "project_groups", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "project_owner_id", null: false
    t.string "name"
    t.string "description"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_owner_id"], name: "index_project_groups_on_project_owner_id"
  end

  create_table "project_members", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "project_owner_id", null: false
    t.string "project_membersable_type", null: false
    t.uuid "project_membersable_id", null: false
    t.string "name"
    t.string "description"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_membersable_type", "project_membersable_id"], name: "index_project_members_on_project_membersable"
    t.index ["project_owner_id"], name: "index_project_members_on_project_owner_id"
  end

  create_table "project_owners", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "project_ownerable_type", null: false
    t.uuid "project_ownerable_id", null: false
    t.string "name"
    t.string "description"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_ownerable_type", "project_ownerable_id"], name: "index_project_owners_on_project_ownerable"
  end

  create_table "project_subtask_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "project_subtask_id", null: false
    t.string "appoint_to_type", null: false
    t.uuid "appoint_to_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["appoint_to_type", "appoint_to_id"], name: "index_project_subtask_appointments_on_appoint_to"
    t.index ["project_subtask_id"], name: "index_project_subtask_appointments_on_project_subtask_id"
  end

  create_table "project_subtasks", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "project_owner_id", null: false
    t.uuid "project_task_id", null: false
    t.string "name"
    t.string "description"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_owner_id"], name: "index_project_subtasks_on_project_owner_id"
    t.index ["project_task_id"], name: "index_project_subtasks_on_project_task_id"
  end

  create_table "project_task_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "project_task_id", null: false
    t.string "appoint_to_type", null: false
    t.uuid "appoint_to_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["appoint_to_type", "appoint_to_id"], name: "index_project_task_appointments_on_appoint_to"
    t.index ["project_task_id"], name: "index_project_task_appointments_on_project_task_id"
  end

  create_table "project_tasks", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "project_owner_id", null: false
    t.uuid "project_group_id", null: false
    t.string "name"
    t.string "description"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_group_id"], name: "index_project_tasks_on_project_group_id"
    t.index ["project_owner_id"], name: "index_project_tasks_on_project_owner_id"
  end

  create_table "report_categories", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "report_owner_id"
    t.uuid "parent_category_id"
    t.string "name"
    t.string "color"
    t.integer "nested_level"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["parent_category_id"], name: "index_report_categories_on_parent_category_id"
    t.index ["report_owner_id"], name: "index_report_categories_on_report_owner_id"
  end

  create_table "report_category_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "report_category_id", null: false
    t.string "appoint_to_type", null: false
    t.uuid "appoint_to_id", null: false
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["appoint_to_type", "appoint_to_id"], name: "index_report_category_appointments_on_appoint_to"
    t.index ["report_category_id"], name: "index_report_category_appointments_on_report_category_id"
  end

  create_table "report_frontends", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "report_owner_id"
    t.string "content"
    t.string "url"
    t.json "cookie"
    t.integer "status"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["report_owner_id"], name: "index_report_frontends_on_report_owner_id"
  end

  create_table "report_owners", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "report_ownerable_type", null: false
    t.uuid "report_ownerable_id", null: false
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["report_ownerable_type", "report_ownerable_id"], name: "index_report_owners_on_report_ownerable"
  end

  create_table "report_reporters", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "report_owner_id"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["report_owner_id"], name: "index_report_reporters_on_report_owner_id"
  end

  create_table "report_tickets", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "report_owner_id"
    t.string "title"
    t.string "content"
    t.integer "status"
    t.string "email"
    t.string "phone"
    t.string "nation"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["report_owner_id"], name: "index_report_tickets_on_report_owner_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.uuid "user_id", null: false
    t.string "user_agent"
    t.string "ip_address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_sessions_on_user_id"
  end

  create_table "users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "username"
    t.string "uid"
    t.string "email"
    t.string "password_digest", null: false
    t.string "name"
    t.string "first_name"
    t.string "last_name"
    t.string "avatar"
    t.string "phone_number"
    t.string "country_code"
    t.integer "role"
    t.integer "education_role"
    t.boolean "verified", default: false, null: false
    t.uuid "address_id"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address_id"], name: "index_users_on_address_id"
    t.index ["discarded_at"], name: "index_users_on_discarded_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "calendar_categories", "calendar_categories", column: "parent_category_id"
  add_foreign_key "calendar_category_appointments", "calendar_categories"
  add_foreign_key "categories", "categories", column: "parent_category_id"
  add_foreign_key "category_appointments", "categories"
  add_foreign_key "education_admins", "education_owners"
  add_foreign_key "education_admins", "education_schools"
  add_foreign_key "education_admins", "users"
  add_foreign_key "education_categories", "education_categories", column: "parent_category_id"
  add_foreign_key "education_categories", "education_owners"
  add_foreign_key "education_category_appointments", "education_categories"
  add_foreign_key "education_class_appointments", "education_classes"
  add_foreign_key "education_classes", "education_courses"
  add_foreign_key "education_classes", "education_schools"
  add_foreign_key "education_courses", "education_schools"
  add_foreign_key "education_exam_to_classes", "education_classes"
  add_foreign_key "education_exam_to_classes", "education_exams"
  add_foreign_key "education_exam_to_classes", "education_subjects"
  add_foreign_key "education_exam_to_students", "education_exam_to_classes"
  add_foreign_key "education_exam_to_students", "education_exams"
  add_foreign_key "education_exam_to_students", "education_students"
  add_foreign_key "education_exams", "education_owners"
  add_foreign_key "education_exams", "education_schools"
  add_foreign_key "education_exams", "education_subjects"
  add_foreign_key "education_lessons", "education_classes"
  add_foreign_key "education_lessons", "education_owners"
  add_foreign_key "education_lessons", "education_schools"
  add_foreign_key "education_lessons", "education_subjects"
  add_foreign_key "education_lessons", "education_teachers"
  add_foreign_key "education_owners", "users"
  add_foreign_key "education_parents", "education_owners"
  add_foreign_key "education_parents", "education_schools"
  add_foreign_key "education_parents", "users"
  add_foreign_key "education_question_appointments", "education_questions"
  add_foreign_key "education_questions", "education_owners"
  add_foreign_key "education_questions", "education_schools"
  add_foreign_key "education_questions", "education_teachers"
  add_foreign_key "education_rooms", "education_schools"
  add_foreign_key "education_school_appointments", "education_schools"
  add_foreign_key "education_schools", "addresses"
  add_foreign_key "education_schools", "education_owners"
  add_foreign_key "education_staffs", "education_owners"
  add_foreign_key "education_staffs", "education_schools"
  add_foreign_key "education_staffs", "users"
  add_foreign_key "education_students", "education_owners"
  add_foreign_key "education_students", "education_parents"
  add_foreign_key "education_students", "education_schools"
  add_foreign_key "education_students", "users"
  add_foreign_key "education_subject_appointments", "education_classes"
  add_foreign_key "education_subject_appointments", "education_subjects"
  add_foreign_key "education_subject_appointments", "education_teachers"
  add_foreign_key "education_subject_to_teachers", "education_subjects"
  add_foreign_key "education_subject_to_teachers", "education_teachers"
  add_foreign_key "education_subjects", "education_owners"
  add_foreign_key "education_subjects", "education_schools"
  add_foreign_key "education_teachers", "education_owners"
  add_foreign_key "education_teachers", "education_schools"
  add_foreign_key "education_teachers", "users"
  add_foreign_key "payment_categories", "payment_categories", column: "parent_category_id"
  add_foreign_key "payment_categories", "payment_owners"
  add_foreign_key "payment_category_appointments", "payment_categories"
  add_foreign_key "payment_discounts", "payment_owners"
  add_foreign_key "payment_invoices", "payment_orders"
  add_foreign_key "payment_item_appointments", "payment_items"
  add_foreign_key "payment_item_appointments", "payment_orders"
  add_foreign_key "payment_items", "payment_owners"
  add_foreign_key "payment_logs", "payment_customers"
  add_foreign_key "payment_logs", "payment_discounts"
  add_foreign_key "payment_logs", "payment_invoices"
  add_foreign_key "payment_logs", "payment_methods"
  add_foreign_key "payment_logs", "payment_orders"
  add_foreign_key "payment_logs", "payment_owners"
  add_foreign_key "payment_method_appointments", "payment_methods"
  add_foreign_key "payment_method_appointments", "payment_owners"
  add_foreign_key "payment_orders", "payment_customers"
  add_foreign_key "payment_orders", "payment_discounts"
  add_foreign_key "payment_orders", "payment_methods"
  add_foreign_key "payment_orders", "payment_owners"
  add_foreign_key "project_categories", "project_owners"
  add_foreign_key "project_category_appointments", "project_categories"
  add_foreign_key "project_groups", "project_owners"
  add_foreign_key "project_members", "project_owners"
  add_foreign_key "project_subtask_appointments", "project_subtasks"
  add_foreign_key "project_subtasks", "project_owners"
  add_foreign_key "project_subtasks", "project_tasks"
  add_foreign_key "project_task_appointments", "project_tasks"
  add_foreign_key "project_tasks", "project_groups"
  add_foreign_key "project_tasks", "project_owners"
  add_foreign_key "report_categories", "report_categories", column: "parent_category_id"
  add_foreign_key "report_categories", "report_owners"
  add_foreign_key "report_category_appointments", "report_categories"
  add_foreign_key "report_frontends", "report_owners"
  add_foreign_key "report_reporters", "report_owners"
  add_foreign_key "report_tickets", "report_owners"
  add_foreign_key "sessions", "users"
  add_foreign_key "users", "addresses"
end
