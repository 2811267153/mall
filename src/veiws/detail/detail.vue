<template>
    <nav-bar>
        <div class="left" slot="left"><img src="../../assets/img/icon-test.png" alt="" srcset=""></div>
        <div slot="center"><span>商品</span><span>参数</span><span>评论</span><span>推荐</span></div>
        <div class="right" slot="right"></div>
    </nav-bar>
</template>

<script>
import navBar from "../../components/common/navBar/navBar";

import { getDetail } from "../../network/detail";
export default {
    name: 'detail',
    data() {
        return {
            iid: null 
        }
    },
    components: {
        navBar
    },
    created(){

        //发送网络请求 携带id参数
        this.iid = this.$route.params.iid
        getDetail(this.iid).then(res => {
            console.log(res);
        })
    }
}
</script>

<style scoped>
.left .right{
    background-color: #fff;
}
</style>