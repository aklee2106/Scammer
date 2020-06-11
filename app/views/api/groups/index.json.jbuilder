@groups.each do |group|
  json.set! group.id do 
    json.extract! group, :id, :admin_id, :network_id
  end
end