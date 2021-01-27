<template>
  <swiper class="swiper">
    <swiper-item v-for="item in banners" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  name: "homeSwiper",
  components: {
    swiper,
    swiperItem
  },
  props: {
    banners: {
        type: Array,
        default(){
            return []
        }
    }
  }
};
</script>

<style scoped></style>
