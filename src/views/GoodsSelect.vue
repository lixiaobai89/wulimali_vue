<template>
  <div class="goods-select" @scroll.passive="onScroll" ref="goodsSelectContainer">
    <h1>Select Goods</h1>

    <!-- Display current goods in a grid format -->
    <div class="goods-list">
      <div
        v-for="(good, index) in displayedGoods"
        :key="index"
        class="good-item"
      >
        <img :src="good.image" :alt="good.name" class="good-image" />
        <div class="good-details">
          <h3>{{ good.name }}</h3>
          <p>${{ good.price }}</p>
          <label>
            <input type="checkbox" :value="good" v-model="selectedGoods" />
            Select
          </label>
        </div>
      </div>
    </div>

    <!-- Loading message -->
    <div v-if="loading" class="loading-message">Loading more goods...</div>

    <!-- Display selected goods and total price -->
    <div class="selected-goods">
      <h2>Selected Goods</h2>
      <ul>
        <li v-for="(good, index) in selectedGoods" :key="index">
          {{ good.name }} - ${{ good.price }}
        </li>
      </ul>
      <p>Total: ${{ totalPrice }}</p>
    </div>

    <!-- Buy button fixed at bottom-right -->
    <button class="buy-button" @click="buyGoods">
      Buy Now (Total: ${{ totalPrice }})
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        { name: "Product A", price: 50, image: "https://via.placeholder.com/150" },
        { name: "Product B", price: 30, image: "https://via.placeholder.com/150" },
        { name: "Product C", price: 20, image: "https://via.placeholder.com/150" },
        { name: "Product D", price: 40, image: "https://via.placeholder.com/150" },
        { name: "Product E", price: 35, image: "https://via.placeholder.com/150" },
        { name: "Product F", price: 25, image: "https://via.placeholder.com/150" },
        { name: "Product G", price: 60, image: "https://via.placeholder.com/150" },
        { name: "Product H", price: 15, image: "https://via.placeholder.com/150" },
        { name: "Product I", price: 10, image: "https://via.placeholder.com/150" },
        { name: "Product J", price: 55, image: "https://via.placeholder.com/150" },
        { name: "Product K", price: 45, image: "https://via.placeholder.com/150" }
      ],
      selectedGoods: [],
      displayedGoods: [],  // List of goods currently shown
      goodsPerLoad: 6,     // Number of goods loaded each time
      loading: false,      // Whether goods are being loaded
      currentGoodsIndex: 0, // Index to track how many goods are displayed
    };
  },
  computed: {
    totalPrice() {
      return this.selectedGoods.reduce((sum, good) => sum + good.price, 0);
    },
  },
  mounted() {
    // Initially load the first set of goods
    this.loadMoreGoods();

    // Set up the scroll event on the goods select container
    this.$refs.goodsSelectContainer.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    // Remove the scroll event listener when the component is destroyed
    this.$refs.goodsSelectContainer.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    loadMoreGoods() {
      if (this.loading || this.currentGoodsIndex >= this.goods.length) return;

      this.loading = true;

      // Simulate loading delay
      setTimeout(() => {
        const nextGoods = this.goods.slice(
          this.currentGoodsIndex,
          this.currentGoodsIndex + this.goodsPerLoad
        );

        this.displayedGoods = [...this.displayedGoods, ...nextGoods];
        this.currentGoodsIndex += this.goodsPerLoad;
        this.loading = false;
      }, 1000);
    },
    onScroll() {
      const container = this.$refs.goodsSelectContainer;
      const bottomOfWindow = container.scrollTop + container.clientHeight >= container.scrollHeight;

      // If user scrolls to the bottom, load more goods
      if (bottomOfWindow) {
        this.loadMoreGoods();
      }
    },
    buyGoods() {
      alert(`Thank you for purchasing! Total: $${this.totalPrice}`);
    }
  }
};
</script>

<style scoped>
.goods-select {
  padding: 20px;
  max-height: 80vh; /* Limit the height for scrolling */
  overflow-y: auto;
}

.goods-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 goods per row */
  gap: 20px;
}

.good-item {
  border: 1px solid #ccc;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.good-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}

.good-details {
  margin-top: 10px;
}

.selected-goods {
  margin-top: 30px;
}

/* Loading message */
.loading-message {
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
}

/* Buy button fixed at bottom-right */
.buy-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.buy-button:hover {
  background-color: #218838;
}
</style>
