<template>
  <div id="app">
    <v-header></v-header>
    <div class="content">
      I am content!
    </div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/foo" >FOO</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/bar" >BAR</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/skt">SKT</router-link>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from './components/header/header.vue';

export default {
  name: 'app',
  components: {
    'v-header': header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab 
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      .tab-item 
        flex: 1
        text-align: center
</style>
