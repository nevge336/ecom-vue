<template>
  <NavBar />
  <router-view />
  <MainFooter v-if="!$route.meta.hideFooter"/>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    MainFooter,
    NavBar
  }
}
</script>
