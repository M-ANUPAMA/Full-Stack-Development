const socket = io();

const usernameInput = document.getElementById("usernameInput");
const startButton = document.getElementById("startButton");
const chatArea = document.getElementById("chatArea");

const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");

let username = "";

// Start Chat
startButton.addEventListener("click", function() {
    username = usernameInput.value.trim();

    if (username !== "") {
        usernameInput.style.display = "none";
        startButton.style.display = "none";
        chatArea.style.display = "block";
    }
});

// Send message
form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (input.value.trim() !== "" && username !== "") {
        socket.emit("chat message", {
            username: username,
            message: input.value
        });

        input.value = "";
    }
});

// Receive message
socket.on("chat message", function(data) {
    const messageDiv = document.createElement("div");

    if (data.username === username) {
        messageDiv.classList.add("message", "sent");
    } else {
        messageDiv.classList.add("message", "received");
    }

    messageDiv.innerHTML = `
        <span class="username">${data.username}</span>
        <span class="message-text">${data.message}</span>
    `;

    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
});