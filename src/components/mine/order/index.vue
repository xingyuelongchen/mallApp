<template>
    <div class="order">
        <com-head></com-head>
        <com-tab-toggle id="tab" :tabArr="navList" :index="index" @event="event"></com-tab-toggle>
        <com-all v-if="index== 0"></com-all>
        <com-fukuan v-if="index== 1"></com-fukuan>
        <com-kuaidi v-if="index== 2"></com-kuaidi>
    </div>
</template>  
<script>
export default {
    components: {
        comAll: () => import("./all"),
        comFukuan: () => import("./fukuan"),
        comKuaidi: () => import("./kuaidi")
    },
    data() {
        return {
            navList: ["全部订单", "待付款", "待收货"],
            index: 0
        };
    },
    beforeRouteEnter(to, from, next) {
        let hash = to.hash;
        next(e => {
            let index = ["#all", "#send", "#accept"].indexOf(hash);
            e.index = index >= 0 ? index : 0;
        });
    },
    methods: {
        event(e) {
            if (e && e.source == "tabToggle") {
                this.index = e.index;
            }
        }
    }
};
</script> 
<style lang="less" scoped>
#tab {
    color: #fff;
    background: #fa2;
    /deep/ span.active {
        color: #fff;
        i {
            background: #fff;
        }
    }
}
.nav {
    position: fixed;
    top: 0.88rem;
    padding: 0 0.23rem;
    width: 100%;
    height: 1.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fa2;
    color: #fff;
    z-index: 999;
    > span {
        flex: 1;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        position: relative;

        &.router-link-active {
            color: #fff;
            i {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                display: inline-block;
                width: 0.45rem;
                height: 0.06rem;
                background: #fff;
                border-radius: 0.06rem;
            }
        }
    }
}
.nbsp {
    border-bottom: 0.15rem solid #f1f1f1;
    padding-top: 1.1rem;
}
</style>  