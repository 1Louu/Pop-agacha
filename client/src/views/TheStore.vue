<template>
  <div  data-aos="fade-in" class="createItem">
    <p>The store</p>
    <input type="text" id="createItem" v-model="text.name" placeholder="Type something here : ?">
    <v-btn v-on:click="createItem">Post it</v-btn>
  </div>
  <div class="row" data-aos="fade-in">
    <p class="error" v-if="error">{{ error }}</p>
    <div class="col-3"
      v-for="(item, index) in items"
      v-bind:item="item"
      v-bind:index="index"
      v-bind:key="item._id">
        <router-link v-bind:to="'/store/'+ item._id">
        <img alt="Placeholder Image" :src="require('@/assets/image.jpg')">
        <p>{{ item.name }}</p>
        <p>{{ item.price }} €</p>
        <!-- <v-btn v-on:click="deleteItem(item._id)">DELETE !</v-btn> -->
        </router-link>
    </div>
  </div>
</template>

<script>
import itemsService from '@/../itemsService.js';
export default {
  name: 'TheStore',
  data(){
    return{
      items: [],
      error: '',
      text: []
    }
  },
  async created() {
    try{
      this.items = await itemsService.getItems(); 
    }catch (err) {
      this.error = err.message; 
    }
  }, 

  methods: {
    async createItem() {
      this.text.price = 0;
      this.text.manufacturer = "--"; 
      await itemsService.insertItem(this.text);
      this.items = await itemsService.getItems();
    }
  }
}
</script >

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
#createItem
  height: 30px
  background: white
  border-radius: 15px
  margin: auto
  width: 400px
  padding-left: 10px
  margin-right: 20px
.createItem
  margin-top: 100px
  width: 100%
  height: 50px
  background: #F89292
  display: flex
  p
    color: white
    margin: auto
    margin-left: 40px
    margin-right: 0px
    font-size: 28px

  .v-btn
    margin: auto
    margin-left: 20px

a
  text-decoration: none

.row
  padding: 30px
  background: rgba(52, 52, 52, 0.40)
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.20)
  height: -webkit-fill-available

.col-3
  text-align: center
  color: white
  background: rgba(30, 30, 30, 0.750)
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.20)
  margin: 30px
  padding: 20px 20px 20px 20px
  border-radius: 20px
  width: 300px
  display: flex
  flex-direction: column

  p
    font-size: 24px
    color: white
    text-decoration: none

  img 
    width: 260px
    height: auto
    margin-bottom: 20px
    border-radius: 20px
    margin-left: auto
    margin-right: auto
    display: block

  .v-btn
    background: rgba(216, 216, 216, 0.10)
    margin: auto
    color: white
  
  div
    display: flex
</style>
