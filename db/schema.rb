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

ActiveRecord::Schema[8.0].define(version: 2024_12_31_221918) do
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
    t.uuid "calendar_user_id", null: false
    t.uuid "parent_category_id"
    t.integer "nested_level", default: 0
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["calendar_user_id"], name: "index_calendar_categories_on_calendar_user_id"
    t.index ["parent_category_id"], name: "index_calendar_categories_on_parent_category_id"
  end

  create_table "calendar_category_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "calendar_category_id", null: false
    t.uuid "calendar_group_id"
    t.uuid "calendar_event_id"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["calendar_category_id"], name: "index_calendar_category_appointments_on_calendar_category_id"
    t.index ["calendar_event_id"], name: "index_calendar_category_appointments_on_calendar_event_id"
    t.index ["calendar_group_id"], name: "index_calendar_category_appointments_on_calendar_group_id"
  end

  create_table "calendar_event_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "calendar_group_id"
    t.uuid "calendar_event_id", null: false
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["calendar_event_id"], name: "index_calendar_event_appointments_on_calendar_event_id"
    t.index ["calendar_group_id"], name: "index_calendar_event_appointments_on_calendar_group_id"
  end

  create_table "calendar_events", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "calendar_user_id", null: false
    t.string "calendar_eventable_type", null: false
    t.uuid "calendar_eventable_id", null: false
    t.integer "library"
    t.string "title"
    t.string "body"
    t.boolean "isAllday"
    t.datetime "start"
    t.datetime "end"
    t.integer "goingDuration"
    t.integer "comingDuration"
    t.string "location"
    t.text "attendees", default: [], array: true
    t.integer "category"
    t.integer "dueDateClass"
    t.string "recurrenceRule"
    t.integer "state"
    t.boolean "isVisible", default: true
    t.boolean "isPending", default: false
    t.boolean "isFocused", default: false
    t.boolean "isReadOnly", default: false
    t.boolean "isPrivate", default: false
    t.string "color", default: "#000"
    t.string "backgroundColor", default: "#a1b56c"
    t.string "dragBackgroundColor", default: "#a1b56c"
    t.string "borderColor", default: "#000"
    t.json "customStyle", default: {}
    t.json "raw", default: {}
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["calendar_eventable_type", "calendar_eventable_id"], name: "index_calendar_events_on_calendar_eventable"
    t.index ["calendar_user_id"], name: "index_calendar_events_on_calendar_user_id"
  end

  create_table "calendar_groups", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "calendar_user_id", null: false
    t.string "calendar_groupable_type", null: false
    t.uuid "calendar_groupable_id", null: false
    t.string "name"
    t.string "color"
    t.string "borderColor"
    t.string "backgroundColor"
    t.string "dragBackgroundColor"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["calendar_groupable_type", "calendar_groupable_id"], name: "index_calendar_groups_on_calendar_groupable"
    t.index ["calendar_user_id"], name: "index_calendar_groups_on_calendar_user_id"
  end

  create_table "calendar_users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "calendar_userable_type", null: false
    t.uuid "calendar_userable_id", null: false
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["calendar_userable_type", "calendar_userable_id"], name: "index_calendar_users_on_calendar_userable"
  end

  create_table "categories", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.uuid "parent_category_id"
    t.integer "nested_level", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["parent_category_id"], name: "index_categories_on_parent_category_id"
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
    t.uuid "user_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_education_admins_on_user_id"
  end

  create_table "education_categories", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.uuid "education_school_id", null: false
    t.uuid "parent_category_id"
    t.integer "nested_level", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_school_id"], name: "index_education_categories_on_education_school_id"
    t.index ["parent_category_id"], name: "index_education_categories_on_parent_category_id"
  end

  create_table "education_category_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_category_id", null: false
    t.uuid "education_class_id"
    t.uuid "education_room_id"
    t.uuid "education_teacher_id"
    t.uuid "education_student_id"
    t.uuid "education_subject_id"
    t.uuid "education_course_id"
    t.uuid "education_exam_id"
    t.uuid "education_question_id"
    t.uuid "education_lesson_id"
    t.uuid "education_shift_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_category_id"], name: "index_education_category_appointments_on_education_category_id"
    t.index ["education_class_id"], name: "index_education_category_appointments_on_education_class_id"
    t.index ["education_course_id"], name: "index_education_category_appointments_on_education_course_id"
    t.index ["education_exam_id"], name: "index_education_category_appointments_on_education_exam_id"
    t.index ["education_lesson_id"], name: "index_education_category_appointments_on_education_lesson_id"
    t.index ["education_question_id"], name: "index_education_category_appointments_on_education_question_id"
    t.index ["education_room_id"], name: "index_education_category_appointments_on_education_room_id"
    t.index ["education_shift_id"], name: "index_education_category_appointments_on_education_shift_id"
    t.index ["education_student_id"], name: "index_education_category_appointments_on_education_student_id"
    t.index ["education_subject_id"], name: "index_education_category_appointments_on_education_subject_id"
    t.index ["education_teacher_id"], name: "index_education_category_appointments_on_education_teacher_id"
  end

  create_table "education_class_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_class_id", null: false
    t.uuid "education_teacher_id"
    t.uuid "education_student_id"
    t.uuid "education_subject_id"
    t.uuid "education_room_id"
    t.uuid "education_course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_class_id"], name: "index_education_class_appointments_on_education_class_id"
    t.index ["education_course_id"], name: "index_education_class_appointments_on_education_course_id"
    t.index ["education_room_id"], name: "index_education_class_appointments_on_education_room_id"
    t.index ["education_student_id"], name: "index_education_class_appointments_on_education_student_id"
    t.index ["education_subject_id"], name: "index_education_class_appointments_on_education_subject_id"
    t.index ["education_teacher_id"], name: "index_education_class_appointments_on_education_teacher_id"
  end

  create_table "education_classes", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_school_id", null: false
    t.string "name"
    t.string "category"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_education_classes_on_discarded_at"
    t.index ["education_school_id"], name: "index_education_classes_on_education_school_id"
  end

  create_table "education_courses", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.uuid "education_school_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_school_id"], name: "index_education_courses_on_education_school_id"
  end

  create_table "education_exams", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.decimal "score"
    t.integer "status"
    t.uuid "education_school_id", null: false
    t.uuid "education_teacher_id", null: false
    t.uuid "education_subject_id", null: false
    t.uuid "education_student_id", null: false
    t.uuid "education_course_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_course_id"], name: "index_education_exams_on_education_course_id"
    t.index ["education_school_id"], name: "index_education_exams_on_education_school_id"
    t.index ["education_student_id"], name: "index_education_exams_on_education_student_id"
    t.index ["education_subject_id"], name: "index_education_exams_on_education_subject_id"
    t.index ["education_teacher_id"], name: "index_education_exams_on_education_teacher_id"
  end

  create_table "education_lessons", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.uuid "education_school_id", null: false
    t.uuid "education_class_id"
    t.uuid "education_subject_id"
    t.uuid "education_teacher_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_class_id"], name: "index_education_lessons_on_education_class_id"
    t.index ["education_school_id"], name: "index_education_lessons_on_education_school_id"
    t.index ["education_subject_id"], name: "index_education_lessons_on_education_subject_id"
    t.index ["education_teacher_id"], name: "index_education_lessons_on_education_teacher_id"
  end

  create_table "education_question_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_question_id", null: false
    t.uuid "education_exam_id"
    t.decimal "score"
    t.integer "time"
    t.string "status"
    t.string "anwser"
    t.integer "result"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_exam_id"], name: "index_education_question_appointments_on_education_exam_id"
    t.index ["education_question_id"], name: "index_education_question_appointments_on_education_question_id"
  end

  create_table "education_questions", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_school_id", null: false
    t.uuid "education_teacher_id", null: false
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
    t.index ["education_school_id"], name: "index_education_questions_on_education_school_id"
    t.index ["education_teacher_id"], name: "index_education_questions_on_education_teacher_id"
  end

  create_table "education_rooms", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_school_id", null: false
    t.string "name"
    t.string "category"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_education_rooms_on_discarded_at"
    t.index ["education_school_id"], name: "index_education_rooms_on_education_school_id"
  end

  create_table "education_school_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_school_id", null: false
    t.uuid "education_admin_id"
    t.uuid "education_teacher_id"
    t.uuid "education_student_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_admin_id"], name: "index_education_school_appointments_on_education_admin_id"
    t.index ["education_school_id"], name: "index_education_school_appointments_on_education_school_id"
    t.index ["education_student_id"], name: "index_education_school_appointments_on_education_student_id"
    t.index ["education_teacher_id"], name: "index_education_school_appointments_on_education_teacher_id"
  end

  create_table "education_schools", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.uuid "address_id"
    t.string "name"
    t.string "category"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address_id"], name: "index_education_schools_on_address_id"
    t.index ["discarded_at"], name: "index_education_schools_on_discarded_at"
    t.index ["user_id"], name: "index_education_schools_on_user_id"
  end

  create_table "education_shifts", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_school_id", null: false
    t.uuid "education_class_id", null: false
    t.uuid "education_subject_id", null: false
    t.uuid "education_teacher_id", null: false
    t.string "lib"
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
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_class_id"], name: "index_education_shifts_on_education_class_id"
    t.index ["education_school_id"], name: "index_education_shifts_on_education_school_id"
    t.index ["education_subject_id"], name: "index_education_shifts_on_education_subject_id"
    t.index ["education_teacher_id"], name: "index_education_shifts_on_education_teacher_id"
  end

  create_table "education_students", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.string "name"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_education_students_on_discarded_at"
    t.index ["user_id"], name: "index_education_students_on_user_id"
  end

  create_table "education_subject_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_subject_id", null: false
    t.uuid "education_teacher_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_subject_id"], name: "index_education_subject_appointments_on_education_subject_id"
    t.index ["education_teacher_id"], name: "index_education_subject_appointments_on_education_teacher_id"
  end

  create_table "education_subjects", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.uuid "education_school_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_school_id"], name: "index_education_subjects_on_education_school_id"
  end

  create_table "education_teachers", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.string "name"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_education_teachers_on_discarded_at"
    t.index ["user_id"], name: "index_education_teachers_on_user_id"
  end

  create_table "estate_condos", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.uuid "address_id"
    t.string "name"
    t.integer "price_cents"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address_id"], name: "index_estate_condos_on_address_id"
    t.index ["discarded_at"], name: "index_estate_condos_on_discarded_at"
    t.index ["user_id"], name: "index_estate_condos_on_user_id"
  end

  create_table "estate_hotels", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.uuid "address_id"
    t.string "name"
    t.integer "price_cents"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address_id"], name: "index_estate_hotels_on_address_id"
    t.index ["discarded_at"], name: "index_estate_hotels_on_discarded_at"
    t.index ["user_id"], name: "index_estate_hotels_on_user_id"
  end

  create_table "estate_houses", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.uuid "address_id"
    t.string "name"
    t.integer "price_cents"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address_id"], name: "index_estate_houses_on_address_id"
    t.index ["discarded_at"], name: "index_estate_houses_on_discarded_at"
    t.index ["user_id"], name: "index_estate_houses_on_user_id"
  end

  create_table "payment_categories", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.uuid "payment_user_id", null: false
    t.uuid "parent_category_id"
    t.integer "nested_level", default: 0
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["parent_category_id"], name: "index_payment_categories_on_parent_category_id"
    t.index ["payment_user_id"], name: "index_payment_categories_on_payment_user_id"
  end

  create_table "payment_category_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "payment_category_id", null: false
    t.uuid "payment_customer_id"
    t.uuid "payment_method_id"
    t.uuid "payment_discount_id"
    t.uuid "payment_item_id"
    t.uuid "payment_order_id"
    t.uuid "payment_invoice_id"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_category_id"], name: "index_payment_category_appointments_on_payment_category_id"
    t.index ["payment_customer_id"], name: "index_payment_category_appointments_on_payment_customer_id"
    t.index ["payment_discount_id"], name: "index_payment_category_appointments_on_payment_discount_id"
    t.index ["payment_invoice_id"], name: "index_payment_category_appointments_on_payment_invoice_id"
    t.index ["payment_item_id"], name: "index_payment_category_appointments_on_payment_item_id"
    t.index ["payment_method_id"], name: "index_payment_category_appointments_on_payment_method_id"
    t.index ["payment_order_id"], name: "index_payment_category_appointments_on_payment_order_id"
  end

  create_table "payment_customers", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "payment_customerable_type", null: false
    t.uuid "payment_customerable_id", null: false
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_customerable_type", "payment_customerable_id"], name: "index_payment_customers_on_payment_customerable"
  end

  create_table "payment_discounts", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "payment_user_id", null: false
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
    t.index ["payment_user_id"], name: "index_payment_discounts_on_payment_user_id"
  end

  create_table "payment_invoices", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "payment_order_id", null: false
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
    t.uuid "payment_user_id", null: false
    t.string "payment_itemable_type", null: false
    t.uuid "payment_itemable_id", null: false
    t.decimal "price"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_itemable_type", "payment_itemable_id"], name: "index_payment_items_on_payment_itemable"
    t.index ["payment_user_id"], name: "index_payment_items_on_payment_user_id"
  end

  create_table "payment_logs", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "payment_user_id", null: false
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
    t.index ["payment_user_id"], name: "index_payment_logs_on_payment_user_id"
  end

  create_table "payment_method_appointments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "payment_user_id"
    t.uuid "payment_method_id", null: false
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_method_id"], name: "index_payment_method_appointments_on_payment_method_id"
    t.index ["payment_user_id"], name: "index_payment_method_appointments_on_payment_user_id"
  end

  create_table "payment_methods", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "region"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "payment_orders", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "payment_user_id", null: false
    t.uuid "payment_customer_id", null: false
    t.uuid "payment_method_id", null: false
    t.uuid "payment_discount_id", null: false
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
    t.index ["payment_user_id"], name: "index_payment_orders_on_payment_user_id"
  end

  create_table "payment_users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "payment_userable_type", null: false
    t.uuid "payment_userable_id", null: false
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["payment_userable_type", "payment_userable_id"], name: "index_payment_users_on_payment_userable"
  end

  create_table "report_frontends", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id"
    t.string "content"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_report_frontends_on_discarded_at"
    t.index ["user_id"], name: "index_report_frontends_on_user_id"
  end

  create_table "report_tickets", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.integer "category"
    t.integer "status"
    t.string "reporter_email"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_report_tickets_on_discarded_at"
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
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "name"
    t.string "avatar"
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
  end

  create_table "vehicle_cars", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.string "model"
    t.string "brand"
    t.uuid "vehicle_store_id"
    t.uuid "user_id"
    t.integer "price"
    t.string "version"
    t.integer "year"
    t.integer "post_purpose"
    t.decimal "coordinates", default: ["0.0", "0.0"], array: true
    t.datetime "released_at"
    t.boolean "verified"
    t.boolean "expired"
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_vehicle_cars_on_discarded_at"
    t.index ["user_id"], name: "index_vehicle_cars_on_user_id"
    t.index ["vehicle_store_id"], name: "index_vehicle_cars_on_vehicle_store_id"
  end

  create_table "vehicle_stores", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.uuid "user_id", null: false
    t.decimal "coordinates", default: ["0.0", "0.0"], array: true
    t.datetime "discarded_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discarded_at"], name: "index_vehicle_stores_on_discarded_at"
    t.index ["user_id"], name: "index_vehicle_stores_on_user_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "calendar_categories", "calendar_categories", column: "parent_category_id"
  add_foreign_key "calendar_categories", "calendar_users"
  add_foreign_key "calendar_category_appointments", "calendar_categories"
  add_foreign_key "calendar_category_appointments", "calendar_events"
  add_foreign_key "calendar_category_appointments", "calendar_groups"
  add_foreign_key "calendar_event_appointments", "calendar_events"
  add_foreign_key "calendar_event_appointments", "calendar_groups"
  add_foreign_key "calendar_events", "calendar_users"
  add_foreign_key "calendar_groups", "calendar_users"
  add_foreign_key "categories", "categories", column: "parent_category_id"
  add_foreign_key "education_admins", "users"
  add_foreign_key "education_categories", "education_categories", column: "parent_category_id"
  add_foreign_key "education_categories", "education_schools"
  add_foreign_key "education_category_appointments", "education_categories"
  add_foreign_key "education_category_appointments", "education_classes"
  add_foreign_key "education_category_appointments", "education_courses"
  add_foreign_key "education_category_appointments", "education_exams"
  add_foreign_key "education_category_appointments", "education_lessons"
  add_foreign_key "education_category_appointments", "education_questions"
  add_foreign_key "education_category_appointments", "education_rooms"
  add_foreign_key "education_category_appointments", "education_shifts"
  add_foreign_key "education_category_appointments", "education_students"
  add_foreign_key "education_category_appointments", "education_subjects"
  add_foreign_key "education_category_appointments", "education_teachers"
  add_foreign_key "education_class_appointments", "education_classes"
  add_foreign_key "education_class_appointments", "education_courses"
  add_foreign_key "education_class_appointments", "education_rooms"
  add_foreign_key "education_class_appointments", "education_students"
  add_foreign_key "education_class_appointments", "education_subjects"
  add_foreign_key "education_class_appointments", "education_teachers"
  add_foreign_key "education_classes", "education_schools"
  add_foreign_key "education_courses", "education_schools"
  add_foreign_key "education_exams", "education_courses"
  add_foreign_key "education_exams", "education_schools"
  add_foreign_key "education_exams", "education_students"
  add_foreign_key "education_exams", "education_subjects"
  add_foreign_key "education_exams", "education_teachers"
  add_foreign_key "education_lessons", "education_classes"
  add_foreign_key "education_lessons", "education_schools"
  add_foreign_key "education_lessons", "education_subjects"
  add_foreign_key "education_lessons", "education_teachers"
  add_foreign_key "education_question_appointments", "education_exams"
  add_foreign_key "education_question_appointments", "education_questions"
  add_foreign_key "education_questions", "education_schools"
  add_foreign_key "education_questions", "education_teachers"
  add_foreign_key "education_rooms", "education_schools"
  add_foreign_key "education_school_appointments", "education_admins"
  add_foreign_key "education_school_appointments", "education_schools"
  add_foreign_key "education_school_appointments", "education_students"
  add_foreign_key "education_school_appointments", "education_teachers"
  add_foreign_key "education_schools", "addresses"
  add_foreign_key "education_schools", "users"
  add_foreign_key "education_shifts", "education_classes"
  add_foreign_key "education_shifts", "education_schools"
  add_foreign_key "education_shifts", "education_subjects"
  add_foreign_key "education_shifts", "education_teachers"
  add_foreign_key "education_students", "users"
  add_foreign_key "education_subject_appointments", "education_subjects"
  add_foreign_key "education_subject_appointments", "education_teachers"
  add_foreign_key "education_subjects", "education_schools"
  add_foreign_key "education_teachers", "users"
  add_foreign_key "estate_condos", "addresses"
  add_foreign_key "estate_condos", "users"
  add_foreign_key "estate_hotels", "addresses"
  add_foreign_key "estate_hotels", "users"
  add_foreign_key "estate_houses", "addresses"
  add_foreign_key "estate_houses", "users"
  add_foreign_key "payment_categories", "payment_categories", column: "parent_category_id"
  add_foreign_key "payment_categories", "payment_users"
  add_foreign_key "payment_category_appointments", "payment_categories"
  add_foreign_key "payment_category_appointments", "payment_customers"
  add_foreign_key "payment_category_appointments", "payment_discounts"
  add_foreign_key "payment_category_appointments", "payment_invoices"
  add_foreign_key "payment_category_appointments", "payment_items"
  add_foreign_key "payment_category_appointments", "payment_methods"
  add_foreign_key "payment_category_appointments", "payment_orders"
  add_foreign_key "payment_discounts", "payment_users"
  add_foreign_key "payment_invoices", "payment_orders"
  add_foreign_key "payment_item_appointments", "payment_items"
  add_foreign_key "payment_item_appointments", "payment_orders"
  add_foreign_key "payment_items", "payment_users"
  add_foreign_key "payment_logs", "payment_customers"
  add_foreign_key "payment_logs", "payment_discounts"
  add_foreign_key "payment_logs", "payment_invoices"
  add_foreign_key "payment_logs", "payment_methods"
  add_foreign_key "payment_logs", "payment_orders"
  add_foreign_key "payment_logs", "payment_users"
  add_foreign_key "payment_method_appointments", "payment_methods"
  add_foreign_key "payment_method_appointments", "payment_users"
  add_foreign_key "payment_orders", "payment_customers"
  add_foreign_key "payment_orders", "payment_discounts"
  add_foreign_key "payment_orders", "payment_methods"
  add_foreign_key "payment_orders", "payment_users"
  add_foreign_key "report_frontends", "users"
  add_foreign_key "sessions", "users"
  add_foreign_key "users", "addresses"
  add_foreign_key "vehicle_cars", "users"
  add_foreign_key "vehicle_cars", "vehicle_stores"
  add_foreign_key "vehicle_stores", "users"
end
