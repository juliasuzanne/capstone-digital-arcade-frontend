Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/sessions" => "sessions#create"
  post "/users" => "users#create"
  patch "/users" => "users#update"
  get "/artifacts" => "artifacts#index"
  get "/artifacts/all" => "artifacts#all"
  get "/users" => "users#index"
  post "/artifacts" => "artifacts#create"
end
