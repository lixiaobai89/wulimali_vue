<template>
<div>
  <div class="home">
    <el-row>
      <el-col :span="4">
        <el-menu default-active="1" mode="vertical">
          <el-menu-item index="1">
            <router-link to="/LoanAmortizationCalculator">LoanAmortizationCalculator</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/CompoundInterestCalculator">CompoundInterestCalculator</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/Finance">Finance</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/Medicine">Medicine</router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <router-link to="/Shanyang">Shanyang</router-link>
          </el-menu-item>
          <el-menu-item index="6">
            <router-link to="/GoodsSelect">GoodsSelect</router-link>
          </el-menu-item>
          <el-menu-item index="7">
            <router-link to="/ManageGoods">ManageGoods</router-link>
          </el-menu-item>
          <el-menu-item index="8">
            <router-link to="/Video">Video</router-link>
          </el-menu-item>
          <el-menu-item index="9">
            <el-button @click="pay()"> Pay </el-button> 
          </el-menu-item>
          <el-menu-item index="9">
            <el-button @click="close()"> close </el-button> 
          </el-menu-item>
          <el-menu-item index="10">
            <el-button @click="query()"> query </el-button> 
          </el-menu-item>
          <el-menu-item index="11">
            <router-link to="/TeacherRoom">TeacherRoom</router-link>
          </el-menu-item>
          <el-menu-item index="12">
            <router-link to="/StudentRoom">StudentRoom</router-link>
          </el-menu-item>
          <el-menu-item index="12">
            <router-link to="/TeacherRoomMessage">TeacherRoomMessage</router-link>
          </el-menu-item>
          <el-menu-item index="12">
            <router-link to="/StudentRoomMessage">StudentRoomMessage</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }
export default {
  methods: {
    toggleLanguage() {
      // Toggle between 'en' and 'zh' (or any other languages you define)
      const newLocale = this.$i18n.locale === 'en' ? 'zh' : 'en';
      this.$i18n.locale = newLocale;
    },
    async pay() {
      try {
        const response = await this.axios.post('/api/ali/pay');

        // Destructure the data from the response
        const { data } = response;
        console.info(data);

        if (data.success) {
          const newWindow = window.open();
          newWindow.document.open();
          newWindow.document.write(data.message);
          newWindow.document.close();
        } else {
          // Handle cases where the payment was not successful
          this.$message.error(data.message || 'Payment failed. Please try again.');
        }
      } catch (error) {
        console.error('Error during payment:', error);
        if (error.response) {
          // 处理401错误
          if (error.response.status === 401) {
            this.$message.error(error.response.data || 'Unauthorized: Invalid');
          }
        } else {
          this.$message.error('网络错误，请稍后再试');
        }
      }
    },
    async close() {
      try {
        const response = await this.axios.post('/api/ali/close');
        // Destructure the data from the response
        const { data } = response;
        console.info(data);

        if (data.success) {
          const newWindow = window.open();
          newWindow.document.open();
          newWindow.document.write(data.message);
          newWindow.document.close();
        } else {
          // Handle cases where the payment was not successful
          this.$message.error(data.message || 'Payment failed. Please try again.');
        }
      } catch (error) {
        console.error('Error during payment:', error);
        if (error.response) {
          // 处理401错误
          if (error.response.status === 401) {
            this.$message.error(error.response.data || 'Unauthorized: Invalid');
          }
        } else {
          this.$message.error('网络错误，请稍后再试');
        }
      }
    },
    async query() {
      try {
        const response = await this.axios.post('/api/ali/query');
        // Destructure the data from the response
        const { data } = response;
        console.info(data);
      } catch (error) {
        console.error('Error during payment:', error);
        if (error.response) {
          // 处理401错误
          if (error.response.status === 401) {
            this.$message.error(error.response.data || 'Unauthorized: Invalid');
          }
        } else {
          this.$message.error('网络错误，请稍后再试');
        }
      } 
    }
  }
}
</script>
<style scoped>
</style>
