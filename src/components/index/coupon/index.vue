<template>
    <div id="couput">
        <com-head></com-head>
        <com-tab-toggle @event="event" :tabArr="list"></com-tab-toggle>
        <div class="warp">
            <com-couput :couputArr="couputList"></com-couput>
        </div>
        
    </div>
</template>  
<script>
export default {
    components: {
        comCouput: () => import("./comCoupon")
    },
    data() {
        return {
            index: null,
            List: {
                欧莱雅: [
                    {
                        title: "欧莱雅旗舰店",

                        price: 10,
                        goal: 80,
                        time: "2019-06-10 至 2019-09-09"
                    },
                    {
                        title: "欧莱雅旗舰店",
                        price: 10,
                        goal: 80,
                        time: "2019-06-10 至 2019-09-09"
                    }
                ],
                维娜: [
                    {
                        title: "维娜旗舰店",

                        price: 10,
                        goal: 80,
                        time: "2019-06-10 至 2019-09-09"
                    },
                    {
                        title: "维娜旗舰店",
                        price: 10,
                        goal: 80,
                        time: "2019-06-10 至 2019-09-09"
                    }
                ],
                施华蔻: [
                    {
                        title: "施华蔻旗舰店",

                        price: 10,
                        goal: 80,
                        time: "2019-06-10 至 2019-09-09"
                    },
                    {
                        title: "施华蔻旗舰店",
                        price: 10,
                        goal: 80,
                        time: "2019-06-10 至 2019-09-09"
                    }
                ],
                美奇丝: [
                    {
                        title: "美奇丝旗舰店",

                        price: 10,
                        goal: 80,
                        time: "2019-06-10 至 2019-09-09"
                    },
                    {
                        title: "美奇丝旗舰店",
                        price: 10,
                        goal: 80,
                        time: "2019-06-10 至 2019-09-09"
                    }
                ],
                卡诗: [
                    {
                        title: "卡诗旗舰店",

                        price: 10,
                        goal: 80,
                        time: "2019-06-10 至 2019-09-09"
                    },
                    {
                        title: "卡诗旗舰店",
                        price: 10,
                        goal: 80,
                        time: "2019-06-10 至 2019-09-09"
                    }
                ]
            }
        };
    },
    computed: {
        list() {
            let index = Object.keys(this.List);
            this.index = index[0];
            return index;
        },
         couputList() {
            return this.List[this.index];
        }
    },
    methods: {
        event(obj) {
            this.index = obj.title;
        },

    }
};
</script> 
<style lang="less" scoped>
.warp {
    border-top: 0.23rem solid #f1f1f1;
}
</style>  