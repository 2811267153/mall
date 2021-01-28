<template>
    <tab-bar>
        <tab-bar-item :link="'/home'">
            <img slot="icon" src="../../assets/img/shouye.png" alt="">
            <img slot="active-icon" src="../../assets/ims/shouye.png" alt="">
            <p slot="text">首页</p>
        </tab-bar-item>
        <tab-bar-item link='/classifs'>
            <img slot="icon" src="../../assets/img/ziyuan.png" alt="">
            <img slot="active-icon" src="../../assets/ims/ziyuan.png" alt="">
            <p slot="text">分类</p>
        </tab-bar-item>
        <tab-bar-item link='/cart'>
            <img slot="icon" src="../../assets/img/gouwuche.png" alt="">
            <img slot="active-icon" src="../../assets/ims/gouwuche.png" alt="">
            <p slot="text">购物车</p>
        </tab-bar-item>
        <tab-bar-item link='/user'>
            <img slot="icon" src="../../assets/img/yonghu.png" alt="">
            <img slot="active-icon" src="../../assets/ims/yonghu.png" alt="">
            <p slot="text">我的</p>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../common/TabBar/TabBar';
import TabBarItem from '../common/TabBar/TabBarItem';
export default {
    name: 'MainTabBarItem',
    components: {
        TabBar,
        TabBarItem
    },
}
</script>

<style scoped>
.tab-bar-item{
    flex: 1;
}
.tab-bar-item img{
    width: 24px;
    vertical-align: middle;
}

.activeStyle{
    color: blueviolet;
}
</style>