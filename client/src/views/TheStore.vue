<template>
  <div>
    <h1>Latest Collection</h1>
  </div>
  <hr>
  <div class="createItem">
    <input type="text" id="createItem" v-model="text.name" placeholder="Type something here : ?">
    <v-btn v-on:click="createItem">Post it</v-btn>
  </div>
  <div class="row">
    <p class="error" v-if="error">{{ error }}</p>
    <div class="col-3"
      v-for="(item, index) in items"
      v-bind:item="item"
      v-bind:index="index"
      v-bind:key="item._id">
        <p>Name : {{ item.name }}</p>
        <p>Price : {{ item.price }}</p>
        <p>Manufacturer : {{ item.manufacturer }}</p>
        <div>
        <v-btn v-on:click="deleteItem(item._id)">DELETE !</v-btn>
        <v-btn router-link v-bind:to="'/store/'+ item._id" >Details</v-btn>
        </div>
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
    },
    async deleteItem(id) {
      await itemsService.deleteItem(id);
      this.items = await itemsService.getItems();
    },

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
  .v-btn
    margin: auto
    margin-left: 20px

.row
  padding: 30px
  background: rgba(52, 52, 52, 0.40)
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.20)
  height: -webkit-fill-available

.col-3
  text-align: left
  color: white
  background: rgba(216, 216, 216, 0.10)
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.20)
  margin: 30px
  height: 200px
  padding: 20px 20px 20px 20px
  border-radius: 20px
  width: 300px
  .v-btn
    background: rgba(216, 216, 216, 0.10)
    margin: auto
    color: white
  
  div
    display: flex



</style>
