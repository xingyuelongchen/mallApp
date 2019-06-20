<template>
    <div id="about">
        <com-head></com-head>
        <div class="content">
            <div class="logo">
                <img src="/img/logo.png" alt="logo">
            </div>
            <div
                class="text"
            >千潮惠在线销售专业美发品牌包括欧莱雅、威娜、施华蔻、卡诗、美奇丝、资生堂、TIGI、歌薇、妍多娜、欧芭、菲灵、艾索、卡碧丝、韩国高丽等十数个国内外一线品牌，产品超过2000多个品种，保证正货！千潮惠供应价格平均低于市场价20%，为美发店的低成本高品质运作提供强有力的支持。</div>
            <div class="code">
                <img src="/img/about_code.png" alt>
            </div>
            <div class="tel">
                <a href="tel:0000000">拨打客服热线</a>
            </div>
        </div>
    </div>
</template>  
<script>
export default {
    components: {
        comHead: () => import("@/components/public/comHead")
    },
    data() {
        return {
            msg: "测试文本"
        };
    },
    methods: {}
};
</script> 
<style lang="less" scoped>
#about {
    .content {
        .logo {
            height: 2.2rem;
            text-align: center;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .text {
            width: 85%;
            height: 3.5rem;
            margin: 0 auto;
            text-indent: 0.1rem;
            text-align: left;
            color: #666;
            font-size: 0.26rem;
        }
        .code{
           width:75%;
           margin:0 auto;
        }
        .tel{
           height:2rem;
           line-height:2rem;
           a{
              display:inline-block;
              width: 2.8rem;
              height:.9rem;
              line-height: .9rem;
              text-align: center;
              color:#fff;
              border-radius:.05rem;
              margin:.1rem auto;
              font-size:.26rem;
              background:#fa2;
              text-decoration: none;
           }
        }
    }
}
</style>  