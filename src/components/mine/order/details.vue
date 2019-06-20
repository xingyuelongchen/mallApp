<template>
  <div id="details">
    <heade :bgColor="bgColor" :title="title"/>
    <div class="location">
      <div class="iconfont icon-GPS"></div>
      <div class="content">
        <div class="name">
          <span>收货人：张三</span>
          <span>12345678900</span>
        </div>
        <div class="location-text">
          <span>收货地址：</span>
          <span>广东省广州市天河区某某街道123号，天上人间小区2B栋2501号</span>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="item">
        <div class="top">
          <span>订单号:{{1234567890}}</span>
          <span class="red">等待卖家付款</span>
        </div>
        <div class="center">
          <div class="img">
            <img :src="imgUrl" alt>
          </div>
          <div class="text">
            <div class="title">施华蔻伊采染发膏60ml施华蔻伊采染发膏60ml施华蔻伊采染发膏60ml施华蔻伊采染发膏60ml施华蔻伊采染发膏60ml</div>
            <div class="spec">1件</div>
          </div>
          <div class="price">
            <div class="newPrice">￥120.00</div>
            <div class="oldPrice">￥220.00</div>
          </div>
        </div>
      </div>
   
    </div>
    <div class="info">
        <div>支付方式：{{'微信支付'}}</div>
        <div>商品合计：￥{{120.00}}</div>
        <div>快递运费：￥{{0.00}}</div>
        <div>促销优惠：-￥{{10.00}}</div>
    </div>
    <div class="total">实付金额：￥{{110.00}}</div>
  </div>
</template>  
<script>
export default {
  data() {
    return {
      bgColor: {
        background: "#fa2",
        color: "#fff",
      },
        imgUrl: '/img/shopImg.png',
      title: "订单详情"
    };
  },
  methods: {}
};
</script> 
<style lang="less" scoped>
#details{
  height: 100%;
    background: #f1f1f1;
  
}
.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.23rem;
  color: #666;
  background:#fff;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 6.4rem;
    font-size: 0.24rem;
    .name {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0.7rem;
      line-height: 0.7rem;
    }
    .location-text {
      width: 100%;
      height: 0.8rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.2rem;
      overflow: hidden;
      span:first-child {
        width: 1.6rem;
        font-size: 0.26rem;
      }
    }
  }
  & > div:first-child {
    font-size: 0.42rem;
    color: cornflowerblue;
  }
}
.list {
 
  .item {
    background: #fff;
    padding: 0 0.23rem;
    margin: 0.15rem 0;
    > div:first-child {
      height: 0.75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & > div:nth-child(2) {
      height: 1.7rem;
      border-top: 1px dashed #eee;
      border-bottom: 1px dashed #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .img {
        width: 1.3rem;
        height: 1.3rem;
        margin: 0.1rem;
        img {
          width: 100%;
        }
      }
      .text {
        width: 3.5rem;
        text-align: left;
        .title {
          font-size: 0.26rem;
          max-height: 1rem;
          overflow: hidden;
          color: #444;
        }
        .spec {
          font-size: 0.22rem;
          color: #ccc;
        }
      }
      .price {
        text-align: right;
        .newPrice {
          font-size: 0.36rem;
          color: #333;
        }
        .oldPrice {
          text-decoration: line-through;
          color: #ccc;
        }
      }
    }
    // > div:last-child {
    //   height: 0.85rem;
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   .info {
    //     font-size: 0.24rem;
    //     color: #666;
    //   }
    //   > div:last-child {
    //     span {
    //       display: inline-block;
    //       width: 1.2rem;
    //       height: 0.55rem;
    //       text-align: center;
    //       line-height: 0.55rem;
    //       border-radius: 5px;
    //       &:first-child {
    //         border: 1px solid #ccc;
    //       }
    //       &:last-child {
    //         background: #fa2;
    //         color: #fff;
    //       }
    //     }
    //   }
    // }

    .red {
      color: #e33;
    }
  }
}
.info{
    padding:.15rem .23rem;
    // padding-bottom:0;
    background:#fff;
    >div{
        height:.5rem;
        line-height: .5rem;
    }
}
.total{
    padding:0 .23rem;
    height:.75rem;
    line-height: .75rem;
    border-top:1px solid #ccc;
    background:#fff;
    color:#e33;
    font-size:.26rem;
}
</style>  