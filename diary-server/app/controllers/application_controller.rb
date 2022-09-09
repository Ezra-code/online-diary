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
    emotions.to_json(only: [], include: {events: {only: [:id, :title, :body, :created_at]}})
  end

  get '/events/:id' do
    event = Event.find(params[:id])
    event.to_json(only: [:title, :body])
  end

  post '/events' do
    event = Event.create(
      body: params[:body],
      emotion_id: params[:emotion_id]
    )

    event.to_json
  end

  patch '/events/:id' do
    event = Event.find(params[:id])
    event.update(
      body: params[:body]
    )

    event.to_json
  end

  delete '/events/:id' do
    events = Event.find(params[:id])
    events.destroy

    events.to_json
  end

end
