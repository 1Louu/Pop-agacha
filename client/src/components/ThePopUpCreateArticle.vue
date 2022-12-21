<template>
  <div class="popup">
    <div class="content">
        <h2>Add An article</h2>
        <v-text-field label="Type the name here :" :rules="rules" type="text" id="createItem" v-model="text.name" />
        <v-text-field label="Type the prices here :" :rules="rules" type="number" id="createItem" v-model="text.price" />
        <v-text-field label="Type the manufactuerer here :" :rules="rules" type="text" id="createItem" v-model="text.manufacturer" />
        <div>
          <v-btn type="submit" v-on:click="createItem" :disabled="isDisable">Post it</v-btn>
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
    async createItem() { // This method serve to create an item then emit the closing function which is implemented inside the view
      await itemsService.insertItem(this.text);
      this.$emit('close');
    },
    close() { // This method serve the same purpose but without the creation of the text
      this.$emit('close');
    }
  }, computed: {
    isDisable() {
      if (this.text.name != null)
        if( this.text.price != null)
          if(this.text.manufacturer != null)
            return false
          else return true
        else return true
      else return true
    } 
  }
}
</script>

<style lang="sass">
@keyframes appear
  from { opacity: 0 }
  to { opacity: 1 }

.popup
  animation-name: appear
  animation-duration: 0.2s
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 98
  background-color: rgba(0,0,0, 0.5)

  .content
    position: fixed
    background: white
    display: flex
    flex-direction: column
    padding-bottom: 25px
    border-radius: 10px
    width: 450px
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    h2
      background: #F89292
      padding: 10px 
      padding-left: 30px
      color: white
      border-top-left-radius: 10px
      border-top-right-radius: 10px
      margin-bottom: 20px

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