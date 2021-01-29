<template>
  <div class="clearfix" v-if="Object.keys(goodsparam).length != 0">
    <div
      class="div clearfix"
      v-for="(table, index) in goodsparam.size"
      :key="index"
    >
      <ul v-for="(tr, index) in table" :key="index">
        <li class="clearfix" v-for="(td, indexs) in tr" :key="indexs">
          {{ td }}
        </li>
      </ul>
    </div>

    <div>
      <ol v-for="(infos, indexz) in goodsparam.infos" :key="indexz">
        <li>{{ infos.key }}</li>
        <li>{{ infos.value }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailPramasInfo",
  props: {
    goodsparam: {
      type: Object
    }
  },
  deta() {
    return {};
  }
};
</script>

<style scoped>
/* .div{
  float: left;
} */
ul {
  margin: 10px;
  margin-top: 30px;
}
ul > li {
  border-bottom: 1px solid #ccc;
  color: var(--color-text);
  list-style: none;
  line-height: 40px;
  float: left;
  width: 20%;
  height: 40px;
}
ol {
  margin-top: 100px;
}
ol > li {
  border-bottom: 1px solid #ccc;
  line-height: 40px;
  list-style: none;
  text-align: center;
  float: left;
  width: 50%;
  height: 40px;
}
.clearfix:after {
  content: "020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>
