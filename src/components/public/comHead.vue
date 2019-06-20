<template>
    <div id="header">
        <div class="placeholder"></div>
        <div :class="{bg:!isTrue}">
            <span class="iconfont icon-left" @click="onBack"></span>
            <span>{{title}}</span>
            <span class="iconfont icon-menu" @click="onBack('index')"></span>
        </div>
    </div>
</template>  
<script>
export default {
    props: {
        headStr: null
    },

    computed: {
        title() {
            return this.headStr && this.headStr.title
                ? this.headStr.title
                : this.$route.meta.title;
        },
        isTrue() {
            return this.headStr && this.headStr.type
                ? this.headStr.type
                : false;
        }
    },
    methods: {
        onBack(e) {
            this.$router.goBack.apply(this);
        }
    }
};
</script> 
<style lang="less" scoped>
#header {
    .placeholder {
        width: 100%;
        height: 0.88rem;
    }
    > div:last-child {
        position: fixed;
        z-index: 99;
        top: 0;
        width: 100%;
        height: 0.88rem;
        color: #000;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span:not(:nth-child(2)) {
            width: 1.5rem;
            font-size: 0.5rem;
            text-align: center;
        }
        span:nth-child(2) {
            font-size: 0.35rem;
        }
        &.bg {
            background: #fa2;
            color: #fff;
        }
    }
}
</style>  