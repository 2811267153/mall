<template>
  <div class="tab-bar">
    <div class="tab-bar-item verge" @click="blackClick">
      <img src="../../assets/img/icon-test.png" alt="" />
    </div>
    <div class="tab-bar-item center">
      <span
        v-for="(item, index) in titles"
        :key="index"
        @click="tabBarClick(index)"
        :class="{active: index === currentIndex}"
        >{{ item }}</span
      >
    </div>
    <div class="tab-bar-item verge"><div class="right"></div></div>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
    
  },
  methods: {
      tabBarClick(index){
        this.currentIndex = index
      },
      blackClick(){
          this.$router.back()
      }
  }
};
</script>

<style scoped>
.tab-bar {
  background-color: var(--color-background);
  display: flex;
}
.verge {
  width: 60px;
  height: 44px;
  text-align: center;
  line-height: 44px;
}
.center {
  flex: 1;
  display: flex;
}
.center span {
  flex: 1;
  line-height: 44px;
  text-align: center;
}
.verge img {
  width: 20px;
  vertical-align: middle;
}

.active {
  color: #fff;
}
</style>
