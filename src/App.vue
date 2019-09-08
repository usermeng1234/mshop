<template>
  <div id="app">
    <router-view></router-view>
      <van-tabbar v-model="active">
          <van-tabbar-item name="Home" icon="home-o" to="/">首页</van-tabbar-item>
          <van-tabbar-item name="Category" icon="records" to="/Category">分类</van-tabbar-item>
          <van-tabbar-item name="cart" icon="cart" to="/Car">购物车</van-tabbar-item>
          <van-tabbar-item name="My" icon="contact" to="/My">我的</van-tabbar-item>
      </van-tabbar>
<!--    <ul class="foot-bar">-->
<!--      <li class="foot-bar-item">-->
<!--        <router-link to="/">-->
<!--          首页-->
<!--        </router-link>-->
<!--      </li>-->
<!--      <li class="foot-bar-item">-->
<!--        <router-link to="/Category">-->
<!--          分类-->
<!--        </router-link>-->
<!--      </li>-->
<!--      <li class="foot-bar-item">-->
<!--        <router-link to="/Car">-->
<!--          购物车-->
<!--        </router-link>-->
<!--      </li>-->
<!--      <li class="foot-bar-item">-->
<!--        <router-link to="/My">-->
<!--          我的-->
<!--        </router-link>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>
<script>
    export default {
       data(){
           return{
               active:'Home'
           }
       }
    }
</script>
<style lang="scss">
  /*媒体查询*/
  /*@media (max-width: 320px) {*/
  /*  .box{*/
  /*    width: 50%;*/
  /*    background: #42b983;*/
  /*  }*/
  /*}*/
  .foot-bar{
    display: flex;
    background: deepskyblue;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    &-item{
      flex-grow: 1;
      text-align: center;
    }
  }
</style>
