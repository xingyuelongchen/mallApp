<template>
    <div id="userUser">
        <com-head></com-head>
        <div v-if="data[0]">
            <my v-for="(v,i) in data" :key="i" :prop="v"></my>
        </div>
        <div v-else>
            <img :src="imgUrl" alt>
        </div>
    </div>
</template>  
<script>
import my from "./my";
export default {
    components: {
        my
    },
    data() {
        return {
            bgColor: {
                background: "#fa2",
                color: "#fff"
            },
            title: "我的小伙伴",
            imgUrl: "/img/user.jpg",
            data: [
                {
                    name: "Oswald Cobblepot",
                    time: "2017-06-19 16:22:58"
                },
                {
                    name: "会飞的猪",
                    time: "2017-06-19 16:22:58"
                },
                {
                    name: "骑猪闯世界",
                    time: "2017-06-19 16:22:58"
                }
            ]
        };
    },
    methods: {}
};
</script> 
<style lang="less" scoped>
#userUser {
    background: #f1f1f1;
    height:100%;
}
</style>  