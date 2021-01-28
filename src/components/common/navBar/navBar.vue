<template>
    <div class="nav-bar">
        <div class="nav-bar-left"><slot name="left"></slot></div>
        <div class="nav-bar-center"><slot name="center"></slot></div>
        <div class="nav-bar-right"> <slot name="right"></slot> </div>
    </div>
</template>
<script>
export default {
    name: 'nabBar'
}
</script>

<style scoped>
    .nav-bar{
        position: fixed;
        top: 0px;
        right: 0px;
        left: 0px;

        display: flex;
        
        height: 44px;
        background-color: var(--color-background)  !important;
    }
    .nav-bar-center{
        flex: 1;
        text-align: centerh;
    }

    .nav-bar-right,
    .nav-bar-left{
        width: 60px;
        height: 100%;
        display: table-cell;

        line-height: 44px;
        text-align: center;
        color: #fff;
    }
    .nav-bar-left img{
        width: 20px;
        vertical-align: middle;
    }
</style>