<template>
  <div id="app">
    <div class="wrapper">
      <div class="container">
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </div>

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
  background: $sandy-gradient;
  margin: 0;
  display: block;
  color: $gray-900;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $base-font;
  letter-spacing: -.01em;
  font-family: 'Avenir';
}

button {
  background: darken($limeade, 5%);
  border: none;
  box-shadow: 0 2px 2px rgba(0,0,0,0.17);
  font-family: 'Andale Mono';
  border-radius: 3px;
  padding: 0.3rem 1rem;
  margin: 0.5rem;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: darken($limeade, 10%);
  }
}

button.inverted {
  background: white;
  color: darken($limeade, 10%);
  &:hover {
    background: $gray-200;
  }
}

input.short {
  margin: 0.5rem;
  padding: 3px;
  min-height: 20px;
  width: 50px;
  text-align: center;
  font-size: 16px;
}

div.block {
  background: $limeade-gradient;
  border-radius: 6px;
  color: $gray-900;
  padding: 20px 40px;
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 0 2px 20px rgba(0,0,0,0.17);
  font-family: 'Andale Mono';

  @media (max-width: 1000px){
    margin: 20px 0 !important;
    padding: 20px !important;
  }
}

.block-field {
  color: $gray-900;
  background-color: white;
  border-radius: 3px;
  padding: 10px;
  min-height: 15px;
  overflow: scroll;
}

.hash {
  font-size: 0.8em;
}

.success {
  color: $success !important;
  font-weight: bold;
}

.danger {
  color: $danger !important;
  font-weight: bold;
}

div.tableized {
  padding: 10px;
  margin-bottom: 15px;
}

table {
  width: 100%;
  .table-input {
    border: none;
    color: $gray-900;
    font-family: 'Andale Mono';
    font-size: 16px;
    max-width: 100px;
  }
}

th {
  color: $gray-900;
  border-bottom: 1px dashed $gray-900;
}

tr {
  padding: 20px;
}

h1 {
  font-size: 34px;
  text-align: center;
}

a {
  text-decoration: none;
  color: inherit;
}

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  padding: 30px;
  padding-top: 70px;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  flex-grow: 1;

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
