<template>
  <div class="mainpannel" data-aos="fade-in">
    <H1 data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">Pop'Agacha</H1>
    <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="850" >A store for your fantasy need.</p>
    <v-btn data-aos="fade-up" data-aos-delay="250" data-aos-duration="1200"  router-link to="/store" >See the store</v-btn>
    <p id="test" data-aos="fade-left"  data-aos-duration="850" data-aos-delay="1500">Developped by 1Louu as a mock project. <a href="https://github.com/1Louu/Pop-agacha">Learn more here.</a></p>
  </div>
  <div>

  </div>
</template>
  
<script>

export default {
  name: 'HomePage'
}
</script>

<style scoped lang="sass">
.mainpannel
  margin: auto
  margin-top: 2.25%
  background-image: url('../assets/mtgback.png')
  background-position: center
  height: 430px
  color: white
  padding: 20px
  font-family: Arial
  display: flex
  flex-direction: column
  padding-left: 50px
  
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.9)

  border-bottom: rgba(0, 0, 0, 0.3) solid 20px
  border-top: rgba(0, 0, 0, 0.3) solid 20px

  p:nth-child(2)
    margin-top: 10px
    
  .v-btn
    color: white
    width: 250px
    background: rgba(216, 216, 216, 0.4)

  p:nth-child(4)
    margin-top: auto
    text-align: right
    font-style: italic
</style>