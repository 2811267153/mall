<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in Recommends" :key="item.id">
      <img :src="item.image" alt="" />
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Redcommend",
  props: {
    Recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 15px 0 30px ;
  border-bottom: 2px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  margin-bottom: 5px;
  width: 65px;
  text-align: center;
}
</style>
