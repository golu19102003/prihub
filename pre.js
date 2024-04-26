function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput !== "") {
        displayMessage(userInput, true);
        // Here, you would send the userInput to your MLH backend for processing and wait for the response
        // For this example, I'll just simulate a response
        var response = "This is a simulated response from the AI";
        displayMessage(response, false);
        document.getElementById("user-input").value = "";
    }
}

function displayMessage(message, isUser) {
    var chatBox = document.getElementById("chat-box");
    var newMessage = document.createElement("div");
    newMessage.className = isUser ? "user-message" : "ai-message";
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
}
