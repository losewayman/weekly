<template>
    <div class="wrong">
    <img src='static/assets/timg.jpg' class="wrong_img"/>
    
    <p class="wrong_p">点击<span @click="hrefhome" class="wrong_span"> 这里 </span>回到首页</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    methods:{
        hrefhome(){
            this.$router.push("main");
        }
    }
}
</script>
<style>
.wrong{
    overflow:hidden;
    text-align:center;
}
.wrong_img{
    width:50%;
}
.wrong_p{
    font-size:18px;
    letter-spacing:3px;
}
.wrong_span{
    color:#33a3dc;
}
</style>
