<template>
    <div class="tabToggle">
        <span v-for="(v,i) in tabArr" :key="i" @click="tabClick(v,i)" :class="{active:isTrue==i}">
            {{v}}
            <i></i>
        </span>
    </div>
</template>  
<script>
export default {
    props: {
        tabArr: Array,
        index: Number
    },
    data() {
        return {
            isTrue: 0,
            tabList: null
        };
    },
    watch: {
        index() {
            this.isTrue = this.index;
        }
    },
    methods: {
        tabClick(v, i) {
            this.isTrue = i;
            this.$emit("event", {
                source: "tabToggle",
                title: v,
                index: this.isTrue
            });
        }
    }
};
</script> 
<style lang="less" scoped>
.tabToggle {
    height: 1rem;
    display: flex;
    justify-content: space-around;
    background: #fff;
    color: #666;
    font-size: 0.26rem;
    text-align: center;
    padding-top: 0.5rem;
    span {
        flex: 1;
    }
    .active {
        color: #fa2;
        position: relative;
        i {
            position: absolute;
            top: 0.5rem;
            left: 0;
            right: 0;
            margin: auto;
            background: #fa2;
            width: 0.44rem;
            height: 0.06rem;
            border-radius: 0.06rem;
        }
    }
}
</style>  