class Api::ConversationsController < ApplicationController
  def index
    @conversations = Conversation.all
    @users = User.all
    #we don't call render :index here?
  end

  def show
    @conversation = Conversation.find(params[:id])
  end

  def create
    @conversation = Conversation.new(conversation_params)

    if @conversation.save
      render :show
    else
      render json: @conversation.errors.full_messages, status: 422
    end
  end

  def update
    @conversation = conversation.find(params[:id])

    if @conversation.update(conversation_params)
      render :show
    else
      render json: @conversation.errors.full_messages, status: 422
    end
  end

  def destroy
    @conversation = Conversation.find(params[:id])

    if @conversation.destroy
      render :show
    else
      render json: @conversation.errors.full_messages, status: 422
    end
  end

  private

  def conversation_params
    params.require(:conversation).permit(:body, :author_id)
  end
  
end

