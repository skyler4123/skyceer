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

ActiveRecord::Schema[7.2].define(version: 2024_11_07_201931) do
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

  create_table "estate_condos", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.uuid "address_id"
    t.string "name"
    t.integer "price_cents"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address_id"], name: "index_estate_condos_on_address_id"
    t.index ["user_id"], name: "index_estate_condos_on_user_id"
  end

  create_table "estate_hotels", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.uuid "address_id"
    t.string "name"
    t.integer "price_cents"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address_id"], name: "index_estate_hotels_on_address_id"
    t.index ["user_id"], name: "index_estate_hotels_on_user_id"
  end

  create_table "estate_houses", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.uuid "address_id"
    t.string "name"
    t.integer "price_cents"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address_id"], name: "index_estate_houses_on_address_id"
    t.index ["user_id"], name: "index_estate_houses_on_user_id"
  end

  create_table "estate_users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_estate_users_on_user_id"
  end

  create_table "map_points", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.decimal "coordinates", default: ["0.0", "0.0"], array: true
    t.string "mapable_type"
    t.uuid "mapable_id"
    t.uuid "map_user_id"
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

  create_table "report_frontends", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id"
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_report_frontends_on_user_id"
  end

  create_table "report_tickets", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.integer "category"
    t.integer "status"
    t.string "reporter_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "name"
    t.boolean "verified", default: false, null: false
    t.uuid "address_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address_id"], name: "index_users_on_address_id"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  create_table "vehicle_cars", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.string "model"
    t.string "brand"
    t.uuid "vehicle_store_id"
    t.uuid "vehicle_user_id"
    t.integer "price"
    t.string "version"
    t.integer "year"
    t.integer "post_purpose"
    t.decimal "coordinates", default: ["0.0", "0.0"], array: true
    t.datetime "released_at"
    t.boolean "verified"
    t.boolean "expired"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["vehicle_store_id"], name: "index_vehicle_cars_on_vehicle_store_id"
    t.index ["vehicle_user_id"], name: "index_vehicle_cars_on_vehicle_user_id"
  end

  create_table "vehicle_stores", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.uuid "vehicle_user_id", null: false
    t.decimal "coordinates", default: ["0.0", "0.0"], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["vehicle_user_id"], name: "index_vehicle_stores_on_vehicle_user_id"
  end

  create_table "vehicle_users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_vehicle_users_on_user_id"
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
  add_foreign_key "estate_condos", "addresses"
  add_foreign_key "estate_condos", "users"
  add_foreign_key "estate_hotels", "addresses"
  add_foreign_key "estate_hotels", "users"
  add_foreign_key "estate_houses", "addresses"
  add_foreign_key "estate_houses", "users"
  add_foreign_key "estate_users", "users"
  add_foreign_key "map_points", "map_users"
  add_foreign_key "map_users", "users"
  add_foreign_key "report_frontends", "users"
  add_foreign_key "users", "addresses"
  add_foreign_key "vehicle_cars", "vehicle_stores"
  add_foreign_key "vehicle_cars", "vehicle_users"
  add_foreign_key "vehicle_stores", "vehicle_users"
  add_foreign_key "vehicle_users", "users"
end
