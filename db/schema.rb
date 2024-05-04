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

ActiveRecord::Schema[7.1].define(version: 2024_05_04_022313) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

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

  create_table "agriculture_farmers", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "agriculture_user_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["agriculture_user_id"], name: "index_agriculture_farmers_on_agriculture_user_id"
  end

  create_table "agriculture_farms", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "agriculture_farmer_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["agriculture_farmer_id"], name: "index_agriculture_farms_on_agriculture_farmer_id"
  end

  create_table "agriculture_merchants", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "agriculture_user_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["agriculture_user_id"], name: "index_agriculture_merchants_on_agriculture_user_id"
  end

  create_table "agriculture_users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_agriculture_users_on_user_id"
  end

  create_table "calendar_events", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "calendar_schedule_id", null: false
    t.integer "lib"
    t.string "title"
    t.string "body"
    t.boolean "is_allday"
    t.datetime "start"
    t.datetime "end"
    t.integer "going_duration"
    t.integer "coming_duration"
    t.string "location"
    t.text "attendees", default: [], array: true
    t.integer "category"
    t.string "recurrence_rule"
    t.integer "state"
    t.boolean "is_visible", default: true
    t.boolean "is_pending", default: false
    t.boolean "is_focused", default: false
    t.boolean "is_readOnly", default: false
    t.boolean "is_private", default: false
    t.string "color", default: "#000"
    t.string "background_color", default: "#a1b56c"
    t.string "drag_background_color", default: "#a1b56c"
    t.string "border_color", default: "#000"
    t.json "custom_style", default: {}
    t.json "raw"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["calendar_schedule_id"], name: "index_calendar_events_on_calendar_schedule_id"
  end

  create_table "calendar_schedules", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "calendar_user_id", null: false
    t.string "name"
    t.string "color"
    t.string "background_color"
    t.string "drag_background_color"
    t.string "border_color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["calendar_user_id"], name: "index_calendar_schedules_on_calendar_user_id"
  end

  create_table "calendar_users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_calendar_users_on_user_id"
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

  create_table "education_classes", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_school_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_school_id"], name: "index_education_classes_on_education_school_id"
  end

  create_table "education_rooms", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_school_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_school_id"], name: "index_education_rooms_on_education_school_id"
  end

  create_table "education_schools", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_user_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_user_id"], name: "index_education_schools_on_education_user_id"
  end

  create_table "education_students", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_user_id", null: false
    t.uuid "education_school_id"
    t.uuid "education_class_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_class_id"], name: "index_education_students_on_education_class_id"
    t.index ["education_school_id"], name: "index_education_students_on_education_school_id"
    t.index ["education_user_id"], name: "index_education_students_on_education_user_id"
  end

  create_table "education_teachers", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "education_user_id", null: false
    t.uuid "education_school_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["education_school_id"], name: "index_education_teachers_on_education_school_id"
    t.index ["education_user_id"], name: "index_education_teachers_on_education_user_id"
  end

  create_table "education_users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_education_users_on_user_id"
  end

  create_table "map_points", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.decimal "coordinates", default: ["0.0", "0.0"], array: true
    t.string "mapable_type", null: false
    t.uuid "mapable_id", null: false
    t.uuid "map_user_id", null: false
    t.boolean "verified"
    t.boolean "expired"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["map_user_id"], name: "index_map_points_on_map_user_id"
    t.index ["mapable_type", "mapable_id"], name: "index_map_points_on_mapable"
  end

  create_table "map_users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_map_users_on_user_id"
  end

  create_table "sessions", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
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
    t.boolean "verified", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "agriculture_farmers", "agriculture_users"
  add_foreign_key "agriculture_farms", "agriculture_farmers"
  add_foreign_key "agriculture_merchants", "agriculture_users"
  add_foreign_key "agriculture_users", "users"
  add_foreign_key "calendar_events", "calendar_schedules"
  add_foreign_key "calendar_schedules", "calendar_users"
  add_foreign_key "calendar_users", "users"
  add_foreign_key "education_classes", "education_schools"
  add_foreign_key "education_rooms", "education_schools"
  add_foreign_key "education_schools", "education_users"
  add_foreign_key "education_students", "education_classes"
  add_foreign_key "education_students", "education_schools"
  add_foreign_key "education_students", "education_users"
  add_foreign_key "education_teachers", "education_schools"
  add_foreign_key "education_teachers", "education_users"
  add_foreign_key "education_users", "users"
  add_foreign_key "map_points", "map_users"
  add_foreign_key "map_users", "users"
  add_foreign_key "sessions", "users"
end
