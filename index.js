const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);

// Important : CORS configuration pour accepter les connexions front-end
const io = new Server(server, {
  cors: {
    origin: "*", // Remplace '*' par l’URL de ton front pour plus de sécurité
    methods: ["GET", "POST"]
  }
});

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, "public")));
