<template>
  <div class="goods-management">
    <h1>Manage Goods</h1>

    <!-- Form to add a new good -->
    <form @submit.prevent="addGood" class="add-good-form">
      <h2>Add New Good</h2>
      <label>
        Name:
        <input type="text" v-model="newGood.name" required />
      </label>
      <label>
        Price:
        <input type="number" v-model="newGood.price" required />
      </label>
      <label>
        Image URL:
        <input type="text" v-model="newGood.image" required />
      </label>
      <button type="submit">Add Good</button>
    </form>

    <!-- List of goods with edit and delete options -->
    <h2>Goods List</h2>
    <div class="goods-list">
      <div
        v-for="(good, index) in goods"
        :key="index"
        class="good-item"
      >
        <img :src="good.image" :alt="good.name" class="good-image" />
        <div class="good-details">
          <h3>{{ good.name }}</h3>
          <p>${{ good.price }}</p>
          <button @click="editGood(index)">Edit</button>
          <button @click="deleteGood(index)">Delete</button>
        </div>
      </div>
    </div>

    <!-- Edit form for updating existing goods -->
    <div v-if="editingGood !== null" class="edit-good-form">
      <h2>Edit Good</h2>
      <label>
        Name:
        <input type="text" v-model="editingGood.name" required />
      </label>
      <label>
        Price:
        <input type="number" v-model="editingGood.price" required />
      </label>
      <label>
        Image URL:
        <input type="text" v-model="editingGood.image" required />
      </label>
      <button @click="updateGood">Update Good</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        { name: "Product A", price: 50, image: "https://via.placeholder.com/150" },
        { name: "Product B", price: 30, image: "https://via.placeholder.com/150" },
        { name: "Product C", price: 20, image: "https://via.placeholder.com/150" }
      ],
      newGood: {
        name: "",
        price: null,
        image: ""
      },
      editingGood: null, // Stores the good being edited
      editingIndex: null // Index of the good being edited
    };
  },
  methods: {
    addGood() {
      if (this.newGood.name && this.newGood.price && this.newGood.image) {
        // Add the new good to the list
        this.goods.push({ ...this.newGood });

        // Clear the form
        this.newGood.name = "";
        this.newGood.price = null;
        this.newGood.image = "";
      }
    },
    deleteGood(index) {
      // Remove the good from the list
      this.goods.splice(index, 1);
    },
    editGood(index) {
      // Set the good to be edited
      this.editingGood = { ...this.goods[index] };
      this.editingIndex = index;
    },
    updateGood() {
      if (this.editingGood.name && this.editingGood.price && this.editingGood.image) {
        // Update the good in the list
        this.$set(this.goods, this.editingIndex, { ...this.editingGood });

        // Clear the editing state
        this.editingGood = null;
        this.editingIndex = null;
      }
    },
    cancelEdit() {
      // Cancel the edit and reset the form
      this.editingGood = null;
      this.editingIndex = null;
    }
  }
};
</script>

<style scoped>
.goods-management {
  padding: 20px;
}

.add-good-form,
.edit-good-form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin: 10px 0;
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

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
