<template>
    <div id="qrcode">
        <com-head></com-head>
        <div class="content">
            <div class="headImg">
                <img :src="headImg" alt>
            </div>
            <div class="name">name</div>
            <div class="img">
                <img src="/img/img.png" alt>
            </div>
            <div>分享二维码给好友即可获得奖励</div>
        </div>
    </div>
</template>  
<script>
export default {
    data() {
        return {
            bgColor: {
                background: "#fa2",
                color: "#fff"
            },
            title: "我的二维码",
            headImg: "/img/user.jpg"
        };
    },
    methods: {}
};
</script> 

<style lang="less" scoped>
#qrcode {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #f1f1f1;
    .content {
        width: 6.8rem;
        background: #fff;
        border-radius: 5px;
        margin: auto;
        padding: 0.5rem 0;
        margin-top: 0.5rem;
        .headImg {
            width: 1.6rem;
            height: 1.5rem;
            border-radius: 50%;
            overflow: hidden;
            text-align: center;
            margin: 0.45rem auto;
            img {
                width: 100%;
            }
        }
        .img {
            overflow: hidden;
            margin: 0.45rem auto;
        }
    }
}
</style>  