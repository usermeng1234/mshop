<template>
  <div>
<!--导航栏-->
    <van-nav-bar title="商城" class="nav-title">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>
<!--轮播图-->
      <div class="lunbo">
      <van-swipe :autoplay="3000">
          <van-swipe-item class="lunbo-item" v-for="(image, index) in images" :key="index">
              <img v-lazy="image" />
          </van-swipe-item>
      </van-swipe>
      </div>
    <!--热门商品-->
      <div class="hot">
          <p class="hot-title">热门商品</p>
          <swiper class="hot-swipe" :options="swiperOption">
               <swiper-slide v-for="(item,index) in hot" :key="index">
                   <div class="hot-swipe-content">
                       <img :src="item.img" alt="">
                       <div>
                           {{item.name}}
                           ${{item.price}}
                           {{item.city}}
                           {{item.company}}
                       </div>
                   </div>
               </swiper-slide>
          </swiper>
      </div>
  </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                ],
                hot:[
                    {
                        name:'mengwenxing',
                        img:'https://img.yzcdn.cn/vant/apple-1.jpg',
                        price:23,
                        company:'首付款感受到',
                        city:'曲靖市'
                    },
                    {
                        name:'mengwenxing',
                        img:'https://img.yzcdn.cn/vant/apple-1.jpg',
                        price:23,
                        company:'首付款感受到',
                        city:'曲靖市'
                    },
                    {
                        name:'mengwenxing',
                        img:'https://img.yzcdn.cn/vant/apple-1.jpg',
                        price:23,
                        company:'首付款感受到',
                        city:'曲靖市'
                    },
                    {
                        name:'mengwenxing',
                        img:'https://img.yzcdn.cn/vant/apple-1.jpg',
                        price:23,
                        company:'首付款感受到',
                        city:'曲靖市'
                    },
                    {
                        name:'mengwenxing',
                        img:'https://img.yzcdn.cn/vant/apple-1.jpg',
                        price:23,
                        company:'首付款感受到',
                        city:'曲靖市'
                    },
                    {
                        name:'mengwenxing',
                        img:'https://img.yzcdn.cn/vant/apple-1.jpg',
                        price:23,
                        company:'首付款感受到',
                        city:'曲靖市'
                    }
                ],
                swiperOption:{
                    slidesPerView:3
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>
<style lang="scss">
    body{
        height: 1000px;
    }
    .nav-title{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    .lunbo{
        height: 150px;
        &-item{
            img{
                height: 150px;
                width: 100%;
            }
        }
    }
    .hot{
        &-title{
            width: 100%;
            height: 18px;
            padding-left: 4px;
            line-height: 18px;
            box-sizing: border-box;
            color:black;
            font-size: 18px;
        }
        &-swipe{
            &-content{
                margin-top: 5px;
                width: 100px;
                text-align: center;
                color: #42b983;
                font-size: 14px;
                img{
                    border-radius: 6px;
                    width: 100px;
                    height: 90px;
                }
            }
        }
    }

</style>