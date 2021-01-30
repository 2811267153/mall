<template>
    <div class="bottom-nav">
        <div class="nav-info">
            <div>
                <img src="../../../assets/img/dianpu_2.png" alt="">
                <div>店铺</div>
            </div>
            <div>
                <img src="../../../assets/img/kefu.png" alt="">
                <div>客服</div>
            </div>
            <div>
                <img src="../../../assets/img/gouwuche.png" alt="">
                <div>购物车</div>
            </div>
        </div>
        <div class="nav-cart">
            <button class="cart" @click="addCart">加入<br/>购物车</button>
            <button class="set">立即<br/>购买</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabBarNav',
    methods: {
        addCart(){
            this.$emit('addCart')
        }
    }
}
</script>

<style scoped>
.bottom-nav{
    display: flex;
    position: fixed;
    height: 50px;
    background-color: #fff;
    left: 0px;
    right: 0px;
    bottom: 0px;
}
.nav-info{
    display: flex;
    width: 60%;
    text-align: center;
}
.nav-info img{
    margin-top: 10px;
    flex: 1;
    width: 20px;
}
.nav-info div{
    margin-top: -5px;
    flex: 1;
}
.nav-cart{
    width: 40%;
    display: flex;
}
.nav-cart button{
    flex: 1;
    outline: none;
    border: none;
}
.cart{
    background-color: red;
}
.set{
    background-color: rgb(231, 231, 114);
}
</style>