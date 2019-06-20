export default [
    { path: "/mine", meta: { index: 30,title:"个人中心" }, component:  ()=>import("@/components/mine"), },
    { path: "/mine/signin", meta: { index: 31,title:"每日签到" }, component:  ()=>import("@/components/mine/signin"), },
    { path: "/mine/address", meta: { index: 32,title:"我的地址" }, component:  ()=>import("@/components/mine/address"), },
    { path: "/mine/money", meta: { index: 33,title:"我的钱包" }, component:  ()=>import("@/components/mine/money"), },
    { path: "/mine/coupon", meta: { index: 34,title:"我的优惠券" }, component:  ()=>import("@/components/mine/coupon"), },
    { path: "/mine/qrcode", meta: { index: 35,title:"我的二维码" }, component:  ()=>import("@/components/mine/qrcode"), },
    { path: "/mine/partner", meta: { index: 36,title:"我的小伙伴" }, component:  ()=>import("@/components/mine/partner"), },
    { path: "/mine/order", meta: { index: 37,title:"订单管理" }, component:  ()=>import("@/components/mine/order"), },

];