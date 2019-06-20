
export default [

    { path: "/index", meta: { index: 10, title: "首页" }, component: () => import("@/components/index") },
    { path: "/index/coupon", meta: { index: 11, title: "领优惠券" }, component: () => import("@/components/index/coupon") },
    { path: "/index/mall", meta: { index: 12, title: "积分商城" }, component: () => import("@/components/index/mall") },
    { path: "/index/about", meta: { index: 12, title: "关于我们" }, component: () => import("@/components/index/about") },
    { path: "/index/shopClass", meta: { index: 12, title: "商品分类" }, component: () => import("@/components/index/shopClass")},
    { path: "/index/shopClass/classList/:id",meta:{index:13,title:"列表"},component:()=>import("@/components/index/shopClass/classList")},
    { path: "/index/shopClass/details/:id",meta:{index:14,title:"详情页"},component:()=>import("@/components/index/shopClass/details")},
]