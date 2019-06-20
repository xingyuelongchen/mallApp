export default [
    { path: "/cart", meta: { index: 20,title:"购物车"}, component:  ()=>import("@/components/cart"), },
    { path: "/cart/order", meta: { index: 21,title:"确认订单"}, component:  ()=>import("@/components/cart/comOrder"), },

]