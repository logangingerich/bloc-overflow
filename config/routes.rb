Rails.application.routes.draw do
    scope '/api' do
      resources :blocapi
    end
end
