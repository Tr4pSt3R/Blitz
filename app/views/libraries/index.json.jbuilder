json.array!(@libraries) do |library|
  json.extract! library, :id, :content, :source
  json.url library_url(library, format: :json)
end
