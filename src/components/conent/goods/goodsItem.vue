<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" @load="imgLoad"/>
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
  },
  methods:{
    imgLoad(){
      //创建事件总线  发射任务 给home 监听
      if (this.$route.path.indexOf('/home')) {
        this.$bus.$emit('itemImgLoad')
      }
    },
    itemClick(){
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  computed: {
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img;
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
