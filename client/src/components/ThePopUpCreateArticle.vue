<template>
  <div class="popup">
    <div class="content">
        <v-text-field label="Type the name here :" :rules="rules" type="text" id="createItem" v-model="text.name"></v-text-field>
        <v-text-field label="Type the prices here :" :rules="rules" type="number" id="createItem" v-model="text.price"></v-text-field>
        <v-text-field label="Type the manufactuerer here :" :rules="rules" type="text" id="createItem" v-model="text.manufacturer"></v-text-field>
        <div>
          <v-btn v-on:click="createItem">Post it</v-btn>
          <v-btn @click="$emit('close')">Close Pop-Up</v-btn>
        </div>
    </div>
  </div>
</template>

<script>
import itemsService from '../../itemsService.js';

export default {
    name: 'ThePopUp',
    data(){
      return{     
        text: [],
      }
    },
    methods: {
    async createItem() {
      await itemsService.insertItem(this.text);
      this.$emit('close');
    },
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style lang="sass">
.popup
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 98
  background-color: rgba(0,0,0, 0.3)
  
  .content
    position: fixed
    background: white
    display: flex
    flex-direction: column
    padding: 50px
    border-radius: 10px
    width: 500px
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    #createItem
      width: 400px
      margin-left: 0
    div
      margin: auto
      .v-btn
        margin-top: 20px
        margin-left: 40px
        margin-right: 40px
</style>