Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :conversations, except: [:new, :edit] 
    resources :comments, only: [:index, :create, :show]
    resources :groups, only: [:index, :create, :show]
  end

  root "static_pages#root"
end
