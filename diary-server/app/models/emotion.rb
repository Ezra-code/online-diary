class Emotion < ActiveRecord::Base
    has_many :events
end