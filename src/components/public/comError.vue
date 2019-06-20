<template>
    <div id="error">
        <com-head></com-head>
    </div>
</template>  
<script>
export default {
    components: {
        comHead: () => import("../public/comHead")
    },
    data() {
        return {
            msg: "404"
        };
    },
    methods: {}
};
</script> 
<style lang="less" scoped>
</style>  