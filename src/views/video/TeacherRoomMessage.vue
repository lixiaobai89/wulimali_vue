<template>
  <div class="chat-container">
    <h1>Teacher Room Message</h1>
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <strong>{{ message.sender }}:</strong> {{ message.content }}
      </div>
    </div>

    <div class="message-input">
      <input v-model="messageContent" placeholder="Type a message" @keyup.enter="sendMessage" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "stompjs";

export default {
  data() {
    return {
      stompClient: null,
      messageContent: "",
      messages: []
    };
  },
  methods: {
    connect() {
      const socket = new SockJS("http://localhost:8080/ws");
      this.stompClient = Stomp.over(socket);

      this.stompClient.connect({}, frame => {
        this.stompClient.subscribe("/topic/messages", message => {
          this.messages.push(JSON.parse(message.body));
        });
      });
    },
    sendMessage() {
      if (this.messageContent.trim() && this.stompClient) {
        const chatMessage = {
          sender: "Teacher", // Replace with actual teacher name if available
          content: this.messageContent
        };

        this.stompClient.send("/app/chat/sendMessage", {}, JSON.stringify(chatMessage));
        this.messageContent = ""; // Clear input
      }
    }
  },
  mounted() {
    this.connect();
  }
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.messages {
  width: 100%;
  max-width: 600px;
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}

.message {
  margin: 5px 0;
}

.message-input {
  display: flex;
  width: 100%;
  max-width: 600px;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 12px;
  margin-left: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
