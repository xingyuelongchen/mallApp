<template>
    <div id="crat">
        <com-head></com-head>
        <div v-if="shopArr.length>=0"  style="position:relative;width:100%;overflow:hidden">
            <com-item
                v-for="(v,i) in shopData"
                :key="v.isCheck+''+i"
                :itemObj="{...v,index:i}"
                :isCheck="isCheck"
                @event="event"
            ></com-item>
        </div>
        <div v-else>
            <com-kong :kongObj="{imgUrl:'/img/kong.png',path:'/index',title:'去看看'}"></com-kong>
        </div>
        <div>
            <div class="menu">
                <div class="ba"></div>
                <div class="content">
                    <div>
                        <div
                            :class="[active?'icon-danxuankuang-copy':'icon-fuxuankuang_weixuanzhong','iconfont']"
                            @click="event('check')"
                        >全选</div>
                    </div>
                    <div>
                        <div>
                            总计:
                            <span>{{newShopData.total}}</span>
                        </div>
                        <div>不含运费,已优惠￥0.00</div>
                    </div>
                    <div @click="event('play')">去结算(2件)</div>
                </div>
            </div>
        </div>
        <com-menu></com-menu>
    </div>
</template>  
<script>
export default {
    components: {
        comItem: () => import("./comItem")
    },
    data() {
        return {
            isCheck: false,
            active: false,
            pageX: 0,
            pageY: 0,
            moveX: 0,
            moveY: 0,

            newShopData: {
                data: [],
                total: '0.00'
            },
            shopData: [],
            shopArr: [
                {
                    title: "a欧莱雅染发膏(美丝雅、美易棕、美丝丽)",
                    imgUrl: "/img/pic_cart.png",
                    key: 456,
                    number: 1,
                    price: "123.00",
                    spec: "50g"
                },
                {
                    title: "b欧莱雅染发膏(美丝雅、美易棕、美丝丽)",
                    imgUrl: "/img/pic_cart1.png",
                    key: 123,
                    number: 1,
                    price: "123.00",
                    spec: "50g"
                }
            ]
        };
    },
    created() {
        this.shopData = JSON.parse(JSON.stringify(this.shopArr));
    },
    methods: {
    //   // 触摸开始
    //     touchStart(e) {
    //         this.pageX = e.touches[0].pageX;
    //         this.pageY = e.touches[0].pageY;
    //         this.moveX = 0;
    //         this.moveY = 0;
    //         this.path = this.$route.meta.index;
    //         e.currentTarget.addEventListener("touchmove", this.touchmove);

    //         // console.log('start');
            
    //     },
    //     // 触摸在屏幕上滑动
    //     touchmove(e) {
    //         this.moveX = (this.pageX - e.changedTouches[0].pageX);
    //         e.currentTarget.addEventListener("touchend", this.touchend);
    //         // console.log('move');
    //         // alert('move')
    //     },
    //     //触摸离开屏幕
    //     touchend(e) {
        
            
    //         if (!e.currentTarget) {
    //             return;
    //         }
    //         if (Math.abs(this.moveX) < 250) return;
    //         if (this.moveX < 0) {
    //             // 从左往右滑动
    //             this.path -= 10;
    //         } else {
    //             this.path += 10;
    //         }

    //         this.$router.replace({
    //             path: ["/index", "/cart", "/mine"][this.path / 10 - 1]
    //         });
    //         e.currentTarget.removeEventListener("touchmove", this.moveFn);
    //     },
        event(e) {
            if (e && e.source == "item") {
                if (e.state) {
                    let index = -1;
                    this.newShopData.data.forEach((key, i) => {
                        if (e.key == key.key) index = i;
                    });
                    if (index == -1) {
                        this.newShopData.data.push(e.title);
                    } else {
                        this.newShopData.data.splice(index, 1, e.title);
                    }
                } else {
                    let index = -1;
                    this.newShopData.data.forEach((key, i) => {
                        if (e.key == key.key) index = i;
                    });
                    this.newShopData.data.splice(index, 1);
                }
                if (e && e.del) {
                    let index = 0;
                    this.shopData.forEach((key, i) => {
                        if (e.key == key.key) index = i;
                    });
                    this.shopArr.splice(index, 1);
                }
                this.active =
                    this.newShopData.data.length == this.shopArr.length;
                let total = 0;
                this.newShopData.data.forEach(e => {
                    total += Number(e.price);
                });
                this.newShopData.total = total.toFixed(2);
            }
            if (e == "check") {
                this.isCheck = !this.isCheck;
            }
            if (e == "play") {
                this.$router.replace({ path: "/cart/order" });
            }
        }
    }
};
</script> 
<style lang="less" scoped>
#crat {
    height: 100%;
    .iconfont {
        font-size: 0.24rem;
        &.icon-danxuankuang-copy {
            &:before {
                color: #e33;
                margin-right: 0.15rem;
                vertical-align: top;
            }
        }
    }
}
.menu {
    .ba {
        height: 1.15rem;
    }
    .content {
        position: fixed;
        bottom: 1.2rem;
        width: 100%;
        height: 1.15rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        & > div {
            text-align: center;
            line-height: 1.15rem;
            font-size: 0.3rem;
            flex: 3;
        }
        & > div:first-child {
            color: #888;
            height: 1.15rem;
            > div:first-child {
                &:before {
                    font-size: 0.35rem;
                }
                font-size: 0.24rem;
            }
        }
        > div:nth-child(2) {
            color: #fff;
            background: #fff;
            line-height: inherit;
            > div:first-child {
                font-size: 0.26rem;
                color: #333;
                height: .45rem;
                span {
                    color: #e33;
                }
            }
            > div:last-child {
                color: #a4a4a4;
                font-size: 0.2rem;
            }
        }
        > div:last-child {
            background: #fa2;
            color: #fff;
            line-height: 1.15rem;
        }
    }
}
</style>  