<template>
    <div id="kong">
        <div>
            <img :src="kongObj.imgUrl" alt="空空如也">
        </div>
        <div>
            <router-link :to="kongObj.path" tag="a" replace>
                {{kongObj.title}}
            </router-link>
        </div>
    </div>
</template>  
<script>
export default {
    props: { kongObj: Object }
};
</script> 
<style lang="less" scoped>
#kong {
    width: 75%;
    margin: 0 auto;
    img {
        width: 100%;
    }
    a {
        display: block;
        width: 2.2rem;
        height: 0.7rem;
        background: #fa2;
        line-height: 0.7rem;
        text-align: center;
        color:#fff;
        margin: 0 auto;
        border-radius:.03rem;
        font-size:.24rem;
        text-decoration: none;
    }
}
</style>  