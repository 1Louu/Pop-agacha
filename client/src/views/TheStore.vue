<template>
  <div>
    <h1>Latest Collection</h1>
  </div>
  <hr>
  <div class="createItem">
    <input type="text" id="createItem" v-model="text" placeholder="Type something here : ?">
    <button v-on:click="createItem">Post it</button>
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
      text: ''
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
      await itemsService.insertItem(this.text);
      this.items = await itemsService.getItems();
    }
  }
}
</script >

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.createItem
  margin-top: 100px
  width: 100%
  height: 50px
  background: #F89292

.row
  padding: 30px
  background: rgba(52, 52, 52, 0.40)
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.20)
  height: -webkit-fill-available
  padding-bottom: 10%

.col-3
  text-align: left
  color: white
  background: rgba(216, 216, 216, 0.10)
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.20)
  margin: 30px
  height: 150px
  padding: 10px 10px 10px 20px



</style>
