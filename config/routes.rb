Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # Resources Routes
  
  # Namespaced routes
  namespace :api do
    get 'user_info', to: 'users#info'
  end

  # GET routes
  
  # POST routes
  
  # PUT routes
  
  # DELETE Routes

  # NO ROUTES BELOW THIS LINE
  get '*unmatched_route', to: 'home#index'

end
