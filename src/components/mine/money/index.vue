<template>
    <div id="qianbao">
        <com-head></com-head>
        <div class="list">
            <div>
                <div>账户余额(元)</div>
                <div>1234.00</div>
            </div>
            <div>
                <div>积分</div>
                <div>120</div>
            </div>
            <div>
                <div>豆豆</div>
                <div>1130</div>
            </div>
        </div>
        <div class="info">
            <div class="title">消费明细</div>
            <div class="item">
                <div>
                    <span>
                        金额(元)：
                        <i>￥{{100}}</i>元；
                    </span>
                    <span>
                        积分：
                        <i>{{56}}</i>；
                    </span>
                    <span>
                        豆豆：
                        <i>{{56}}</i>
                    </span>
                </div>
                <div class="time">2019.06.01 13:12:10</div>
                <div class="toTitle">购物消费</div>
            </div>
            <div class="item">
                <div>
                    <span>
                        金额(元)：
                        <i>￥{{100}}</i>元；
                    </span>
                    <span>
                        积分：
                        <i>{{56}}</i>
                    </span>
                </div>
                <div class="time">2019.06.01 13:12:10</div>
                <div class="toTitle">购物消费</div>
            </div>
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
            title: "我的钱包"
        };
    }
};
</script> 
<style lang="less" scoped>
#qianbao {
    height: 100%;
    background: #f1f1f1;
}
.list {
  
    height: 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.23rem;
    background: #fff;
    margin-bottom: 0.15rem;
    & > div:nth-child(2) {
        width: 2.3rem;
        border-right: 1px solid #ccc;
        border-left: 1px solid #ccc;
    }
    & > div {
            margin: 0 auto;
        > div {
            height: 0.5rem;
            line-height: 0.5rem;
            text-align: center;
        }
        > div:first-child {
            color: #909090;
        }
        > div:last-child {
            font-size: 0.36rem;
            color: #394;
        }
    }
}
.info {
    background: #fff;
    text-align: left;
    .title {
        height: 0.75rem;
        line-height: 0.75rem;
        border-bottom: 1px solid #ccc;
        padding: 0 0.23rem;
        color: #666;
    }
    .item {
        padding: 0.23rem;
        border-bottom: 1px solid #f1f1f1;
        > div {
            height: 0.45rem;
            line-height: 0.45rem;
            i {
                font-style: normal;
                color: #e33;
            }
        }
        > div:not(:first-child) {
            color: #b3b3b3;
        }
    }
}
</style>

