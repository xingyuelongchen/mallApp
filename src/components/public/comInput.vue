<template>
    <div id="input">
        <span @click="count()">-</span>
        <span>
            <input type="text" v-model.number.trim="x">
        </span>
        <span @click="count(1)">+</span>
    </div>
</template>  
<script>
export default {
    props: {
        index: Number
    },
    data() {
        return {
            x: 0
        };
    },
    watch: {
        x() {
            this.x = this.index && this.index ? this.index : this.x;
        }
    },
    created() {
        this.x = this.index && this.index ? this.index : this.x;
    },
    watch: {
        x(a) {
            this.x = a < 0 || isNaN(a) ? 0 : a;
            this.event();
        }
    },
    methods: {
        event() {
            var index = this.index && this.index.key ? this.index.key : 0;
            this.$emit("event", {
                source: "count",
                index,
                number: this.x
            });
        },
        count(i) {
            i ? this.x++ : this.x--;
        }
    }
};
</script> 
<style lang="less" scoped>
#input {
    width: 2.1rem;
    height: 0.6rem;
    border: 1px solid #555;
    text-align: center;
    border-radius: 0.08rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        flex: 3;
        height: 100%;
        line-height: 0.6rem;
        font-size: 0.24rem;
        overflow: hidden;
        &:nth-child(2) {
            flex: 4;
            border-left: 1px solid #555;
            border-right: 1px solid #555;

            input {
                width: 50%;
                height: 100%;
                border: 0;
                text-align: center;
                background: none;
                outline: none;
                font-size: 0.24rem;
                color: #555;
            }
        }
    }
}
</style>  