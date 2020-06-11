class Api::GroupsController < ApplicationController
  
  def index
    @groups = Group.all
    render :index 
  end
  
  def create
    @group = Group.new(group_params)
   
    if @group.save
      render :show
    else
      render json: @group.errors.full_messages, status: 422
  end


  def show
    @group = Group.find(params[:id])
    render :show
  end

  private

  def group_params
    params.require(:group).permit(:name, :admin_id, :network_id)
  end


end
