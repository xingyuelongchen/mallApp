<template>
    <div id="shopclass">
        <com-head></com-head>
        <div class="content">
            <div>
                <div class="sideP"></div>
                <ul class="side">
                    <li
                        v-for="(v,i) in navList"
                        :key="i"
                        @click="index=v"
                        :class="{active:v===index}"
                    >{{v}}</li>
                </ul>
            </div>
            <div class="list">
                <div v-for="(v,i) in classList" :key="i">
                    <div class="title">
                        <span>{{v.title}}</span>
                        <span @click="fn(v.id)">更多</span>
                    </div>
                    <div class="items">
                        <div class="item" v-for="(v,i) in shopList" @click="event(v.key)" :key="i">
                            <div>
                                <img :src="v.imgUrl" alt>
                            </div>
                            <div>{{v.title}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>  
<script>
export default {
    data() {
        return {
            index: null,
            shopData: null,
             arr: [
                {
                    price: "123.00",
                    title: "护亮泽洗发水",
                    brand: "施华蔻",
                    class: "洗发水",
                    classId: "1001",
                    imgUrl: "/img/shopImg.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "100"
                },
                {
                    price: "123.00",
                    title: "护亮泽洗发水",
                    brand: "施华蔻",
                    classId: "1001",
                    class: "洗发水",
                    imgUrl: "/img/shopImg_2.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "100"
                },
                {
                    price: "123.00",
                    title: "护亮泽洗发水",
                    brand: "施华蔻",
                    classId: "1001",
                    class: "洗发水",
                    imgUrl: "/img/shopImg_1.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "100"
                },
                {
                    price: "123.00",
                    title: "护亮泽洗发水",
                    brand: "施华蔻",
                    classId: "1002",
                    class: "染发剂",
                    imgUrl: "/img/shopImg_3.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "100"
                },
                {
                    price: "123.00",
                    title: "护亮泽洗发水",
                    brand: "施华蔻",
                    class: "染发剂",
                    classId: "1002",
                    imgUrl: "/img/pic_3.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "100"
                },
                {
                    price: "123.00",
                    title: "滋养洗发水",
                    class: "染发剂",
                    classId: "2002",
                    brand: "沙宣",
                    imgUrl: "/img/pic_2.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "200"
                },
                {
                    price: "123.00",
                    title: "滋养洗发水",
                    class: "染发剂",
                    classId: "2002",
                    brand: "沙宣",
                    imgUrl: "/img/pic_2.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "200"
                },
                {
                    price: "123.00",
                    title: "滋养洗发水",
                    class: "洗发水",
                    classId: "2001",
                    brand: "沙宣",
                    imgUrl: "/img/shopImg_2.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "200"
                },
                {
                    price: "123.00",
                    title: "滋养洗发水",
                    class: "洗发水",
                    classId: "2001",
                    brand: "沙宣",
                    imgUrl: "/img/shopImg_3.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "200"
                },
                {
                    price: "123.00",
                    title: "滋养洗发水",
                    classId: "2001",
                    class: "洗发水",
                    brand: "沙宣",
                    imgUrl: "/img/shopImg_4.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "200"
                },
                {
                    price: "123.00",
                    title: "凝时洗发露",
                    brand: "威娜",
                    classId: "3001",
                    class: "洗发水",
                    imgUrl: "/img/pic_3.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "300"
                },
                {
                    price: "123.00",
                    title: "凝时洗发露",
                    class: "染发剂",
                    classId: "3002",
                    brand: "威娜",
                    imgUrl: "/img/shopImg_1.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "300"
                },
                {
                    price: "123.00",
                    title: "凝时洗发露",
                    class: "染发剂",
                    classId: "3002",
                    brand: "威娜",
                    imgUrl: "/img/shopImg_2.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "300"
                },
                {
                    price: "123.00",
                    title: "凝时洗发露",
                    brand: "威娜",
                    classId: "3001",
                    class: "洗发水",
                    imgUrl: "/img/shopImg_4.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "300"
                },
                {
                    price: "123.00",
                    title: "皮屑洗发露",
                    brand: "卡诗",
                    classId: "4001",
                    class: "洗发水",
                    imgUrl: "/img/shopImg_3.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "400"
                },
                {
                    price: "123.00",
                    title: "皮屑洗发露",
                    brand: "卡诗",
                    imgUrl: "/img/shopImg_4.png",
                    classId: "4002",
                    class: "染发剂",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "400"
                },
                {
                    price: "123.00",
                    title: "皮屑洗发露",
                    brand: "卡诗",
                    imgUrl: "/img/shopImg_2.png",
                    classId: "4002",
                    class: "染发剂",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "400"
                },
                {
                    price: "123.00",
                    title: "皮屑洗发露",
                    brand: "卡诗",
                    classId: "4001",
                    class: "洗发水",
                    imgUrl: "/img/shopImg_1.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "400"
                },
                {
                    price: "123.00",
                    title: "皮屑洗发露",
                    brand: "卡诗",
                    classId: "4001",
                    class: "洗发水",
                    imgUrl: "/img/shopImg.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "400"
                },
                {
                    price: "123.00",
                    title: "柔顺洗发露",
                    brand: "欧莱雅",
                    classId: "5001",
                    class: "洗发水",
                    imgUrl: "/img/shopImg_4.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "500"
                },
                {
                    price: "123.00",
                    title: "柔顺洗发露",
                    brand: "欧莱雅",
                    classId: "5002",
                    class: "染发剂",
                    imgUrl: "/img/shopImg.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "500"
                },
                {
                    price: "123.00",
                    title: "柔顺洗发露",
                    brand: "欧莱雅",
                    classId: "5002",
                    class: "染发剂",
                    imgUrl: "/img/pic_2.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "500"
                },
                {
                    price: "123.00",
                    title: "柔顺洗发露",
                    brand: "欧莱雅",
                    classId: "5001",
                    class: "洗发水",
                    imgUrl: "/img/shopImg_4.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "500"
                },
                {
                    price: "123.00",
                    title: "柔顺洗发露",
                    brand: "欧莱雅",
                    class: "洗发水",
                    classId: "5001",
                    imgUrl: "/img/shopImg_1.png",
                    key: "123456",
                    comment: { number: 1209 },
                    brandId: "500"
                }
            ]
        };
    },
    computed: {
        navList() {
            var shopData = {};
            // 切换展示 内容
            this.arr.forEach(e => {
                if (shopData[e.brand]) {
                    shopData[e.brand].push(e);
                } else {
                    shopData[e.brand] = [];
                    shopData[e.brand].push(e);
                }
            });
            this.shopData = shopData;
            this.index = Object.keys(shopData)[0];
            return Object.keys(shopData);
        },
        shopList() {
            return this.shopData[this.index];
        },
        classList() {
            var a =[], b = [];
            this.shopData[this.index].filter((e, i) => {
                if (a.indexOf(e.classId) == -1) {
                    a.push(e.classId);
                    b.push({ title: e.class, id: e.classId });
                }
            });
            return b;
        }
    },
    methods: {
        event(e) {
            this.$router.Go.call(this,{ path: "/index/shopClass/details/" + e });

        },
        fn(id) {
    
            this.$router.Go.call(this,{ path: "/index/shopClass/classList/" + id });
        }
    }
};
</script> 
<style lang="less" scoped>
.content {
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .sideP {
        width: 1.6rem;
        height: 0.1rem;
    }
    .side {
        position: fixed;
        width: 1.6rem;
        height: 100%;
        border-right: 1px solid #d9d9d9;
        margin: 0;
        padding: 0;
        li {
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.3rem;
            text-align: center;
            border: 0.1rem solid transparent;
            margin: 0.2rem auto;
            &.active {
                border-left: 0.1rem solid #fa2;
            }
        }
    }
    .title {
        width: 5.5rem;
        height: 1.1rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.26rem;
        color: #454545;
    }
    .items {
        width: 5.9rem;
        overflow: hidden;
        .item {
            float: left;
            width: 33%;
            height: 2.3rem;
            color: #878787;
            overflow: hidden;
            font-size: 0.24rem;
            > div:first-child {
                width: 1.8rem;
                height: 1.8rem;
                overflow: hidden;
                text-align: center;
                img {
                    width: 100%;
                }
            }
            > div:last-child {
                line-height: 0.5rem;
            }
        }
    }
}
</style>  