const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 5000;

// Create the server using http.createServer
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",  // Ensure this matches your frontend port
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Handle socket connections
io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  // Emit the socket ID to the client
  socket.emit("socket-id", socket.id);

  // Handle location data
  socket.on("send-location", (data) => {
    io.emit("receive-location", { id: socket.id, ...data });
    console.log("Location received from:", socket.id, data);
  });

  // Handle joining a room
  socket.on("join-room", (room) => {
    socket.join(room);
    console.log(`User with ID: ${socket.id} joined room: ${room}`);
  });

  // Handle sending notifications
  socket.on("send-notification", (data) => {
    io.emit("receive-notification", data);
    console.log("Notification sent:", data);
  });

  // Handle messaging in a room
  socket.on("message", ({ room, msg }) => {
    console.log(`Message from room ${room}: ${msg}`);
    io.to(room).emit("receive-message", msg); // Send the message to the room
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    io.emit("user-disconnected", socket.id);
  });
});

// Serve the index page
app.get("/", (req, res) => {
  res.render("index");
});

// Use the server instance to listen
server.listen(port, () => console.log(`Server is running on port ${port}!`));
