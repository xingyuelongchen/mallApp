<template>
    <div>
        <div class="item" v-for="(v,i) in couputArr" :key="i">
            <div>
                <div class="title">
                    {{v.title}}
                    <span v-if="v.status">{{v.status}}</span>
                </div>
                <div class="discount">
                    <div class="price">
                        <span>
                            ￥
                            <i>{{v.price}}</i>
                        </span>
                    </div>
                    <div class="DiscountsThat">
                        <div>满{{v.goal}}元可用</div>
                        <div v-if="v.discountThat">{{v.discountThat}}</div>
                    </div>
                </div>
                <div class="time">
                    <span>{{v.time}}</span>
                </div>
            </div>
            <div>立即领取</div>
        </div>
    </div>
</template>  
<script>
export default {
    props: {
        couputArr: Array
    },
    data() {
        return {
            a: [
                {
                    title: "欧莱雅旗舰店",
                    status: "未使用",
                    price: 10,
                    goal: 80,
                    discountsThat: "仅限欧莱雅旗舰店使用",
                    time: "2019-06-10 至 2019-09-09"
                },
                {
                    title: "欧莱雅旗舰店",
                    status: "未使用",
                    price: 10,
                    goal: 80,
                    discountsThat: "仅限欧莱雅旗舰店使用",
                    time: "2019-06-10 至 2019-09-09"
                }
            ]
        };
    },
    methods: {}
};
</script> 
<style lang="less" scoped>
.item {
    width: 7.04rem;
    height: 2.6rem;
    background: url(/img/couput_a.png) no-repeat center / 100% 100%;
    margin: 0.2rem auto;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div:first-child {
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        margin-left: 0.51rem;
        .title {
            font-size: 0.3rem;
            font-weight: bold;
            span {
                display: inline-block;
                width: 0.9rem;
                height: 0.35rem;
                line-height: 0.35rem;
                text-align: center;
                font-size: 0.2rem;
                border: 1px solid #fff;
                border-radius: 0.35rem;
                vertical-align: middle;
            }
        }
        .discount {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            > div:first-of-type {
                margin-right: 0.25rem;
                font-size: 0.24rem;
                i {
                    font-size: 0.56rem;
                }
            }
            > div:last-child {
                > div:last-child {
                    font-size: 0.22rem;
                }
                > div:first-child {
                    font-size: 0.3rem;
                }
            }
        }
    }
    > div:last-child {
        width: 0.3rem;
        font-size: 0.3rem;
        margin-right: 0.63rem;
    }
}
</style>  