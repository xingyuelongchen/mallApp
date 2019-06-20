<template>
    <div id="app" @touchstart.stop="touchStart">
        <transition :name="transitionName">
            <!-- <keep-alive> -->
            <router-view class="Router"/>
            <!-- </keep-alive> -->
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            transitionName: ""
        };
    },
    watch: {
        $route(to, from) {
            this.$router.historyArr.back.push({ path: from.path });
            if (from.path == "/") return;
            this.transitionName =
                to.meta.index < from.meta.index ? "slide-right" : "slide-left";
        }
    },
    methods: {
        // 触摸开始
        touchStart(e) {
            this.pageX = e.touches[0].pageX;
            this.pageY = e.touches[0].pageY;
            this.moveX = 0;
            this.moveY = 0;
            this.path = this.$route.meta.index;
            e.currentTarget.addEventListener("touchmove", this.touchmove);
        },
        // 触摸在屏幕上滑动
        touchmove(e) {
            this.moveX = this.pageX - e.changedTouches[0].pageX;
            e.currentTarget.addEventListener("touchend", this.touchend);
        },
        //触摸离开屏幕
        touchend(e) {
            if (!e.currentTarget) {
                return;
            }
            if (Math.abs(this.moveX) < 250) return;
            if (this.moveX < 0) {
                // 从左往右滑动
                if (this.path == 10 || this.path == 20 || this.path == 30) {
                    this.path -= 10;
                    this.$router.replace({
                        path: ["/index", "/cart", "/mine"][this.path / 10 - 1]
                    });
                } else {
                    this.$router.goBack.apply(this);
                }
            } else {
                if (this.path == 10 || this.path == 20 || this.path == 30) {
                    this.path += 10;
                    this.$router.replace({
                        path: ["/index", "/cart", "/mine"][this.path / 10 - 1]
                    });
                } else {
                    this.$router.Go.call(this);
                }
            }

            e.currentTarget.removeEventListener("touchmove", this.moveFn);
        }
    }
};
</script>

<style lang="less">
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 0.22rem;
    position: relative;
    height: 100%;
}
.Router {
    position: absolute;
    width: 100%;
    top: 0;
}

// 定义离开和进入时的样式
.slide-right-enter-active,
.slide-left-leave-active,
.slide-left-enter-active,
.slide-right-leave-active {
    transition: all 0.3s 0.1s ease-in-out;
}
.slide-right-enter,
.slide-left-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
.slide-left-enter,
.slide-right-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>
