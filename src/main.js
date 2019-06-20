import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/base/js/dprAuto";
import "./assets/fonts/iconfont.css";
Vue.config.productionTip = false;
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)


// 注册全局组件 ============

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

// const requireComponent = require.context(path,bool,exp);
// 配置全局组件所在目录,是否查询子目录,匹配符合全局注册的组件名,
// 返回一个 keys 为组件名,values为组件内容的隐形Object, 
// 使用对象的 keys 方法获取键名,通过遍历获取的 keys 
const requireComponent = require.context("./components/public", false, /com[A-Z]\w+\.(vue|js)$/)
// console.log(requireComponent.keys);

// 遍历获取到的目录文件
requireComponent.keys().forEach(fileName => {

  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})
// 全局 注册组件结束
// 前置路由守卫
router.beforeEach((to, from, next) => {

  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
