<template>
    <div class="head">
        <p>Pop'agacha</p> 
        <div>
            <v-btn elevation="0" tile>Shop</v-btn>
            <button>Contact Us</button>
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
    
    p
        margin-left: 10px

    button
        height: -webkit-fill-available
        width: 200pxy
        background: none
        color: inherit
        border: none
        padding: 0
        font: inherit
        cursor: pointer
        outline: inherit

</style>