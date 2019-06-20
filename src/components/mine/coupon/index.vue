<template>
    <div class="conpon">
        <com-head></com-head>
        <com-tab-toggle :tabArr="list" @event="event"></com-tab-toggle>
        <div class="content">

        <com-a v-if="index ==0"></com-a>
        <com-b v-if="index ==1"></com-b>
        <com-c v-if="index ==2"></com-c>
        </div>
    </div>
</template>  
<script>
export default {
    components: {
        comA: () => import("./a"),
        comB: () => import("./b"),
        comC: () => import("./c")
    },
    data() {
        return {
            list: ["待使用", "已过期", "已使用"],
            index: 0
        };
    },

    methods: {
        event(e) {
            this.index = e.index;
        }
    }
};
</script> 
<style lang="less">
.conpon{
  text-align: left;
  .content{
    border-top:.2rem solid #f1f1f1;
  }
}
</style>  