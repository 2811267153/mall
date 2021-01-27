<template>
  <div class="goods">
    <goods-item v-for="item in goodsList" :key="item.id" :goodsItem='item'></goods-item>
  </div>
</template>

<script>
import goodsItem from "./goodsItem";
export default {
  name: "goodsList",
  props: {
    goodsList: {
      type: Array,
      defalut() {
        return [];
      }
    }
  },
  components: {
      goodsItem
  }
};
</script>

<style scoped>
.goods{
    width: 100%;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
