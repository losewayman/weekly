<template>
<div>
<img src="static/assets/bg.jpg" style="width:65%" v-if="imgb">
<el-card class="box-card card" v-for="(datas,index) in data" :key="datas.Id" shadow="always" :body-style="{padding:'5px 30px 10px 30px' , border:'0px'}">
  <div slot="header" class="clearfix">
    <span style="font-size:13px;"><strong  v-text="time(datas.createDate)"></strong></span>
  </div>
  <div class="texts item" @click="readtext(datas.content,datas.id,datas.uId,datas.power)">
    {{datas.txt}}
  </div>
</el-card>
</div>
</template>
<script>
export default{
    props:['msg'],
    data(){
        return{
            data:'',    //接收到的此用户周报列表数据
            imgb:false
        }
    },
    methods:{
        readtext(text,id,uid,power){       //text:被点击文章的html内容，id:被点击文章的id,uid被点击文章的作者
            this.$emit('child-say',id,text,uid,power,'1');
            this.$router.push('weekly');
        },
        time(ti){
            return ti.substr(0,10);
        }
    },
    watch:{
        msg:function(){
            let _this=this;
            _this.$http({    //获取被点击人的周报列表
                method:'post',
                url:'./article/getArticleList.action',
                params:{
                'uId':this.msg.childmsg.uid,
                }
            })
            .then(function(res){
                if(res.data.data==''||res.data.data==null){
                    _this.imgb=true;
                }
                else{
                    _this.imgb=false;
                }
                _this.data=res.data.data.reverse();
            })
            .catch(function(error){
                _this.$notify({
                    message: '信息加载失败！',
                    offset: 50,
                    type:'error',
                    duration:2000,
                });
            })
        }
    },
    mounted() {
        let _this=this;
        _this.$http({     //第一次获取被点击人的周报列表
            method:'post',
            url:'./article/getArticleList.action',
            params:{
                'uId':_this.msg.childmsg.uid,
            }
        })
        .then(function(res){
            if(res.data.data==''||res.data.data==null){
                    _this.imgb=true;
                }
                else{
                    _this.imgb=false;
                }
            _this.data=res.data.data.reverse();
        })
        .catch(function(error){
        })
    },
}
</script>
<style scoped>
  .texts {
    font-size: 13px;
  }

  .item {
    height:30px;
    line-height:30px;
    text-align:left;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
  }
 

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 800px;
  }
  .card{
      border-width:0px 0px 0px 0px;
      margin:0px 0px 10px 100px;
  }
  
</style>
<style> 
.el-card__header{
    padding:10px 30px 0px 30px !important;
    border:0px  !important;
}
</style>