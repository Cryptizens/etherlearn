<template>
  <div id="app">
    <div class="container wrapper">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    'app-footer': Footer
  }
}
</script>

<style lang="scss">
body {
  background: $gray-gradient;
  margin: 0;
  display: block;
  color: $gray-900;
  background-color: $gray-100;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $base-font;
  letter-spacing: -.01em;
}

h1 {
  font-size: 34px;
}

h3 {
  font-size: 26px;
}

h5 {
  font-size: 14px;
  color: $gray-700;
  font-weight: 400;
}

a {
  text-decoration: none;
  color: inherit;
}

.wrapper {
  min-height: calc(100vh - #{ 2 * $nav-height } - #{ 2 * $footer-height });
}

.container {
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 1000px){
      margin-left: 20px !important;
      margin-right: 20px !important;
  }
}

@media screen and (max-width:1000px){
  .hide-mobile{
      display:none
  }
}

.align-right {
  text-align: right;
}
.align-left {
  text-align: left;
}
</style>
