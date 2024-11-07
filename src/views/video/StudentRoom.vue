<template>
  <div>
    <h1>Join Room</h1>
    <input v-model="roomId" placeholder="Enter Room ID" />
    <input v-model="participantId" placeholder="Your ID" />
    <button @click="joinRoom">Join Room</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomId: '',
      participantId: ''
    };
  },
  methods: {
    joinRoom() {
      // API call to join room
      this.$http.post(`/api/rooms/${this.roomId}/join?participantId=${this.participantId}`)
        .then(response => {
          console.log('Joined room:', response.data);
          this.startVideoCall();
        });
    },
    startVideoCall() {
      // Initialize WebRTC here
    }
  }
};
</script>
