<template>
  <div class="tab-nav">
    <div
      :class="{ active: index === currentIndex }"
      class="tab-nav-item"
      v-for="(item, index) in title"
      :key="index"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabNavBar",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(index) {
      console.log(index);
      this.currentIndex = index
      this.$emit('tabCilck', index)
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  }
};
</script>

<style scoped>
.tab-nav {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #f6f6f6;
}
.tab-nav-item {
  flex: 1;
}
.active {
  color: red;
}
.active span {
  padding: 8px;
  border-bottom: 5px solid red;
}
</style>
