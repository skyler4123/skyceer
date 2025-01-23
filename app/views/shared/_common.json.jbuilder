json.pagination do
  json.last @pagy.last
  json.next @pagy.next
  json.page @pagy.page
  json.params request.params
  json.prev @pagy.prev
end
json.flash flash.to_hash