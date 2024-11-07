<template>
  <div>
    <div ref="captureArea">
      <!-- Your content here, e.g., text, images -->
      <h1>Page Content to Video</h1>
      <p>This will be captured into a video.</p>
    </div>
    <button @click="generateVideo">Generate Video</button>
    <video ref="videoPlayer" controls></video>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

export default {
  methods: {
    async captureFrame() {
      const canvas = await html2canvas(this.$refs.captureArea);
      return canvas.toDataURL('image/png');
    },
    async generateVideo() {
      const ffmpeg = createFFmpeg({ log: true });
      await ffmpeg.load();

      const frames = [];
      for (let i = 0; i < 10; i++) {
        const frame = await this.captureFrame();
        frames.push(frame);
      }

      // Add frames to ffmpeg (assuming a simple frame-sequence video)
      for (let i = 0; i < frames.length; i++) {
        ffmpeg.FS('writeFile', `frame${i}.png`, await fetchFile(frames[i]));
      }

      await ffmpeg.run('-framerate', '30', '-i', 'frame%d.png', '-c:v', 'libx264', 'output.mp4');
      
      const data = ffmpeg.FS('readFile', 'output.mp4');
      const videoUrl = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));

      this.$refs.videoPlayer.src = videoUrl;
    }
  }
}
</script>
