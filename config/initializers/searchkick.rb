
Searchkick.client = OpenSearch::Client.new(
  # url: ENV.fetch("OPENSEARCH_URL", "http://localhost:9200"),
  # user: ENV["OPENSEARCH_USER"],
  # password: ENV["OPENSEARCH_PASSWORD"]
  host: Rails.application.credentials.dig(:opensearch_host) || "localhost",
  port: Rails.application.credentials.dig(:opensearch_port) || 9200,
  user: Rails.application.credentials.dig(:opensearch_user),
  password: Rails.application.credentials.dig(:opensearch_password),
  transport_options: {
    request: { timeout: 5 }
  }
)