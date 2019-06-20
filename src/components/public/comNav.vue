<template>
    <div id="nav">
        <router-link :to="v.href" tag="div" v-for="(v,i) in navArr" :key="i" replace>
            <div>
                <img :src="v.imgUrl" :alt="v.alt">
            </div>
            <div>{{v.title}}</div>
        </router-link>
    </div>
</template>  
<script>
export default {
    props: {
        navArr: Array
    }
};
</script> 
<style lang="less" scoped>
#nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1.8rem;
    color: #666;
    background: #fff;
    > div > div {
        margin: 0.2rem;
    }
}
</style>  