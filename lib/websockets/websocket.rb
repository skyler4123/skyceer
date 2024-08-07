# How to run
# docker run -it --name skyceer-websocket -p 8080:80808 -v $PWD:/rails skyceer rails runner app/websockets/websocket.rb
EM.run {
  @channels = {} # {channel_id: [ws]}
  @clients = {} # {client_id: channel_id}
  EM::WebSocket.run(:host => WEBSOCKET_HOST, :port => WEBSOCKET_PORT.to_s) do |ws|
    ws.onopen { |handshake|
    # TODO: validate
      puts "WebSocket connection open"
      channel_id = handshake.path
      channel = @channels[channel_id] || EM::Channel.new
      @clients[ws.object_id] = channel_id
      if @channels[channel_id]
        @channels[channel_id] << ws
      else
        @channels[channel_id] = []
        @channels[channel_id] << ws
      end
      ws.send "Hello Client, you connected to #{handshake.path} channel"
    }

    ws.onclose do
      puts "Connection closed"
      channel_id = @clients[ws.object_id]
      @channels[channel_id].delete(ws)
      @clients.delete(ws.object_id)
    end

    ws.onmessage { |msg|
      puts "Recieved message: #{msg}"
      channel_id = @clients[ws.object_id]
      channel = @channels[channel_id]
      channel.each do |client|
        client.send(msg)
      end
      # User.create(email: msg)
    }
  end
}