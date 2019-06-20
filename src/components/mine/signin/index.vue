<template>
    <div id="signin">
        <com-head></com-head>
        <div class="content">
            <rili></rili>
            <button>签到</button>
        </div>
        <div class="info">
            <h5>签到规则：</h5>
            <ol>
                <li>每次签到获得1积分奖励；</li>
                <li>连续签到3天第3天可得到5积分的奖励；</li>
                <li>连续签到10天第10天可获得10点积；</li>
            </ol>
            <h5>其他说明：</h5>
            <ol>
                <li>如果有一天间断未签到，重新开始计算连续签到时间；</li>
                <li>连续签到次数越多，优惠也就越多哦，达到十天之后重新计算；</li>
            </ol>
        </div>
    </div>
</template>  
<script>
import rili from "./rili";
export default {
    components: {
        rili
    },
    data() {
        return {
            bgColor: {
                background: "#fa2",
                color: "#fff"
            },
            title: "签到",
            // date: {
            //     month: new Date().getMonth() + 1,
            //     day: new Date().getDate(),
            //     week: new Date().getDay()
            // },
            // timeData: []
        };
    },
};
</script> 
<style lang="less" scoped>
#signin {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    bottom: 0;
    background: #f1f1f1;
    // margin-top: 0.88rem;
    .content {
        width: 100%;
        // height:7.3rem;
        padding: 0.2rem 0;
        background: #fff;
        text-align: center;
        button {
            width: 2.55rem;
            height: 0.85rem;
            background: #fa2;
            border-radius: 5px;
            color: #fff;
            outline: none;
            border: none;
            font-size: 0.24rem;
            margin: 0.2rem 0;
        }
    }
    .info {
        padding: 0.2rem 0.23rem;
        text-align: left;
        h5 {
            padding: 0;
            margin: 0;
            height: 0.6rem;
            line-height: 0.6rem;
        }
        ol {
            margin: 0;
            height: 100%;
            // padding:0;
            li {
                height: 0.5rem;
                line-height: 0.3rem;
            }
        }
    }
}
</style>  