<template>
  <div id="rili">
    <div class="date">
      <div class="week">
        <span>星期日</span>
        <span>星期一</span>
        <span>星期二</span>
        <span>星期三</span>
        <span>星期四</span>
        <span>星期五</span>
        <span>星期六</span>
      </div>
      <div class="day">
        <div>
          <span v-for="(v,i) in timeData" :key="i" :class="v.class">{{v.day}}</span>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>  
<script>
export default {

  props:{
      data:Object
  },
  data() {
    return {
      date: {
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
        week: new Date().getDay()
      },
      timeData: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var w = new Date(new Date().setDate(1)).getDay();
      var len = /(1|3|5|7|8|10|12)/.test(this.date.month) ? 31 : 30;
      if (this.date.month == 2) {
        len = this.date.year % 4 == 0 ? 29 : 28;
      }

      for (let i = 0; i < w; i++) {
        var day = new Date(
          new Date().setDate(1) - (w - i) * 24 * 60 * 60 * 1000
        ).getDate();
        day = day < 10 ? 0 + "" + day : day;
        this.timeData.push({ week: i, day, class: "c" });
      }
      for (let i = 0; i < len; i++) {
        var week = (i + w) % 7;
        this.timeData.push({ week, day: i + 1, class: "" });
      }
      for (let i = 0; i < w; i++) {
        this.timeData.push({ week: i, day: i + 1, class: "c" });
      }
    }
  }
};
</script> 
<style lang="less" scoped>
.date {
  width: 7rem;
  //   height: 5.5rem;
  margin: 0 auto;
  & > div:first-child {
    display: flex;
    span {
      flex: 1;
      text-align: center;
      height: 0.8rem;
      line-height: 0.8rem;
    }
  }
  & > div:last-child {
    & > div {
      display: flex;
      flex-wrap: wrap;
      span {
        width: 1rem;
        text-align: center;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.36rem;
        color: #000;
        margin: 0.05rem 0;
        // box-sizing: border-box;
        &.active,
        &:hover {
          border-radius: 50%;
          border: 2px solid #da2;
          margin: 0.03rem -0.02rem;
        }
        &.visitedStrat {
          border-top-left-radius: 50%;
          border-bottom-left-radius: 50%;
          // background:#fa2;
        }
        &.visited {
          background: #fa2;
        }
        &.visitedEnd {
          border-top-right-radius: 50%;
          border-bottom-right-radius: 50%;
        }
        &.c {
          color: #ccc;
        }
      }
    }
  }
}
</style>  