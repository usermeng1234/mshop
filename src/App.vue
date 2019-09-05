<template>
  <div id="app">
    <router-view></router-view>
    <ul class="foot-bar">
      <li class="foot-bar-item">
        <router-link to="/">
          首页
        </router-link>
      </li>
      <li class="foot-bar-item">
        <router-link to="/Category">
          分类
        </router-link>
      </li>
      <li class="foot-bar-item">
        <router-link to="/Car">
          购物车
        </router-link>
      </li>
      <li class="foot-bar-item">
        <router-link to="/My">
          我的
        </router-link>
      </li>
    </ul>
  </div>
</template>

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
    background: gray;
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
