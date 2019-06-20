<template>
    <div id="shopList">
        <div class="item" v-for="(v,i) in shopArr" :key="i" @click="event(v,i)">
            <div class="img">
                <img :src="v.imgUrl" alt>
            </div>
            <div class="content">
                <div class="title">{{v.title}}</div>
                <div class="price">
                    ￥
                    <span>{{v.price}}</span>
                </div>
                <div class="time" v-if="v.time">抢购时间:{{v.time}}</div>
                <div class="plan" v-if="v.plan">
                    已售:{{v.plan}}%
                    <span>
                        <i :style="{right:(100-v.plan)+'%'}"></i>
                    </span>
                </div>
                <div class="over" v-if="v.number">{{v.number}}已抢完</div>

                <button :class="{timeOver:v.number}">{{v.btn}}</button>
            </div>
        </div>
    </div>
</template>  
<script>
export default {
    props: {
        shopArr: Array
    },
    methods: {
        event(v, i) {
            this.$emit("event", {
                source: "discountItem",
                title: v,
                index: i
            });
        }
    }
};
</script> 
<style lang="less" scoped>
#shopList {
    background: #fff;
    .item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 7rem;
        height: 3rem;
        margin: auto;
        box-shadow: 0 0 0.2rem #ccc;
        margin-bottom: 0.3rem;
        background: #fff;
        border-radius: 0.05rem;
        .img {
            width: 2.5rem;
            height: 2.5rem;
            margin: 0.2rem;
            border-radius: 0.05rem;
            overflow: hidden;
            img {
                width: 100%;
            }
        }
        .content {
            width: 4rem;
            height: 2.3rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            overflow: hidden;
            .title {
                font-size: 0.3rem;
                color: #333;
            }
            .price {
                color: #e33;
                span {
                    font-size: 0.3rem;
                }
            }
            .time {
                font-size: 0.24rem;
                color: #999;
            }
            .plan {
                color: #999;
                font-size: 0.24rem;
                span {
                    position: relative;
                    display: inline-block;
                    width: 1.25rem;
                    height: 0.12rem;
                    border-radius: 0.12rem;
                    background: #f1f1f1;
                    overflow: hidden;
                    i {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 100%;
                        height: 100%;
                        background: #e33;
                    }
                }
            }
            .over {
                color: #d3d3d3;
            }
            .timeOver {
                background: #ccc;
            }
            button {
                width: 1.65rem;
                height: 0.52rem;
                background: #fa2;
                color: #fff;
                border: none;
                border-radius: 0.05rem;
                font-size: 0.22rem;
            }
        }
    }
}
</style>  