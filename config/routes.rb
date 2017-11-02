Rails.application.routes.draw do
<<<<<<< HEAD
  scope '/api' do
    # resources :somethings
  end
=======
  mount_devise_token_auth_for 'User', at: 'auth'
    scope '/api' do
      # resources :blocapi
    end
>>>>>>> 05fa50f... Adds Devise Auth Token
end
