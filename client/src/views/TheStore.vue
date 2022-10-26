<template>
  <div>
    <h1>Latest Collection</h1>
  </div>
  <hr>
  <div class="createItem">
    <h2>Want to add something to my database ?</h2>
    <input type="text" id="createItem" v-model="text" placeholder="Type something here : ?">
    <button v-on:click="createItem">Post it</button>
  </div>
  <p class="error" v-if="error">{{ error }}</p>
  <div class="container">
    <div class="collections"
      v-for="(item, index) in items"
      v-bind:item="item"
      v-bind:index="index"
      v-bind:key="item._id">
        <p>{{ item.name }}</p>
        <p>{{ item.price }}</p>
        <p>{{ item.manufacturer }}</p>
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.collections {
  display: flex; 
  margin: auto; 
  text-align: center;
  justify-content: space-around;
  color: white;
}

</style>
