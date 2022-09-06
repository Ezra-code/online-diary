class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get '/emotions' do
    events = Emotion.all
    events.to_json
  end

  get '/emotions/:id' do
    emotions = Emotion.find(params[:id])
    emotions.to_json(only: [:name], include: {events: {only: [:body, :created_at]}})
  end

end
