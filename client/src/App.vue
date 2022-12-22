<template>
  <v-app>
    <v-main>
      <TheHeader/>
      <div class="content">
      <router-view/>
      </div>
      <TheFooter/>
    </v-main>
  </v-app>
</template>

<script>
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default {
  name: 'App',
  components: {
    TheHeader, 
    TheFooter,
  },
  data: () => ({
    //
  }),
}
</script>

<style scoped lang="sass">
.content
  flex: 1
.v-application
  background-attachment: fixed
  background-image: url('./assets/popback.png')
  background-size: cover
  background-position-x: center
  
.v-main
  background-color: rgba(53, 78, 143, 0.4)
  min-height: 100vh
  margin: 0
  display: flex 
  flex-direction: column
</style>