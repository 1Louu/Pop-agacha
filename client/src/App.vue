<template>
  <v-app>
    <v-main>
      <TheHeader/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader, 
  },
  data: () => ({
    //
  }),
}
</script>

<style lang="sass">
.v-application
  background-image: url('./assets/popback.png')
  background-size: cover
  background-position-x: center
  
.v-main
  background-color: rgba(53, 78, 143, 0.4)
</style>