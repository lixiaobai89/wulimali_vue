<template>
  <div>
    <div class="shell">
    <ul class="nav">
      <li :class="{ active: activeSection === '#logo' }" @click="setActive('#logo')" id="logo">
        <a href="#">
          <div class="icon">
            <div class="imageBox">
              <img src="" alt="Goat Image" />
            </div>
          </div>
          <div class="text">山羊の前端小窝</div>
        </a>
      </li>
      <li :class="{ active: activeSection === '#home' }" @click="setActive('#home')">
        <a href="#">
          <div class="icon">
            <i class="iconfont icon-cangku"></i>
          </div>
          <div class="text">Home</div>
        </a>
      </li>
      <li :class="{ active: activeSection === '#theme' }" @click="setActive('#theme')">
        <a href="#">
          <div class="icon">
            <i class="iconfont icon-zhuti_tiaosepan"></i>
          </div>
          <div class="text">Theme</div>
        </a>
      </li>
      <li :class="{ active: activeSection === '#wallet' }" @click="setActive('#wallet')">
        <a href="#">
          <div class="icon">
            <i class="iconfont icon-qianbao"></i>
          </div>
          <div class="text">Wallet</div>
        </a>
      </li>
      <li :class="{ active: activeSection === '#loan' }" @click="setActive('#loan')">
        <a href="#">
          <div class="icon">
            <i class="iconfont icon-tupian"></i>
          </div>
          <div class="text">Loan</div>
        </a>
      </li>
      <li :class="{ active: activeSection === '#comp' }" @click="setActive('#comp')">
        <a href="#">
          <div class="icon">
            <i class="iconfont icon-erweima"></i>
          </div>
          <div class="text">Comp</div>
        </a>
      </li>
      <li :class="{ active: activeSection === '#authentication' }" @click="setActive('#authentication')">
        <a href="#">
          <div class="icon">
            <i class="iconfont icon-dunpaibaoxianrenzheng"></i>
          </div>
          <div class="text">Authentication</div>
        </a>
      </li>
      <li :class="{ active: activeSection === '#me' }" @click="setActive('#me')">
        <a href="#">
          <div class="icon">
            <div class="imageBox">
              <img src="" alt="Goat Image" />
            </div>
          </div>
          <div class="text">ME</div>
        </a>
      </li>
    </ul>
  </div>

  <!-- Sections -->
  <section v-if="activeSection === '#home'" id="home">Home</section>
  <section v-if="activeSection === '#theme'" id="theme">Theme</section>
  <section v-if="activeSection === '#wallet'" id="wallet">Wallet</section>
  <section v-if="activeSection === '#loan'" id="loan"><LoanAmortizationCalculator /></section>
  <section v-if="activeSection === '#comp'" id="comp"><CompoundInterestCalculator /></section>
  <section v-if="activeSection === '#authentication'" id="authentication">Authentication</section>
  <section v-if="activeSection === '#me'" id="me">ME</section>
  </div>
</template>

<script>
import CompoundInterestCalculator from '../views/CompoundInterestCalculator.vue';
import LoanAmortizationCalculator from '../views/LoanAmortizationCalculator.vue';

export default {
  data() {
    return {
      activeSection: "#home",
    };
  },
  components: {
    CompoundInterestCalculator,
    LoanAmortizationCalculator
  },
  methods: {
    setActive(section) {
      this.activeSection = section;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

body {
  background: #e4e9f5;
}

section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 900 100px '';
  color: rgba(110, 90, 240, 0.3);
  background: #e4e9f5;
}

.shell {
  position: fixed;
  width: 84px;
  height: 100%;
  background: #fff;
  z-index: 9999;
  transition: width 0.5s;
  padding-left: 10px;
  overflow: hidden;
}

.shell:hover {
  width: 300px;
}

.imageBox {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.imageBox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.shell ul {
  position: relative;
  height: 100vh;
}

.shell ul li {
  position: relative;
  padding: 5px;
}

.active {
  background: #e4e9f5;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

.active::before {
  content: "";
  position: absolute;
  top: -30px;
  right: 0;
  width: 30px;
  height: 30px;
  border-bottom-right-radius: 25px;
  box-shadow: 5px 5px 0 5px #e4e9f5;
  background: transparent;
}

.active::after {
  content: "";
  position: absolute;
  bottom: -30px;
  right: 0;
  width: 30px;
  height: 30px;
  border-top-right-radius: 25px;
  box-shadow: 5px -5px 0 5px #e4e9f5;
  background: transparent;
}

#logo {
  margin: 40px 0 100px 0;
}

.shell ul li a {
  position: relative;
  display: flex;
  white-space: nowrap;
}

.icon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  padding-left: 10px;
  height: 70px;
  color: rgb(110, 90, 240);
  transition: 0.5s;
}

.icon i {
  font-size: 30px;
  z-index: 999;
}

.text {
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #333;
  padding-left: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.5s;
}

.shell ul li:hover a .icon,
.shell ul li:hover a .text {
  color: #ffa117;
}

.active a .icon::before {
  content: "";
  position: absolute;
  inset: 5px;
  width: 60px;
  background: #fff;
  border-radius: 50%;
  transition: 0.5s;
  border: 7px solid rgb(110, 90, 240);
  box-sizing: border-box;
}
</style>
