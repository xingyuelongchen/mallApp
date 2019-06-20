<template>
    <div id="property">
        <span>{{arrList.title}}</span>
        <span
            v-for="(v,i) in arrList.content"
            :key="i"
            :class="{'active':index==v}"
            @click="event(v,i,(arrList.title))"
        >{{v}}</span>
    </div>
</template>  
<script>
export default {
    props: {
        propertyArr: Object
    },
    data() {
        return {
            index: [],
            arr: { title: "规格", content: ["500g", "1kg", "2kg"] }
        };
    },

    computed: {
        arrList() {
            return this.propertyArr ? this.propertyArr : this.arr;
        }
    },
    methods: {
        event(v, i, key) {
            this.index = v;
            this.$emit("event", {
                source: "property",
                index: i,
                title: key,
                type: v
            });
        }
    }
};
</script> 
<style lang="less" scoped>
#property {
    height: 0.7rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
        padding-right: 0.65rem;
    }
    > span:not(:first-child) {
        display: inline-block;
        min-width: 0.5rem;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        background: #ddd;
        color: #fff;
        margin: 0 0.15rem;
        padding: 0 0.35rem;
        border-radius: 0.1rem;
        &.active {
            background: #e33;
        }
    }
}
</style>  