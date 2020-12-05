class Collections < ActiveRecord::Migration[5.2]
  def change
    create_table :collections do |t|
      t.string :name,         null: false
      t.string :image,        null: false
      t.string :title,        null: false
      t.string :description,  null: false
      t.string :sex,          null: false
      t.string :category,     null: false

      t.timestamps
    end
  end
end
