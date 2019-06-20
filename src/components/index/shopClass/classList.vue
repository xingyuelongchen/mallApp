<template>
    <div id="classList">
        <com-head></com-head>
        <div class="search">
            <input type="text" placeholder="请输入内容">
        </div>
        <div id="shopList">
            <div class="item" v-for="(v,i) in shopList" :key="i" @click="event(v,i)">
                <div class="img">
                    <img :src="v.imgUrl" alt>
                </div>
                <div class="content">
                    <div class="title">{{v.title}}</div>
                    <div class="price">
                        <span>￥{{v.price}}</span>
                    </div>
                    <div class="over">{{v.comment.number}}条评论</div>
                </div>
            </div>
        </div>
    </div>
</template>  
<script>
export default {
    data() {
        return {
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
        shopList() {
            var id = this.$route.params.id;
            return this.arr.filter(e => {
                if (e.classId == id) {
                    return e;
                }
            });
        }
    },
    methods: {
        event(v, i) {
            this.$router.Go.call(this,{ path: "/index/shopClass/details/" + v.key });
        }
    }
};
</script> 
<style lang="less" scoped>
.search {
    background: #fff;
    margin-top: 0.3rem;
    height: 1.5rem;
    line-height: 1.5rem;
    input {
        width: 6.2rem;
        height: 0.77rem;
        border: 1px solid #979797;
        border-radius: 0.77rem;
        outline: none;
        color: #999;
        text-align: center;
        font-size: 0.28rem;
        &::placeholder {
            color: #999;
        }
    }
}
#shopList {
    background: #fff;

    .item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 7rem;
        height: 2rem;
        margin: auto;
        // box-shadow: 0 0 0.2rem #ccc;
        margin-bottom: 0.3rem;
        background: #fff;
        border-bottom: 1px solid #d1d1d1;

        .img {
            width: 1.6rem;
            height: 1.6rem;
            margin: 0.2rem;
            border-radius: 0.05rem;
            overflow: hidden;

            img {
                width: 100%;
                // height: 100%;
            }
        }

        .content {
            width: 4rem;
            height: 1.3rem;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            overflow: hidden;
            text-align: left;

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