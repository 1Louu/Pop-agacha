<template>
    <h1>This is your ID : {{ items[0]._id }}</h1>
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
}
</script>

<style scoped lang="sass">
</style>