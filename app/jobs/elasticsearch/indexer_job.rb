class Elasticsearch::IndexerJob < ApplicationJob
  queue_as :elasticsearch
  retry_on Timeout::Error, wait: 2.seconds, attempts: 3

  def perform(operation, record_id, record_class_name)
    logger.debug [operation, "ID: #{record_id}, class: #{record_class_name}"]
    record_class = record_class_name.constantize
    index_name = record_class.index_name
    record = record_class.find(record_id)
    elasticsearch_client = Elasticsearch::Model.client

    case operation.to_s
      when /index/
        elasticsearch_client.index  index: index_name, id: record.id, body: record.__elasticsearch__.as_indexed_json
      when /delete/
        begin
          elasticsearch_client.delete index: index_name, id: record_id
        rescue Elastic::Transport::Transport::Errors::NotFound
          logger.debug "#{record_class_name} not found, ID: #{record_id}"
        end
      else raise ArgumentError, "Unknown operation '#{operation}'"
    end
  end
end
