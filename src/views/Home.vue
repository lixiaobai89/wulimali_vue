<template>
<div>
  <div class="home">
    <el-row>
      <el-col :span="4">
        <el-menu default-active="1" mode="vertical">
          <el-menu-item index="1">
            <router-link to="/LoanAmortizationCalculator"
              >LoanAmortizationCalculator</router-link
            >
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/CompoundInterestCalculator"
              >CompoundInterestCalculator</router-link
            >
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/Shanyang"
              >Shanyang</router-link
            >
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
</script>
<style scoped>
</style>
