<template>
    <div class="black-top">
        <img src="../../assets/img/xialajiantou1.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'blackeTop'
}
</script>

<style scoped>
.black-top {
    position: fixed;
    bottom: 50px;
    right: 10px;
    z-index: 10;
    border-radius: 40px;
    background-color: #fff;
    width: 40px;
    box-shadow: 0px 0px  3px #ccc;
}
.black-top img{
    width: 40px;
}
</style>