<template>
  <div>
    <h1>Latest Collection</h1>
    <router-link to="/">HOME</router-link>
  </div>
  <hr>
  <div class="createcollect">
    <h2>Want to add something to my database ?</h2>
    <input type="text" id="createcollect" v-model="text" placeholder="Type something here : ?">
    <button v-on:click="createCollect">Post it</button>
  </div>
  <p class="error" v-if="error">{{ error }}</p>
  <div class="container">
    <div class="collections"
      v-for="(collect, index) in collects"
      v-bind:item="collect"
      v-bind:index="index"
      v-bind:key="collect._id"
      >
        <p>{{ collect._id }}</p>
        <p>{{ collect.text }}</p>
        <p>{{ collect.Name }}</p>
    </div>
  </div>
</template>

<script>
import CollectService from '@/CollectService';

export default {
  name: 'PostCollect',
  data(){
    return{
      collects: [],
      error: '',
      text: ''
    }
  },

  async created() {
    try{
      this.collects = await CollectService.getCollect(); 
    }catch (err) {
      this.error = err.message; 
    }
  }, 
  methods: {
    async createCollect() {
      await CollectService.insertCollect(this.text);
      this.collects = await CollectService.getCollect();
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
  flex-direction: row;
  margin: auto; 
  text-align: center;
}

</style>
