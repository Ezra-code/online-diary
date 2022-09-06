class CreateEmotions < ActiveRecord::Migration[6.1]
  def change
    create_table :emotions do |t|
      t.string :name
    end    
  end
end
