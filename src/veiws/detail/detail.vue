<template>
  <div>
    <tab-bar></tab-bar>
    <!-- 轮播图 -->
    <swiper class="swiper-item">
      <swiper-item v-for="item in topImages" :key="item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import tabBar from "../../common/tabBar/tabBat";
import { swiper, swiperItem } from "../../components/common/swiper";

import { getDetail } from "../../network/detail";
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: null
    };
  },
  components: {
    tabBar,
    swiper,
    swiperItem
  },
  created() {
    //发送网络请求 携带id参数
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      console.log(res);

      this.topImages = res.data.result.itemInfo.topImages;
    });
  }
};
</script>

<style scoped>
.swiper-item{
  height: 300px;
  overflow: hidden;
}
</style>
