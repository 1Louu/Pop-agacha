<template>
    <div class="footer">
        <div class="left-content-footer">
            <p>Hi ! This is solely for self-learning purpose.</p>
            
            <div>
                <p>If you like my work, you can</p>
                <h2 class="test">follow me here :</h2>
                <a href="https://github.com/1Louu"><v-btn elevation="0" tile><v-icon x-large >mdi-github</v-icon></v-btn></a>
                <a href="https://www.linkedin.com/in/luc-bouvard-57b686198/?originalSubdomain=fr"><v-btn elevation="0" tile><v-icon x-large >mdi-linkedin</v-icon></v-btn></a>
            </div>
        </div>
        <div class="right-content-footer">
            <p>Some thanks to Jasmin and Mathias for their little help & support</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped lang="sass"> 
.footer
    display: flex
    flex-direction: row
    background: #08042a
    color: white
    position: relative
    clear: both
    height: 260px
    margin-bottom: -260px
    padding: 100px
    padding-top: 50px
    padding-bottom: 20px

    .left-content-footer
        border-top: #F0BBBB 2px solid
        margin-top: 20px
        width: 40vw
        padding: 20px
        padding-left: 5px
        
        div
            display: flex
            flex-direction: row
            p
                margin: auto 8px auto 0
                font-size: 28px
        p
            font-size: 22px
        h2
            margin: auto 0 auto 0

        a
            text-decoration: none
        .test
            text-decoration: underline
            color: #F0BBBB

    .right-content-footer
        border-top: #F0BBBB 2px solid
        margin-left: auto
        margin-right: auto
        margin-top: 20px
        width: 30vw
        padding: 20px
        padding-left: 5px
        font-size: 20px
        font-style: italic


.v-btn
    background: none
    color: #F0BBBB
    border: none
    font: inherit
    width: 60px
    height: 60px
    text-decoration: none
.v-icon
    height: 60px

</style>