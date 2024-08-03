# Optionally override some pagy default with your own in the pagy initializer
Pagy::DEFAULT[:items] = 10        # items per page
# Pagy::DEFAULT[:size]  = [1,4,4,1] # nav bar links
Pagy::DEFAULT[:size]  = 9 # nav bar links
# the limit used in the query will be 25
Pagy::DEFAULT[:limit] = 25
# globally
Pagy::DEFAULT[:steps] = { 0 => 5, 540 => 7, 720 => 9 }
# Better user experience handled automatically
require 'pagy/extras/overflow'
Pagy::DEFAULT[:overflow] = :last_page