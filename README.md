
# WebSocket Chat Application

This is a simple chat application built using WebSockets. The app allows users to connect to a server, exchange messages, and view the chat history.

## Features

- Real-time messaging between connected clients
- Chat history is loaded for new clients
- User-friendly interface with a responsive design

## Technologies Used

- Node.js
- WebSockets (using the `ws` library)
- HTML/CSS for the client-side interface
- JavaScript for client-side logic

## Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/Dhruv-Sharma01/RealTime_Chat_App]
   cd RealTime_Chat_App
   ```

2. **Install server dependencies:**

   ```bash
   npm install
   ```

### Running the Application

1. **Start the WebSocket server:**

   ```bash
   npm start
   ```

2. **Open `index.html` in your browser:**

   You can directly open the `index.html` file in your web browser or use a local server to serve the static files.

### Project Structure

- `index.js` - The WebSocket server code
- `index.html` - The client-side interface
- `package.json` - Server dependencies and scripts

### Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request.

### License

This project is open-source and available under the [MIT License](LICENSE).

### Acknowledgments

- Thanks to the developers of the `ws` library for providing a lightweight WebSocket implementation.
