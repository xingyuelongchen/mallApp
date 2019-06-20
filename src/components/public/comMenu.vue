<template>
    <div class="menu">
        <div></div>
        <div>
            <router-link
                v-for="(v,i) in menuData"
                :key="i"
                :to="v.path"
                active-class="a"
                tag="span"
                :class="[v.class,'iconfont']"
                replace
            >{{v.title}}</router-link>
        </div>
    </div>
</template>  
<script>
export default {
    props: {
        menuArr: Array
    },
    data() {
        return {
            menuList: [
                { class: "icon-home1", title: "首页", path: "/index" },
                {
                    class: "icon-shopping",
                    title: "购物车",
                    path: "/cart"
                },
                { class: "icon-user", title: "我的", path: "/mine" }
            ]
        };
    },
    computed: {
        menuData() {
            return this.menuArr ? this.menuArr : this.menuList;
        }
    },
  
    methods: {}
};
</script> 
<style lang="less" scoped>
.menu {
    > div:first-child {
        height: 1.5rem;
        width: 100%;
    }
    > div:last-child {
        position: fixed;
        bottom: -2px;
        width: 100%;
        height: 1.2rem;
        box-shadow: 0 0 5px #eee;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 99;
        color: #888;
        span {
            width: 33%;
            font-size: 0.24rem;
            &:before {
                display: block;
                font-size: 0.5rem;
                margin-bottom: 0.1rem;
            }
        }
        span.a {
            color: #fa2;
        }
    }
}
</style>  