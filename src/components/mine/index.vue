<template>
    <div id="mine" >
        <com-head></com-head>
        <div class="userInfo">
            <div>
                <div>
                    <img src="/img/user.jpg" alt="user">
                </div>
                <div>
                    <div>name</div>
                    <div>v1</div>
                </div>
            </div>
            <div>
                <button @click.stop="event('signin')">每日签到</button>
            </div>
        </div>
        <com-menu id="menu" :menuArr="navList"></com-menu>
        <div class="optiomList">
            <router-link v-for="(v,i) in list" :key="i" :to="v.path" tag="div" replace>
                <span :class="['iconfont', v.class]">{{v.title}}</span>
                <span>{{v.description}}</span>
            </router-link>
        </div>
        <com-menu></com-menu>
    </div>
</template>  
<script>
export default {
    data() {
        return {
            msg: "我的",
            pageX: 0,
            pageY: 0,
            moveX: 0,
            moveY: 0,
            navList: [
                {
                    class: "icon-dingdan",
                    title: "全部订单",
                    path: "/mine/order#all"
                },
                {
                    class: "icon-daifukuan",
                    title: "待发货",
                    path: "/mine/order#send"
                },
                {
                    class: "icon-kuaidi",
                    title: "待收货",
                    path: "/mine/order#accept"
                }
            ],
            list: [
                {
                    class: "icon-GPS",
                    title: "地址管理",
                    path: "/mine/address"
                },
                {
                    class: "icon-qianbao",
                    title: "我的钱包",
                    description: "234余额，567积分，890豆豆",
                    path: "/mine/money"
                },
                {
                    class: "icon-youhuiquan",
                    title: "我的优惠券",
                    path: "/mine/coupon"
                },
                {
                    class: "icon-qrcode",
                    title: "我的二维码",
                    path: "/mine/qrcode"
                },
                {
                    class: "icon-user1",
                    title: "我的小伙伴",
                    path: "/mine/partner"
                }
            ]
        };
    },
    methods: {
        //  // 触摸开始
        // touchStart(e) {
        //     this.pageX = e.touches[0].pageX;
        //     this.pageY = e.touches[0].pageY;
        //     this.moveX = 0;
        //     this.moveY = 0;
        //     this.path = this.$route.meta.index;
        //     e.currentTarget.addEventListener("touchmove", this.touchmove);
            
        // },
        // // 触摸在屏幕上滑动
        // touchmove(e) {
        //     this.moveX = (this.pageX - e.changedTouches[0].pageX);
        //     e.currentTarget.addEventListener("touchend", this.touchend);
        //     // console.log('move');
        //     // alert('move')
        // },
        // //触摸离开屏幕
        // touchend(e) {
        
            
        //     if (!e.currentTarget) {
        //         return;
        //     }
        //     if (Math.abs(this.moveX) < 250) return;
        //     if (this.moveX < 0) {
        //         // 从左往右滑动
        //         this.path -= 10;
        //     } else {
        //         this.path += 10;
        //     }

        //     this.$router.replace({
        //         path: ["/index", "/cart", "/mine"][this.path / 10 - 1]
        //     });
        //     e.currentTarget.removeEventListener("touchmove", this.moveFn);
        // },
        event(e) {
            if (e == "signin") {
               this.$router.Go.call(this,{path:'/mine/signin'})
                return true;
            }
        }
    }
};
</script> 
<style lang="less" scoped>
#mine {
    height: 100%;
    .userInfo {
        background: #fa2;
        height: 2rem;
        padding: 0 0.23rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > div {
            flex: 1;
            &:first-child {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                > div:first-child {
                    border: 0.08rem solid #fff;
                    border-radius: 50%;
                    width: 1.6rem;
                    height: 1.5rem;
                    overflow: hidden;
                    box-sizing: border-box;
                    img {
                        width: 100%;
                        fill: cover;
                    }
                }
                > div:last-child {
                    padding-left: 0.25rem;
                    color: #fff;
                    font-size: 0.3rem;
                    text-align: left;
                    > div:last-child {
                        color: #222;
                        font-style: italic;
                        padding-top: 0.1rem;
                    }
                }
            }
            &:last-child {
                text-align: right;
                padding-right: 0.4rem;
                button {
                    width: 1.6rem;
                    height: 0.7rem;
                    background: #fff;
                    color: #fa2;
                    border-radius: 0.05rem;
                    border: none;
                    font-size: 0.26rem;
                }
            }
        }
    }

    #menu /deep/ div {
        &:last-child {
            position: relative;
            height: 1.4rem;
        }
        &:first-child {
            display: none;
        }
    }
    .optiomList {
        border-top: 0.2rem solid #f1f1f1;
        > div {
            height: 1.2rem;
            border: 1px solid #d9d9d9;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.26rem;
            padding: 0 0.3rem;
            vertical-align: middle;
            span {
                &:first-child {
                    &:before {
                        color: #fa2;
                        font-size: 0.4rem;
                        padding-right: 0.2rem;
                    }
                }
                &:nth-child(2) {
                    color: #fa2;
                }
            }
        }
    }
}
</style>  