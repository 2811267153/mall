<template>
  <div>
    <nav-bar>
      <img src="../../assets/img/更多.png" slot="left" />
      <div slot="center"><div class="center"></div></div>
      <p slot="right">登录</p>
    </nav-bar>
    <div class="kongbai"></div>
    <tab-nav-bar
      ref="nav"
      :title="['流行', '新款', '精选']"
      @tabCilck="tabCilck"
      class="nav"
      v-show="isShow"
    />

    <!-- 轮播图 -->
    <scroll
      class="content"
      ref="scroll"
      :pull-up-load="true"
      :probe-type="3"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <swiper>
        <swiper-item v-for="item in banners" :key="item.id">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imageLoad" />
          </a>
        </swiper-item>
      </swiper>
      <!-- 推荐 -->
      <recommend :Recommends="Recommend" />
      <!-- 快捷服务 -->
      <fav />
      <!-- 顶部导航 -->
      <tab-nav-bar
        ref="nav1"
        :title="['流行', '新款', '精选']"
        @tabCilck="tabCilck"
      />
      <!-- 商品列表 -->
      <goods-list :goods-list="goods[currentIndex].list" />
    </scroll>

    <blacke-top @click.native="blackClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import navBar from "../../components/common/navBar/navBar";
import { swiper, swiperItem } from "../../components/common/swiper";
import recommend from "./home/Recommend";
import fav from "./home/fav";
import tabNavBar from "../../components/conent/tabNavBar/tabNavBar";
import goodsList from "../../components/conent/goods/goods";
import scroll from "../../common/scroll/scroll";
import blackeTop from "../../common/blakeTop/blakeTop";

import { getHomeMultidata, getGoodsData } from "../../network/home";
export default {
  name: "Home",
  components: {
    navBar,

    scroll,
    swiper,
    swiperItem,
    recommend,
    fav,
    tabNavBar,
    goodsList,
    blackeTop
  },
  data() {
    return {
      banners: [],
      Recommend: [],
      // 首页推荐
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentIndex: "pop",
      isShowBackTop: false,
      tabOffetTop: null,
      isShow: false,
      seveY: 0
    };
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.seveY);
    this.$refs.scroll.refresh()
  },

  deactivated() {
    this.seveY = this.$refs.scroll.getScrollY()
    },
  created() {
    //请求搜也推荐数据
    this.getHomeMultidata();

    //获取主体推荐内容

    this.getGoodsData("pop");
    this.getGoodsData("new");
    this.getGoodsData("sell");

    //监听item中 事件的发射
    this.$bus.$on("imgLoad", () => {
      this.$refs.scroll.refresh;
    });
  },

  methods: {
    tabCilck(index) {
      switch (index) {
        case 0:
          this.currentIndex = "pop";
          break;
        case 1:
          this.currentIndex = "new";
          break;
        case 2:
          this.currentIndex = "sell";
          break;
      }

      //两个 tabBar保持一致
      this.$refs.nav1.currentIndex = index;
      this.$refs.nav.currentIndex = index;
    },

    imageLoad() {
      this.tabOffetTop = this.$refs.nav1.$el.offsetTop;
    },

    blackClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isShow = -position.y > this.tabOffetTop;
    },
    loadMore() {
      this.getGoodsData(this.currentIndex);
    },

    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.Recommend = res.data.data.recommend.list;
      });
    },
    getGoodsData(type) {
      const page = (this.goods[type].page = 1);
      getGoodsData(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        // console.log(this.goods['pop'].list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
.center {
  width: 95%;
  background-color: #fff;
  height: 30px;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 7px;
}
.kongbai {
  width: 100%;
  height: 44px;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.nav {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>
