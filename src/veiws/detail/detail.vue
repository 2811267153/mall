<template>
  <div id="detail">
    <tab-bar class="tab-nav"></tab-bar>
    <!-- 轮播图 -->
    <scroll ref="scroll">
      <swiper class="swiper-item">
        <swiper-item v-for="item in topImages" :key="item">
          <img :src="item" alt="" />
        </swiper-item>
      </swiper>

      <!-- 商品信息展示 -->
      <goods :goods-info="goodsInfo" />

      <!-- 商家信息展示 -->
      <shop :shop="shop" />

      <!-- 评论信息展示 -->
      <comment-info :commentInfo='commentInfo' />

      <!-- 商品信息展示 -->
      <detail-info :detail-info="detailInfo" @imgLoad="imgLoad" />

      <!-- 商品的详细 数据展示 -->
      <detail-params :goodsparam="goodsparam"/>

      <!-- 商品推荐数据的展示 -->
      <goods-list :goods-list='recommend'/>
    </scroll>
  </div>
</template>

<script>
import tabBar from "../../common/tabBar/tabBat";
import { swiper, swiperItem } from "../../components/common/swiper";
import goods from "./components/goods/goods";
import shop from "./components/shop/shop";
import commentInfo from './components/commentInfo';

import scroll from "../../common/scroll/scroll";

import detailInfo from "./components/detailInfo";
import detailParams from './components/detailParams';
import goodsList from '../../components/conent/goods/goods';

import { getDetail, getRecmmend,Goods, Shop, goodsparams } from "../../network/detail";
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: null,
      goodsInfo: {},
      shop: {},
      detailInfo: {},
      goodsparam: {},
      commentInfo: {},
      recommend: []
    };
  },
  components: {
    tabBar,
    scroll,

    swiper,

    swiperItem,
    goods,
    shop,
    commentInfo,
    detailInfo,
    detailParams,
    goodsList
  },
  created() {
    //发送网络请求 携带id参数
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      const data = res.data.result;

      this.topImages = res.data.result.itemInfo.topImages;

      //创建商品信息
      this.goodsInfo = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //获取 店铺信息
      this.shop = new Shop(data.shopInfo);

      //获取 商品详情数据
      this.detailInfo = data.detailInfo;

      //获取商品详细数据
      this.goodsparam = new goodsparams(data.itemParams.info, data.itemParams.rule)

      //获取 评论信息
      if(data.rate.cRate != 0){
        this.commentInfo = res.data.data.list[0]
      }
      
    });

    //获取  推荐数据
    getRecmmend().then(res => {
      this.recommend = res.data.data.list;
    })
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #f6f6f6;

  height: 100vh;
}
.swiper-item {
  height: 300px;
  overflow: hidden;
}
.wrapper {
  height: 100vh;
}
.wrapper .content {
  height: calc(100% - 44px);
  padding-bottom: 20px;
}
.tab-nav {
  position: relative;
  z-index: 10;
}
</style>
