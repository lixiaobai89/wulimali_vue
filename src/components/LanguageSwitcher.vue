<template>
  <div class="language-switcher">
    <span>{{ $t('switch.lang') }}</span>
    <!-- Display a globe icon -->
    <span class="globe-icon" @click="toggleLanguage">
      🌐
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLanguage() {
      // Toggle between 'en' and 'zh' (or any other languages you define)
      const newLocale = this.$i18n.locale === 'en' ? 'zh' : 'en';
      this.$i18n.locale = newLocale;
    }
  }
};
</script>

<style scoped>
.language-switcher {
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.globe-icon {
  font-size: 24px;
  margin-right: 10px;
}
</style>
