Rails.application.routes.draw do
  get 'home/index'
  resources :books
  resources :articles
  root "home#index"
end
