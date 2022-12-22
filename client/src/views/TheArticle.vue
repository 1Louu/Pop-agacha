<template>
  <div class="article" data-aos="fade-in">
    <img alt="Placeholder Image" :src="require('@/assets/image.jpg')">
    <div class="articledetails">
      <h1>ID : {{ items[0]._id }}</h1>
      <p>Title : {{ items[0].name }}</p>
      <p>Price : {{ items[0].price}} €</p>
      <p>Manufacturer : {{ items[0].manufacturer }}</p>
      <div>
        <v-btn>Add to my cart</v-btn>
        <v-btn v-on:click="deleteItem( items[0]._id)">DELETE !</v-btn>
      </div>
    </div>
  </div>
</template>


<script>

import itemsService from '@/../itemsService.js';

export default {
    name:'TheArticle',
    data(){
        return{
            id: this.$route.params.id,
            items: [],
            error: '',
            text: []
        }
    },
  async created() {
    try{
      this.items = await itemsService.getItemByID(this.$route.params.id); 
    }catch (err) {
      this.error = err.message; 
    }
  }, 
  methods: {
    async deleteItem(id) {
      await itemsService.deleteItem(id);
      window.location.replace("./");
    },

  }
}
</script>

<style scoped lang="sass">
.article
  background: rgba(52, 52, 52, 0.40)
  padding: 80px
  display: flex
  img
    width: 400px
    border-radius: 20px
  h1
    color: white
    font-size : 60px
  p
    color: white
    font-size: 40px
  .articledetails
    margin: auto
    div
      display: flex
      .v-btn
        margin: auto
        background: rgba(30, 30, 30, 0.70)
        color: white
        height: 50px
        font-size: 28px
        border-radius: 10px
      .v-btn:first-child
        margin-left: 0px
        margin-right: 0px
</style>