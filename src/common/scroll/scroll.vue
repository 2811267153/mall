<template>
  <div class="wrapper" ref="warpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BSscroll",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.warpper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
  }
};
</script>

<style scoped>
.content{
    height: 300px;
}
</style>
