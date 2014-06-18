class CreateLibraries < ActiveRecord::Migration
  def change
    create_table :libraries do |t|
      t.text :content
      t.string :source

      t.timestamps
    end
  end
end
