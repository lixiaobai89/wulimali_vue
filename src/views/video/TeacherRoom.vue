<template>
  <div class="container">
    <h1>Create Room</h1>
    <input v-model="roomId" placeholder="Enter Room ID" />
    <button @click="createRoom">Create Room</button>

    <!-- Centered Video Section -->
    <div v-if="videoStream" class="video-container">
      <h2>Your Camera</h2>
      <video ref="teacherVideo" autoplay playsinline></video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomId: '',
      videoStream: null, // Holds the camera stream
    };
  },
  methods: {
    async createRoom() {
      try {
        let loginName = sessionStorage.getItem('loginName');
        // Call the backend to create the room
        await this.$http.post('/api/rooms/create', { teacherId: loginName, roomId: this.roomId });
        
        // Start the teacher's camera and display it in the center of the page
        await this.startCamera();
      } catch (error) {
        console.error("Error creating room:", error);
      }
    },

    async startCamera() {
      try {
        // Request access to the camera
        this.videoStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        
        // Display the video stream in the <video> element
        this.$refs.teacherVideo.srcObject = this.videoStream;
      } catch (error) {
        console.error("Error accessing the camera:", error);
      }
    },
  },
  beforeDestroy() {
    // Stop the video stream when the component is destroyed
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
    }
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}

.video-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  background-color: #fff;
  border: 2px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

video {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>

