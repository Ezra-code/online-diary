class AddForeignKeyToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :emotion_id, :integer
  end
end
