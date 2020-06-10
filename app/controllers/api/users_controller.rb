class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @errors = @user.email_cannot_be_personal
    
    if @errors
      render json: @errors, status: 422 
    else
      if @user.save 
        login(@user)
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  end

  def index
    
    @users = User.all
    render :index 
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
