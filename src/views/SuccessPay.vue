<template>
  <div class="success-pay">
    <h1>Payment Successful!</h1>
    <p>Your payment has been processed successfully.</p>
    <p>Transaction ID: {{ transactionId }}</p>
    <button @click="goToHome">Go to Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactionId: this.$route.query.transactionId || 'N/A',
    };
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style scoped>
.success-pay {
  text-align: center;
  padding: 20px;
}
</style>
