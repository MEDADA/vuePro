<template>
  <div class="about">
    <navbar>about</navbar>
    <mu-button class="demo-color-btn" color="indigo400"> indigo400 </mu-button>
    <h1>This is an about page</h1>
  </div>
</template>


<script>
  import navbar from '@/components/navBar'

  export default {
      name: 'home',
      components: {
          navbar
      }
  }
</script>