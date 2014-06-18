class AddTitleToLibrary < ActiveRecord::Migration
  def change
  	add_column :libraries, :title, :string
  end
end
