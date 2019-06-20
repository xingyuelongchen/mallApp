<template>
<div id="im">
    <div><img src="/img/user.jpg" alt=""></div>
    <div>
        <div>{{prop.name}}</div>
        <div>{{prop.time}}</div>
    </div>
</div>  
</template>  
<script> 
   export default { 
       props:{
           prop:Object
       },
      data(){
         return{
             msg:"测试文本",
            //  headImg:require('@/assets/img/user.jpg')
          }
      },
      methods:{
        
      }
    } 
</script> 
<style lang="less" scoped>
#im{
    height:1.5rem;
    border-bottom:1px solid #ccc;
    padding:.23rem;
    display:flex;
    justify-content: flex-start;
    align-items:center;
    background:#fff;
    &>div:first-child{
        width:1rem;
        height:1rem;
        border-radius:50%;
        overflow:hidden;
        img{
            width:100%;
        }
    }
    &>div:last-child{
        >div{
            margin-left:.3rem;
            width:5rem;
            height:.4rem;
            line-height: .4rem;
            overflow: hidden;
            text-align: left;
            &:first-child{
                font-size:.3rem;
                color:#363636;
            }
            &:last-child{
                font-size:.24rem;
                color:#9b9da2;
            }
        }
    }
}

</style>  