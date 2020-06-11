@groups.each do |group|
  json.set! group.id do 
    json.extract! group, :id, :name, :admin_id, :network_id
  end
end