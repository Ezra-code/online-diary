puts "🌱 Seeding spices..."
justice = Event.create(title:"Never say never", body: "this is when justice was served before everything else was done or made", emotion_id: 2)
killer = Event.create(title:"Loud Sound", body: "the killer was found and bound. he was wound in a round chain", emotion_id: 1)

emotions = ["Happy", "Sad", "Angry", "Calm", "Lazy", "Energetic"]

emotions.each do |index|
    Emotion.create(name: index)
end

# Seed your database here

puts "✅ Done seeding!"
