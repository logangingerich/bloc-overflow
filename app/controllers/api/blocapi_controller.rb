class Api::BlocapiController < ApiController
   attr_accessor :base_url,:token,:email,:password,:user

   def initialize(email, password)
     self.email = email
     self.password = password

     self.login
   end



   def login
     path = "sessions"
     post_body = { body: { "email": self.email, "password": self.password } }
     response = self.class.Net::HTTP::Post.new(base_url(path),post_body)
     self.token = response["auth_token"]
     self.name = response.name

     render json: JSON.parse(response)
   end

   def base_url(end_point)
     "https://www.bloc.io/api/v1/#{end_point}"
   end
end
