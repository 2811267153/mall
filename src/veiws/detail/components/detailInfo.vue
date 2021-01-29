<template>
  <div v-if="Object.keys(detailInfo).length != 0">
    <div class="detail-info">
      <div class="detail">{{ detailInfo.desc }}</div>
    </div>
    <div class="detail-item">
        <span>{{detailInfo.detailImage[0].key}}</span>
        <div class="info-img" v-for="item in detailInfo.detailImage[0].list" :key="item">
            <img :src="item" alt="" @load="imgLoad">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data(){
      return {
          counter: 0,
          imgLength: 0
      }
  },
  methods: {
      imgLoad(){
          //监听图片是否  加载完成, 完成判断 并 发送事假
          if(++this.counter === this.imgLength){
              this.$emit('imgLoad')
          }

      }
  },
  watch: {
      detailInfo(){
          this.imgLength = this.detailInfo.detailImage[0].list.length
      }
  }
};
</script>

<style scoped>
.detail {
  padding: 15px 5px;
  border-radius: 8px;
  border: 2px dotted #000;
}
.info-img{
    width: 100%;
}
.info-img img{
    margin: 5px 0px;
    width: 100%;
}
</style>
