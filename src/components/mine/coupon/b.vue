<template>
  <div id="a">
    <div v-if="isData" class="yList">
      <div class="item">
        <div>
          <div>
            全平台券
            <span>已使用</span>
          </div>
          <div>
            <div>
              ￥
              <span>10</span>
            </div>
            <div>
              <div>满80元可用</div>
              <div>仅限欧莱雅旗舰店使用</div>
            </div>
          </div>
          <div>
            使用有效期：
            <span>2019-05-23</span>至
            <span>2019-08-22</span>
          </div>
        </div>
        <div>
          立即使用
          <span></span>
        </div>
      </div>
      <div class="item">
        <div>
          <div>
            全平台券
            <span>已使用</span>
          </div>
          <div>
            <div>
              ￥
              <span>10</span>
            </div>
            <div>
              <div>满80元可用</div>
              <div>仅限欧莱雅旗舰店使用</div>
            </div>
          </div>
          <div>
            使用有效期：
            <span>2019-05-23</span>至
            <span>2019-08-22</span>
          </div>
        </div>
        <div>
          立即使用
          <span></span>
        </div>
      </div>
      <div class="item">
        <div>
          <div>
            全平台券
            <span>已使用</span>
          </div>
          <div>
            <div>
              ￥
              <span>10</span>
            </div>
            <div>
              <div>满80元可用</div>
              <div>仅限欧莱雅旗舰店使用</div>
            </div>
          </div>
          <div>
            使用有效期：
            <span>2019-05-23</span>至
            <span>2019-08-22</span>
          </div>
        </div>
        <div>
          立即使用
          <span></span>
        </div>
      </div>
      <div class="item">
        <div>
          <div>
            全平台券
            <span>已使用</span>
          </div>
          <div>
            <div>
              ￥
              <span>10</span>
            </div>
            <div>
              <div>满80元可用</div>
              <div>仅限欧莱雅旗舰店使用</div>
            </div>
          </div>
          <div>
            使用有效期：
            <span>2019-05-23</span>至
            <span>2019-08-22</span>
          </div>
        </div>
        <div>
          立即使用
          <span></span>
        </div>
      </div>
      <div class="item">
        <div>
          <div>
            全平台券
            <span>已使用</span>
          </div>
          <div>
            <div>
              ￥
              <span>10</span>
            </div>
            <div>
              <div>满80元可用</div>
              <div>仅限欧莱雅旗舰店使用</div>
            </div>
          </div>
          <div>
            使用有效期：
            <span>2019-05-23</span>至
            <span>2019-08-22</span>
          </div>
        </div>
        <div>
          立即使用
          <span></span>
        </div>
      </div>
    </div>
    <div class="kong" v-else>
      <img :src="imgUrl" alt>
    </div>
  </div>
</template>  
<script>
export default {
  data() {
    return {
      msg: "测试文本",
      imgUrl: '/img/youhuiBg.png',
      isData: true
    };
  },
  methods: {}
};
</script> 
<style lang="less" scoped>
.yList {
  list-style: none;
  padding: 0;
  color: #fff;

  .item {
    background: url(/img/couput_b.png) no-repeat center / 100% 100%;

    width: 6rem;
    height: 2.55rem;
    margin: 0.2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    padding: 0 0.63rem 0 0.5rem;
    & > div:first-child {
      & > div:first-child {
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.3rem;
        span {
          margin-left: 0.1rem;
          display: inline-block;
          width: 0.7rem;
          height: 0.35rem;
          border: 1px solid #fff;
          border-radius: 0.35rem;
          font-size: 0.16rem;
          line-height: 0.35rem;
          text-align: center;
          vertical-align: middle;
        }
      }
      & > div:nth-child(2) {
        height: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        & > div:first-child {
          width: 1rem;
          line-height: 1rem;
          span {
            font-size: 0.54rem;
          }
        }
        & > div:last-child {
          height: 0.9rem;
          font-size: 0.28rem;
        }
      }
      & > div:last-child {
        height: 0.5rem;
        font-size: 0.26rem;
      }
    }
    & > div:last-child {
      width: 0.26rem;
      height: 2.55rem;
      padding-top: 1rem;
      font-size: 0.3rem;
      position: relative;
      span {
        position: absolute;
        width: 1.7rem;
        height: 0.9rem;
        top: 1.25rem;
        right: 0;
        background: url(/img/couput_out.png) no-repeat center;
      }
    }
  }
}
</style>  