<template>
  <div class="home">
    <loadmore>
      <div slot="body">
        <slide></slide>
      </div>
    </loadmore>

  </div>
</template>
<style>
  .home_banner{
    width:100%;
  }
</style>
<script>
import loadmore from '@/components/LoadMore'
import slide from '@/components/Slide'
export default {
  name: 'home',
  created:function() {

  },
  components: {
      slide,loadmore
  },
    methods:{

    }
}
</script>
