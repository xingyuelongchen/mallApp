<template>
    <div id="index">
        <com-head :headStr="{type:true}"></com-head>
        <com-slide :slideArr="arr"></com-slide>
        <com-nav :navArr="navList"></com-nav>
        <div class="search">
            <input type="text" placeholder="请输入内容">
        </div>
        <com-tab-toggle :tabArr="tabList" @event="event"></com-tab-toggle>
        <com-discount :shopArr="shopList" @event="event"></com-discount>
        <div class="signin">
            <div class="bg">
                <span>
                    <img src="/img/sigin.png" alt>
                </span>
            </div>
            <div>
                <div>
                    你已经连续签到
                    <span>0</span> 天
                </div>
                <div>签到可获得豆豆奖励！</div>
            </div>
            <div @click.stop="event('signin')">立即签到</div>
        </div>
        <com-menu></com-menu>
    </div>
</template>  
<script>
export default {
    components: {
        comMenu: () => import("../public/comMenu"),
        comSlide: () => import("../public/comSlide"),
        comNav: () => import("../public/comNav"),
        comDiscount: () => import("./comDiscount")
    },
    data() {
        return {
            index: 0,
            tabList: ["待进行", "热销中", "已结束"],
            pageX: 0,
            pageY: 0,
            moveX: 0,
            moveY: 0,
            navList: [
                {
                    imgUrl: "/img/icon_a.png",
                    alt: "coupon",
                    href: "/index/coupon",
                    title: "领优惠券"
                },
                {
                    imgUrl: "/img/icon_b.png",
                    alt: "mall",
                    href: "/index/mall",
                    title: "积分商城"
                },
                {
                    imgUrl: "/img/icon_c.png",
                    alt: "about",
                    href: "/index/about",
                    title: "关于我们"
                },
                {
                    imgUrl: "/img/icon_d.png",
                    alt: "shopClass",
                    href: "/index/shopClass",
                    title: "商品分类"
                }
            ],
            shopData: [
                [
                    {
                        title: "施华蔻伊采染发膏60ml",
                        key: 123,
                        price: "120.00",
                        time: "20:00 - 23:00",
                        imgUrl: "/img/shopImg.png",
                        btn: "立即预约"
                    },
                    {
                        title: "施华蔻伊采染发膏60ml",
                        key: 123,
                        price: "120.00",
                        time: "20:00 - 23:00",
                        imgUrl: "/img/shopImg.png",
                        btn: "立即预约"
                    }
                ],
                [
                    ({
                        title: "施华蔻伊采染发膏60ml",
                        price: "120.00",
                        time: "20:00 - 23:00",
                        key: 123,
                        plan: 27,
                        imgUrl: "/img/shopImg.png",
                        btn: "立即抢购"
                    },
                    {
                        title: "施华蔻伊采染发膏60ml",
                        price: "120.00",
                        time: "20:00 - 23:00",
                        key: 123,
                        plan: 27,
                        imgUrl: "/img/shopImg.png",
                        btn: "立即抢购"
                    })
                ],
                [
                    {
                        title: "施华蔻伊采染发膏60ml",
                        price: "120.00",
                        key: 123,
                        number: 800,
                        imgUrl: "/img/shopImg.png",
                        btn: "已结束"
                    },
                    {
                        title: "施华蔻伊采染发膏60ml",
                        price: "120.00",
                        key: 123,
                        number: 800,
                        imgUrl: "/img/shopImg.png",
                        btn: "已结束"
                    }
                ]
            ],
            arr: [
                { imgUrl: "/img/slide1.png", alt: "图片1", href: "#" },
                { imgUrl: "/img/slide2.png", alt: "图片2", href: "#" }
            ]
        };
    },
    computed: {
        shopList() {
            return this.shopData[this.index];
        }
    },
    methods: {
        event(e) {
            if (e == "signin") {
                this.$router.Go.call(this, {
                    path: "/mine/signin"
                });
                return true;
            }
            if (e.source == "discountItem") {
                this.$router.Go.call(this, {
                    path: "/index/shopClass/details/" + e.title.key
                });
                return true;
            }
            if (e.title.btn == "已结束") return;
            if (e.source == "tabToggle") this.index = e.index;
        }
    }
};
</script> 
<style lang="less" scoped>
#index {
    background: #f1f1f1;
    height: 100%;
}
.search {
    background: #fff;
    height: 1rem;
    border-top: 0.2rem solid #f1f1f1;
    line-height: 1.5rem;
    input {
        width: 6.2rem;
        height: 0.77rem;
        border-radius: 0.77rem;
        background: #fa2;
        outline: none;
        border: none;
        color: #fff;
        text-align: center;
        font-size: 0.28rem;
        &::placeholder {
            color: #fff;
        }
    }
}
.signin {
    width: 90%;
    height: 1.3rem;
    border: 1px dashed #f1f1f1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    > div:last-child {
        width: 0.65rem;
        height: 0.65rem;
        padding: 0.23rem;
        border-radius: 50%;
        text-align: center;
        font-size: 0.24rem;
        color: #fff;
        background: #fa2;
        margin-right: 0.35rem;
    }
    > div:first-child {
        position: relative;
        height: 100%;
        width: 1.5rem;
        span {
            position: absolute;
            bottom: 0;
            left: -0.26rem;
            width: 1.6rem;
            height: 1.5rem;
            img {
                width: 100%;
            }
        }
    }
    > div:nth-child(2) {
        width: 2.6rem;
        text-align: left;
        div {
            font-size: 0.24rem;
            color: #666;
            span {
                color: #fa2;
                font-size: 0.26rem;
            }
        }
    }
}
</style>  