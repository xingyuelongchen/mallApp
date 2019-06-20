<template>
    <div id="slide" class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(v,i) in slideArr" :key="i">
                <a :href="v.href">
                    <img id="img" style="width:7.5rem" :src="v.imgUrl" :alt="v.alt">
                </a>
            </div>
        </div>
    </div>
</template>  
<script>
import Swiper from "swiper";
export default {
    props: {
        slideArr: Array
    },
    data() {
        return {
            slideList: [
                { imgUrl: "/img/slide1.png", alt: "图片1", href: "#" },
                { imgUrl: "/img/slide2.png", alt: "图片2", href: "#" }
            ]
        };
    },
    computed: {
        imgList() {
            return this.slideArr ? this.slideArr : this.slideList;
        }
    },
    mounted() {
        new Swiper(".swiper-container", {
            autoplay: true,
            loop: true,
            observer: true,
            observeParents: true,
            observeSlideChildren: true
        });
    },
};
</script> 
<style lang="less" scoped>
#slide {
    width: 100%;
    height: 3.9rem;
    overflow: hidden;
    background: #f1f1f1;
  
}
 #img{
        width: 7.5rem;
    }
</style>  