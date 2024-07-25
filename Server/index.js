const WebSocket = require('ws');
const port = process.env.PORT || 5001;
const server = new WebSocket.Server({ port });

let chatHistory = [];

server.on('connection', (ws) => {
    console.log('Client connected');

    if (chatHistory.length > 0) {
        ws.send(JSON.stringify({
            type: "history",
            data: chatHistory
        }));
    }

    ws.on('message', (message) => {
        try {
            message = JSON.parse(message);

            if (message.type === "name") {
                ws.personName = message.data;
            } else if (message.type === "message") {
                const chatMessage = {
                    name: ws.personName,
                    data: message.data
                };
                chatHistory.push(chatMessage);

                server.clients.forEach((client) => {
                    if (client !== ws && client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify(chatMessage));
                    }
                });
            }
        } catch (error) {
            console.error('Error processing message:', error);
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

server.on('listening', () => {
    console.log(`WebSocket server is listening on port ${port}`);
});
