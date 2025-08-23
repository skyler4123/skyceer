# Add custom methods to String class

class String
  def strip_html_tags
    self.gsub(/<[^>]*>/, "")
  end
end
