import Vue from "vue";
import Router from "vue-router";
import homeRoutes from "./home";
import cartRoutes from "./cart";
import mineRoutes from "./mine";

Vue.use(Router);
Router.prototype.historyArr = {
  back: [],
  go: []
};
// 后退功能
Router.prototype.goBack = function (e) {
  if (this.$route.meta.index == 10) return;
  if (e == "index") {
    this.$router.replace({ path: "/index" });
    return;
  }
  let path = this.$router.historyArr.back.pop();
  this.$router.historyArr.go.push(path)
  this.$router.replace(path)
}
// 前进功能
Router.prototype.Go = function (e) {
  let path = null;
  console.log(e);
  
  if (!e) {
    if (!this.$router.historyArr.go.length) return;
    path = this.$router.historyArr.go.pop();
  }else{
    path = e;
  }
  this.$router.replace(path);

}
const routerList = [...homeRoutes, ...cartRoutes, ...mineRoutes]
export default new Router({
  mode: 'history',
  base:'mallApp/dist/',
  routes: [
    ...new Set(routerList),
    {
      path: '/error',
      name: '/error',
      meta: { index: 1 },
      component: () => import('@/components/public/comError.vue')
    },
    {
      path: '*',
      meta: { index: 2 },
      redirect: '/index'
    }
  ],

})