<template>
  <div class="chat-container">
    <h1>Student Room Messages</h1>
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <strong>{{ message.sender }}:</strong> {{ message.content }}
      </div>
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
      messages: [] // Stores incoming messages
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
    }
  },
  mounted() {
    this.connect();
  },
  beforeDestroy() {
    // Disconnect the WebSocket when leaving the page
    if (this.stompClient) {
      this.stompClient.disconnect();
    }
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
}
</style>
