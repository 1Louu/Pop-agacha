<template>
    <div class="head">
        <v-btn id="Title" elevation="0" tile  router-link to="/" >Pop'agacha</v-btn>
        <div class="head-list">
            <v-btn elevation="0" tile router-link to="/store">Shop</v-btn>
            <v-btn elevation="0" tile>Contact Us</v-btn>
            <v-btn elevation="0" tile><v-icon x-large >mdi-cart</v-icon></v-btn>
            <v-btn elevation="0" tile><v-icon x-large>mdi-account</v-icon></v-btn>
            <v-btn elevation="0" tile><v-icon x-large>mdi-format-list-bulleted-square</v-icon></v-btn>
        </div>
    </div>
</template>
  
<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped lang="sass">

.head 
    backdrop-filter: blur(5px)
    display: flex
    flex-direction: row
    text-align: center
    align-content: space-around
    background: rgba(216, 216, 216, 0.10)
    color: #F0BBBB
    height: 60px
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.20)
    
    *
        margin: auto
    
    #Title
        margin-left: 20px
        font-size: 24px
        text-decoration: underline
        width: 240px

    .v-btn
        height: 60px
        padding-left : 40px
        padding-right : 40px
        background: none
        color: #F0BBBB
        border: none
        font: inherit

.head-list
    margin-right: 0px

</style>