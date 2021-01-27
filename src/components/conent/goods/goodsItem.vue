<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" />
    <div>
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsItem",
  props: {
    goodsItem: {
      type: Object,
      defalut() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.goods-item {
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 8px;
}
.goods-item p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-item .price{
  color: red;
}
</style>
