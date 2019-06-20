<template>
    <div id="location">
        <com-head></com-head>
        <div class="list" v-if="page.status == 'show'">
            <div class="item">
                <div>
                    <div>Liaju</div>
                    <div>默认地址</div>
                </div>
                <div>
                    <div>123456789</div>
                    <div>广州市天河区珠江新城华夏路49号津滨越大厦A1栋2303</div>
                </div>
                <div class="iconfont icon-xiugai"></div>
            </div>
            <div class="item">
                <div>
                    <div>Liaju</div>
                    <div>默认地址</div>
                </div>
                <div>
                    <div>123456789</div>
                    <div>广州市天河区珠江新城华夏路49号津滨越大厦A1栋2303</div>
                </div>
                <div class="iconfont icon-xiugai"></div>
            </div>
        </div>
        <div class="change" v-if="page.status == 'change' || page.status == 'add'  ">
            <ul>
                <li>
                    <input type="text" placeholder="姓名">
                </li>
                <li>
                    <input type="text" placeholder="手机号码">
                </li>
                <li>
                    <input type="text" placeholder="省份、城市、区县">
                    <span class="iconfont icon-right"></span>
                </li>
                <li>
                    <input type="text" placeholder="详细地址，如街道、小区、楼牌号等">
                </li>
                <li @click.stop="isAllClick">
                    <span
                        :class="[isAll?'icon-danxuankuang-copy':'icon-fuxuankuang_weixuanzhong','iconfont']"
                    ></span>
                    设为默认地址
                </li>
            </ul>

            <button @click="submitClick">确定</button>
        </div>
        <img v-else-if="page.status == ''" :src="locationBg" alt width="100%">
        <div
            class="addLocation"
            v-if="page.status == 'show' || page.status == ''"
            @click="submitClick('add')"
        >新增地址</div>
    </div>
</template>  
<script>
export default {
    data() {
        return {
            headStyle: {
                background: "#fa2",
                color: "#fff"
            },
            // title: "地址管理",
            getData: null,
            page: {
                status: "show",
                title: "修改地址"
            },
            isAll: true,
            locationBg: "/img/location.jpg"
        };
    },
    methods: {
        isAllClick() {
            this.isAll = !this.isAll;
        },
        submitClick(e) {
            if (e == "add") {
                this.page.status = "add";
            }
        }
    }
};
</script> 
<style lang="less" scoped>
#location {
    background: #f1f1f1;
    height: 100%;

    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.23rem;
        background: #fff;
        color: #666;
        margin-bottom: 0.23rem;
        .icon-xiugai {
            font-size: 0.36rem;
        }
        & > div:first-child {
            flex: 2;
            text-align: left;
            overflow: hidden;
            height: 1.6rem;
            line-height: 0.45rem;
            & > div:last-of-type {
                color: #b21;
            }
        }
        & > div:last-child {
            flex: 1;
            text-align: right;
        }
        & > div:nth-of-type(2) {
            overflow: hidden;
            height: 1.6rem;
            flex: 5;
            text-align: left;
            line-height: 0.45rem;
        }
    }
    .addLocation {
        margin: 0 auto;
        width: 3.5rem;
        height: 1rem;
        border: 1px solid #fa2;
        border-radius: 0.05rem;
        color: #fa2;
        font-size: 0.3rem;
        text-align: center;
        line-height: 1rem;
        margin-top: 1rem;
        background: #fff;
    }
    .change {
        text-align: center;
        background: #fff;
        ul {
            list-style: none;
            padding: 0 0.23rem;
            margin: 0;
            li {
                width: 100%;
                height: 1rem;
                line-height: 1rem;
                border-bottom: 1px solid #ccc;
                text-indent: 0.15rem;
                text-align: left;
                input {
                    border: none;
                    width: 90%;
                    height: 100%;
                    background: none;
                    font-size: 0.24rem;
                }
                & > span {
                    width: 0.35rem;
                    height: 0.35rem;
                    font-size: 0.35rem;
                    color: #d1d1d1;
                    font-weight: bold;
                    position: relative;
                    &.icon-danxuankuang-copy {
                        color: #e33;
                    }
                }
            }
        }
        button {
            background: #fa2;
            border: none;
            width: 3.5rem;
            height: 1rem;
            color: #fff;
            font-size: 0.24rem;
            margin: 0.5rem auto;
        }
    }
}
</style>  