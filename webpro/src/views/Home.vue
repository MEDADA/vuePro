<template>
  <div class="home">
    <navbar></navbar>
      <!--<router-link to="/about">About</router-link>-->
    <div class="content">
      <productList></productList>
    </div>
    <btmMenu></btmMenu>
  </div>
</template>
<style>
  .content{
    overflow:hidden;
  }
</style>
<script>

import navbar from '@/components/homeNavBar'
import btmMenu from '@/components/btmMenu'
import productList from '@/components/ProductList'

export default {
  name: 'home',
  components: {
    navbar,btmMenu,productList
  }
}
</script>
