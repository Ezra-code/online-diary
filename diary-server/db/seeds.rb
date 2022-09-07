puts "🌱 Seeding spices..."
justice = Event.create(body: "this is when justice was served before everything else was done or made", emotion_id: 2)
killer = Event.create(body: "the killer was found and bound. he was wound in a round chain", emotion_id: 1)

happy = Emotion.create(name: "Happy")
shock = Emotion.create(name: "Shocked")
sad = Emotion.create(name: "Sad")
angry = Emotion.create(name: "Angry")

# Seed your database here

puts "✅ Done seeding!"
