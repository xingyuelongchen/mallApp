<template>
    <div id="details">
        <com-head></com-head>
        <com-slide :slideArr="imgList" id="swiperSlide"></com-slide>

        <div class="content">
            <div class="priceInfo">
                <div class="price">
                    <div>￥123.00</div>
                    <div>
                        <div>￥199.00</div>
                        <div>秒杀</div>
                    </div>
                </div>
                <div class="outTime">
                    <div>距离结束还剩</div>
                    <div>
                        <span>05</span>:
                        <span>05</span>:
                        <span>00</span>
                    </div>
                </div>
            </div>
            <div class="title">拍下8.8包邮洛黛诗香水头发护发精油干枯毛躁直卷发免洗护发素</div>
            <div class="discount">
                <div>
                    促销:
                    <span>满减</span>
                    满两件九折;三件8折
                </div>
                <div class="iconfont icon-down"></div>
            </div>
            <div class="count">
                <div>购买数量</div>
                <com-input @event="event"></com-input>
            </div>
            <div class="property">
                <div>商品属性</div>
                <com-property @event="event" v-for="(v,i) in property" :key="i" :propertyArr="v"></com-property>
            </div>
            <div class="details">
                <div>商品详情</div>
                <img v-for="(v,i) in detailsImg" :key="i" :src="v" alt="详情">
            </div>
            <div class="comment">
                <div>商品评价</div>
                <div>
                    <div class="name">name</div>
                    <div class="commentText">效果很行,非常不错,下次不来了</div>
                    <div class="img">
                        <img v-for="(v,i) in detailsImg" :key="i" :src="v" alt="详情">
                    </div>
                    <div class="time">2019-06-05</div>
                    <div class="more">
                        <span>2000条评论</span>
                        <span>查看更多</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu">
            <div class="ba"></div>
            <div class="content">
                <div>
                    <div class="iconfont icon-shopping">购物车</div>
                    <div>0</div>
                </div>
                <div @click="addCart()">加入购物车</div>
                <div @click="addCart(1)">立即购买</div>
            </div>
        </div>
    </div>
</template>  
<script>
export default {
    components: {
        comProperty: () => import("./property")
    },
    data() {
        return {
            imgList: [
                { imgUrl: "/img/pic_max_1.png" },
                { imgUrl: "/img/pic_max_2.png" }
            ],
            property: [
                { title: "规格", content: ["500g", "1kg", "2kg"] },
                { title: "颜色", content: ["蓝色", "白色"] }
            ],
            detailsImg: ["/img/details.png"]
        };
    },
    methods: {
        addCart(e) {
            console.log("加入购物车", this.$route.params.id);
            if (e) {
                this.$router.Go.call(this,{ path: "/cart" });
            }
        },
        event(e) {
            console.log(e);
        }
    }
};
</script> 
<style lang="less" scoped>
#swiperSlide {
    height: 7.5rem;
}
.priceInfo {
    height: 1.1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    .price {
        flex: 5;
        background: linear-gradient(90deg, #e33, #fa2);
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        > div:first-child {
            font-size: 0.45rem;
        }
        > div:last-child {
            font-size: 0.24rem;
            > div:first-child {
                text-decoration: line-through;
            }
        }
    }
    .outTime {
        flex: 3;
        height: 100%;
        background: #f1f1f1;
        color: #454545;
        > div {
            height: 0.5rem;
            line-height: 0.5rem;
            &:first-child {
                font-size: 0.24rem;
            }
            &:last-child {
                span {
                    width: 0.4rem;
                    height: 0.4rem;
                    background: #e33;
                    color: #fff;
                    font-size: 0.3rem;
                    border-radius: 0.02rem;
                }
            }
        }
    }
}
.title {
    width: 90%;
    margin: 0 auto;
    height: 1.5rem;
    display: flex;
    align-items: center;
    text-align: left;
    font-size: 0.3rem;
}
.discount {
    width: 90%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    color: #444;
    font-size: 0.26rem;
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    span {
        border: 1px solid #e33;
        border-radius: 0.03rem;
        color: #e33;
        display: inline-block;
        width: 0.65rem;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        margin: 0 0.05rem;
    }
}
.count {
    width: 90%;
    height: 1.1rem;
    display: flex;
    color: #444;
    font-size: 0.26rem;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    border-bottom: 1px solid #f1f1f1;
}
.property {
    width: 90%;
    margin: 0 auto;
    color: #444;
    font-size: 0.26rem;
    text-align: left;
    > div {
        padding: 0.1rem 0;
    }
}
.details {
    > div {
        height: 0.95rem;
        line-height: 0.95rem;
        text-align: left;
        font-size: 0.24rem;
        border-top: 0.2rem solid #f1f1f1;
        margin: 0 auto;
        padding: 0 0.3rem;
        color: #444;
    }
}
.comment {
    > div:first-child {
        height: 0.95rem;
        line-height: 0.95rem;
        text-align: left;
        font-size: 0.24rem;
        border-top: 0.2rem solid #f1f1f1;
        margin: 0 auto;
        padding: 0 0.3rem;
        color: #444;
    }
    > div:last-child {
        width: 90%;
        border-top: 1px solid #f1f1f1;
        text-align: left;
        margin: 0 auto;
        .name {
            height: 0.65rem;
            line-height: 0.65rem;
            font-size: 0.2rem;
            color: #888;
        }
        .commentText {
            min-height: 0.8rem;
            line-height: 0.3rem;
            font-size: 0.22rem;
            color: #444;
        }
        .img {
            display: flex;
            justify-content: flex-start;
            img {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
        .time {
            height: 0.8rem;
            line-height: 0.8rem;
            color: #999;
            border-bottom: 1px solid #f1f1f1;
        }
        .more {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 0.9rem;
            color: #999;
        }
    }
}
.menu {
    .ba {
        height: 1.15rem;
    }
    .content {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1.15rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        & > div {
            text-align: center;
            height: 100%;
            font-size: 0.3rem;
        }
        & > div:first-child {
            flex: 3;
            color: #888;
            height: 1.15rem;
            position: relative;
            padding-top: 0.2rem;
            box-sizing: border-box;
            > div:first-child {
                &:before {
                    font-size: 0.45rem;
                    display: block;
                }
                font-size: 0.24rem;
            }
            > div:last-child {
                background: #e33;
                color: #fff;
                font-size: 0.22rem;
                width: 0.3rem;
                height: 0.3rem;
                line-height: 0.3rem;
                text-align: center;
                border-radius: 50%;
                position: absolute;
                left: 55%;
                top: 10%;
            }
        }
        > div:nth-child(2) {
            flex: 5;
            background: #fa2;
            color: #fff;
            line-height: 1.15rem;
        }
        > div:last-child {
            flex: 5;
            background: #e33;
            color: #fff;
            line-height: 1.15rem;
        }
    }
}
</style>  