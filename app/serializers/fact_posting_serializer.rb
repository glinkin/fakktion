class FactPostingSerializer < ActiveModel::Serializer
  has_many :posts
  
  embed :ids, include: true
  
  attributes :id,
             :fact_post_date
end