<template>
<div id="all">
    <div v-if="isData" class="a">
      <div class="list">
        <div class="item">
          <div class="top">
            <span>订单号:{{1234567890}}</span>
            <span class="red">已完成</span>
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
              <div class="newPrice">￥123.00</div>
              <div class="oldPrice">￥220.00</div>
            </div>
          </div>
          <div class="bottom">
            <div class="info">合计￥120.00（含运费￥0.00）</div>
            <div>
              <span>删除订单</span>
              <span>付款</span>
            </div>
          </div>
        </div>
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
              <div class="newPrice">￥123.00</div>
              <div class="oldPrice">￥220.00</div>
            </div>
          </div>
          <div class="bottom">
            <div class="info">合计￥120.00（含运费￥0.00）</div>
            <div>
              <span>删除订单</span>
              <span>付款</span>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div v-else style="text-align:center">
       <img :src="orderBg" alt="" width="100%">
     </div>
</div>  
</template>  
<script>
export default {

  data() {
    return {
      imgUrl: '/img/shopImg.png',
      orderBg:'/img/orderBg.png',
      isData:true
    };
  },
  methods: {
    spanClick: function(e) {
      if (e.target.nodeName != "SPAN") return;

      [...e.target.parentNode.children].forEach((item, index) => {
        item.removeAttribute("class", "");
      });
      e.target.setAttribute("class", "active");
      this.itemIndex = [...e.target.parentNode.children].indexOf(e.target);
    }
  }
};
</script> 
<style lang="less" scoped>
#order {
  height: 100%;
  .a{
    background: #f1f1f1;
  }
}
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fa2;
  color: #fff;
  span {
    padding-bottom: 0.1rem;
    height: 0.8rem;
    width: 25%;
    text-align: center;
    line-height: 0.8rem;

    &.active {
      border-bottom: 3px solid #fff;
    }
  }
}
.list {

  .item {
    background: #fff;
    padding: 0 0.23rem;
    margin-bottom: 0.15rem;
    > div:first-child {
      height: 0.75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & > div:nth-child(2) {
      height: 1.4rem;
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
    > div:last-child {
      height: 0.85rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .info {
        font-size: 0.24rem;
        color: #666;
      }
      > div:last-child {
        span {
          display: inline-block;
          width: 1.2rem;
          height: 0.55rem;
          text-align: center;
          line-height: 0.55rem;
          border-radius: 5px;
          &:first-child {
            border: 1px solid #ccc;
          }
          &:last-child {
            background: #fa2;
            color: #fff;
          }
        }
      }
    }

    .red {
      color: #e33;
    }
  }
}
</style>   