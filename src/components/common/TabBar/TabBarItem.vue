<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="!isActive"><slot name="icon"></slot></div>
    <div v-show="isActive"><slot name="active-icon"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
import TabBar from "./TabBar";
export default {
  name: "TabBarItem",
  components: {
    TabBar
  },
  methods: {
    itemClick() {
      this.$router.push(this.link);
    }
  },
  computed: {
      isActive(){
          return this.$route.path.indexOf(this.link) != -1
      },
      activeStyle(){
          return this.isActive ? {'color': 'red'} : {}
      }
  },
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>
