<template>
  <div class="language-switcher">
    <el-button @click="changeLanguage('en')"></el-button>
    <el-button @click="changeLanguage('zh')"><country-flag country="Cn" @click="changeLanguage('zh')"></country-flag></el-button>
    <country-flag country="Us" @click="changeLanguage('en')"></country-flag>
    <country-flag country="Cn" @click="changeLanguage('zh')"></country-flag>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(lang) {
        console.info(111111);
        this.$i18n.locale = lang;
    },
  }
};
</script>

<style scoped>
.language-switcher {
      position: absolute;
      top: 0;
      right: 0;
}
</style>
