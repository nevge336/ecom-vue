<template>
  <div class="hero" :style="{ backgroundImage: `url(${this.imageUrl})`, backgroundSize: 'cover' }"><NavBar />
    <h1 class="title">
      <span v-for="(letter, index) in title" :key="index" :style="{ animationDelay: `${index * 0.5}s` }" class="color-change">
        {{ letter }}
      </span>
    </h1>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  data () {
    return {
      title: 'ArtPop!'.split(''),
      imageUrl: require('@/assets/home.jpg')
    }
  }
}
</script>
