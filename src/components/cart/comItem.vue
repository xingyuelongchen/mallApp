<template>
    <div id="item" @touchstart.stop="touchstart" v-show="show">
        <div>
            <span
                :class="[active?'icon-danxuankuang-copy':'icon-fuxuankuang_weixuanzhong','iconfont']"
                @click="event('check')"
            ></span>
            <div class="del" @click.stop="event('del')">删除</div>
        </div>
        <div>
            <img :src="shopData.imgUrl" alt>
        </div>
        <div>
            <div>{{shopData.title}}</div>
            <div>
                <div>
                    <div>{{shopData.spec}}</div>
                    <div>￥{{shopData.price}}</div>
                </div>
                <div>
                    <com-input :index="number" @event="event"></com-input>
                </div>
            </div>
        </div>
    </div>
</template>  
<script>
export default {
    props: {
        itemObj: Object,
        isCheck: Boolean
    },
    data() {
        return {
            shopData: null,
            show: true,
            active: false,
            number: 1,
            touch: {
                page: {
                    x: 0
                },
                move: {
                    x: 0
                }
            }
        };
    },
    watch: {
        isCheck() {
            this.active = this.isCheck > -1 ? this.isCheck : this.active;
           
            this.event();
        }
    },
    created() {
        this.shopData = JSON.parse(JSON.stringify(this.itemObj));
    },
    methods: {
        event(e) {
            if (e && e.source == "count") {
                this.shopData.number = e.number;
                this.shopData.price = (this.itemObj.price * e.number).toFixed(
                    2
                );
                this.active = e.number <= 0 ? false : this.active;
            }
            if (e === "check") {
                this.active = !this.active;
            }
            if (e == "del") {
                this.show = false;
                this.active = false;
                this.$emit("event", {
                    source: "item",
                    title: this.shopData,
                    state: false,
                    key: this.shopData.key,
                    del: true
                });
            } else {
                this.$emit("event", {
                    source: "item",
                    title: this.shopData,
                    state: this.active,
                    key: this.shopData.key,
                    number: this.shopData.number,
                    price: this.shopData.price
                });
            }
        },
        // 触摸开始
        touchstart(e) {
            this.touch.page.x =
                e.touches[0].pageX -
                e.currentTarget.style.left.replace(/\D{3}$/g, "") * 100;
            e.currentTarget.addEventListener("touchmove", this.touchmove);
        },
        // 触摸在屏幕上滑动
        touchmove(e) {
            this.touch.move.x = -(
                this.touch.page.x - e.changedTouches[0].pageX
            );
            e.currentTarget.style.left = this.touch.move.x / 100 + "rem";

            if (this.touch.move.x <= -80) {
                e.currentTarget.style.left = -1 + "rem";
            }
            if (this.touch.move.x > 0) {
                e.currentTarget.style.left = 0 + "rem";
            }
            e.currentTarget.addEventListener("touchend", this.touchend);
        },
        //触摸离开屏幕
        touchend(e) {
            if (!e.currentTarget) {
                return;
            }

            if (this.touch.move.x < 0) {
                e.currentTarget.style.left = 0 + "rem";
            }
            if (this.touch.move.x > -50) {
                e.currentTarget.style.left = 0 + "rem";
            }
            if (this.touch.move.x < -50) {
                e.currentTarget.style.left = -1 + "rem";
            }
        }
    }
};
</script> 
<style lang="less" scoped>
#item {
    padding: 0 5%;
    width: 90%;
    height: 1.75rem;
    margin: 0.3rem auto;
    box-shadow: 0 0 5px #ccc;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    .iconfont {
        font-size: 0.35rem;
        &.icon-danxuankuang-copy {
            color: #e33;
        }
    }
    .del {
        position: absolute;
        right: -1.01rem;
        width: 1rem;
        background: #e33;
        color: #fff;
        font-size: 0.24rem;
        height: 100%;
        top: 0;
        line-height: 1.75rem;
    }
    > div:first-child {
        width: 0.5rem;
    }
    > div:nth-child(2) {
        width: 1.4rem;
        height: 1.4rem;
        margin: 0.2rem;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
    > div:last-child {
        text-align: left;
        > div:first-child {
            font-size: 0.26rem;
            color: #333;
            max-height: 0.7rem;
            overflow: hidden;
        }
        > div:last-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #9a9a9a;
            > div:first-child {
                > div:first-child {
                    font-size: 0.2rem;
                    margin: 0.05rem 0;
                }
                > div:last-child {
                    color: #e33;
                    font-size: 0.3rem;
                    width:2rem;
                    overflow: hidden;
                }
            }
            > div:last-child {
                width: 2.3rem;
                height: 0.7rem;
            }
        }
    }
}
</style>  