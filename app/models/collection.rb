class Collection < ApplicationRecord
  validates :name, presence: true
  validates :image, presence: true
  validates :title, presence: true
  validates :description, presence: true
  validates :sex, presence: true
  validates :category, presence: true
end