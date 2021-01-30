<template>
  <div v-if="Object.keys(goodsInfo).length != 0">
    <div>
      <div class="start"></div>
      <div class="desc">{{ goodsInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="goods-info">
      <span class="dct">{{goodsInfo.discount}}</span>
      <span class="price">{{"" + goodsInfo.price}}</span>
      <span class="l-price">{{'¥' + goodsInfo.lowPrice}}</span>
    </div>
    <div class="columns-info">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.service[3].name}}</span>
    </div>
    <div class="service-info">
      <span v-for="item in goodsInfo.service.length - 1" :key="item">
        <img :src="goodsInfo.service[item - 1].icon" alt="">
        <span>{{goodsInfo.service[item - 1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods",
  props: {
    goodsInfo: {
      type: Object,
      defalut() {
        return {};
      }
    }
  },
};
</script>

<style scoped>
.desc{
  margin-top: 15px;
  margin-left: 5px;
  font-size: 16px;
  white-space: nowrap;
	overflow: hidden;
	text-overflow:ellipsis;
}
.goods-info{
  color: red;
  font-size: 25px;
}
.columns-info{
  display: flex;
}
.columns-info span{
  margin: 15px 0px 0px;
  padding-bottom: 15px;
  flex: 1;
  text-align: center;
  border-bottom: 2px solid #ccc;
  /* text-align: justify; */
}
.service-info{
  margin: 5px 0px 10px;
  display: flex;
}
.service-info img{
  flex: 1;
  width: 10px;
}
.service-info span{
  flex: 1;
  text-align: center;
}
.l-price{
  color: #ccc;
  font-size: 12px;
  text-decoration: line-through;
}
.dct{
  margin-left: 5px;
  padding: 5px ;
  background-color: red;
  color: #fff;
  font-size: 14px;
  vertical-align: middle;
  border-radius: 5px;
}
</style>
