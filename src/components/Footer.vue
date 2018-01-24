<template lang="html">
    <div class="footer-container">
      <div>
        © 2018 / <router-link :to="'home'">Home</router-link> / Brought to you by <a target="_blank" href="https://cryptizens.io">Cryptizens.io</a>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.footer-container {
  height: $footer-height;
  border-top: 1px solid $gray-900;
  width: 1000px;
  margin: 0 auto;
  padding: 10px 20px 40px 20px;
  font-size: 14px;
  align-items: center;
}
</style>
