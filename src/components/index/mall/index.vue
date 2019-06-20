<template>
    <div id="mall">
        <com-head :headObj="{type:true,title:'积分商城'}"></com-head>
        <com-slide :slideArr="slideList"></com-slide>
        <com-tab-toggle @event="event" :tabArr="tabList"></com-tab-toggle>
        <com-score :scoreArr="shopList" @event="event"></com-score>
    </div>
</template>

<script>
export default {
    props: {
        shopArr: Array
    },
    components: {
        comSlide: () => import("@/components/public/comSlide"),
        comScore: () => import("./comScore")
    },
    data() {
        return {
            index: null,
            shopData: {
                美发类: [
                    {
                        imgUrl: "/img/shopImg_1.png",
                        title: "洛黛诗香水头发护发精油干枯毛躁直卷发免洗护发素",
                        href: "#",
                        key: "132456",
                        score: 120,
                        number: 2000
                    },
                    {
                        imgUrl: "/img/shopImg.png",
                        title: "施华蔻伊采染发膏60ml",
                        href: "#",
                        key: "132456",
                        score: 120,
                        number: 2000
                    }
                ],
                形象类: [
                    {
                        imgUrl: "/img/shopImg.png",
                        title: "施华蔻伊采染发膏60ml",
                        href: "#",
                        key: "132456",
                        score: 120,
                        number: 2000
                    },
                    {
                        imgUrl: "/img/shopImg_1.png",
                        title: "洛黛诗香水头发护发精油干枯毛躁直卷发免洗护发素",
                        href: "#",
                        key: "132456",
                        score: 120,
                        number: 2000
                    }
                ],
                培训类: [
                    {
                        imgUrl: "/img/shopImg_1.png",
                        title: "洛黛诗香水头发护发精油干枯毛躁直卷发免洗护发素",
                        href: "#",
                        key: "132456",
                        score: 120,
                        number: 2000
                    },
                    {
                        imgUrl: "/img/shopImg.png",
                        title: "施华蔻伊采染发膏60ml",
                        href: "#",
                        key: "132456",
                        score: 120,
                        number: 2000
                    }
                ],
                产品类: [
                    {
                        imgUrl: "/img/shopImg.png",
                        title: "施华蔻伊采染发膏60ml",
                        href: "#",
                        key: "132456",
                        score: 120,
                        number: 2000
                    },
                    {
                        imgUrl: "/img/shopImg_1.png",
                        title: "洛黛诗香水头发护发精油干枯毛躁直卷发免洗护发素",
                        href: "#",
                        key: "132456",
                        score: 120,
                        number: 2000
                    }
                ]
            },
            slideList: [
                {
                    imgUrl: "/img/slide1.png",
                    alt: "图片1",
                    href: "#"
                },
                {
                    imgUrl: "/img/slide2.png",
                    alt: "图片2",
                    href: "#"
                }
            ]
        };
    },
    computed: {
        tabList() {
            let index = Object.keys(this.shopData);
            this.index = index[0];
            return index;
        },
        shopList() {
            return this.shopData[this.index];
        }
    },
    methods: {
        event(e) {
            if (e.source == "tabToggle") this.index = e.title;
            if(e.source == 'scoreItem'){
                this.$router.Go.call(this,{path:'/index/shopClass/details/'+e.title.key})
            }
        }
    }
};
</script> 

<style lang="less" scoped>
</style>
