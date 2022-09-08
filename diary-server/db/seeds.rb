puts "🌱 Seeding spices..."
justice = Event.create(body: "this is when justice was served before everything else was done or made", emotion_id: 2)
killer = Event.create(body: "the killer was found and bound. he was wound in a round chain", emotion_id: 1)

emotions = ["Happy", "Sad", "Angry", "Calm", "Lazy", "Energetic"]

emotions.each do |index|
    Emotion.create(name: index)
end

# Seed your database here

puts "✅ Done seeding!"
