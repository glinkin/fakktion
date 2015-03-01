# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150207185717) do

  create_table "admin_messages", force: true do |t|
    t.string   "title"
    t.string   "message"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  add_index "admin_messages", ["user_id"], name: "index_admin_messages_on_user_id"

  create_table "categories", force: true do |t|
    t.string   "category_name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "comments", force: true do |t|
    t.boolean  "soft_delete"
    t.date     "soft_delete_date"
    t.string   "text"
    t.boolean  "hidden"
    t.integer  "empathy_level"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "post_id"
    t.integer  "user_id"
  end

  add_index "comments", ["post_id"], name: "index_comments_on_post_id"
  add_index "comments", ["user_id"], name: "index_comments_on_user_id"

  create_table "fact_postings", force: true do |t|
    t.date "fact_post_date"
  end

  create_table "fact_types", force: true do |t|
    t.string   "fact_name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "genres", force: true do |t|
    t.string   "genre_name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "posts", force: true do |t|
    t.string   "fact_link"
    t.string   "fiction_link"
    t.string   "post_name"
    t.integer  "importance"
    t.boolean  "soft_delete"
    t.date     "soft_delete_date"
    t.boolean  "hidden"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.integer  "fact_type_id"
    t.integer  "fact_posting_id"
    t.integer  "genre_id"
    t.integer  "topic_id"
    t.integer  "categorie_id"
  end

  add_index "posts", ["categorie_id"], name: "index_posts_on_categorie_id"
  add_index "posts", ["fact_posting_id"], name: "index_posts_on_fact_posting_id"
  add_index "posts", ["fact_type_id"], name: "index_posts_on_fact_type_id"
  add_index "posts", ["genre_id"], name: "index_posts_on_genre_id"
  add_index "posts", ["topic_id"], name: "index_posts_on_topic_id"
  add_index "posts", ["user_id"], name: "index_posts_on_user_id"

  create_table "topics", force: true do |t|
    t.string   "topic_name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "full_name"
    t.string   "display_name"
    t.string   "email"
    t.string   "password_digest"
    t.date     "date_of_birth"
    t.integer  "gender"
    t.integer  "facebook_id"
    t.string   "twitter_url"
    t.string   "personal_message"
    t.string   "webpage_url"
    t.boolean  "is_banned"
    t.date     "is_banned_date"
    t.integer  "number_of_posts"
    t.integer  "number_of_comments"
    t.boolean  "legal_terms_read"
    t.boolean  "privacy_terms_read"
    t.boolean  "is_admin"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end