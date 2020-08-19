<template>
  <div id="product-list">
    <h3>
      产品
      <font>（共{{ productImg.length }}款产品）</font>
    </h3>
    <transition-group
      name="list"
      tag="ul"
    >
      <li
        v-for="(item,index) in dataList"
        :key="item.title"
        class="list-item"
        v-liResetHeight
      >
        <router-link :to="{path:'ProductDetails/'+ item.productId}">
          <img
            class="fill-img"
            v-if="showFillImgFlag[index]"
            :src="fillImg"
          >
          <transition name="img">
          <img
            @load="hidFillImg(index)"
            :src="item.src"
            :alt="item.title"
            v-show="!showFillImgFlag[index]"
          >
          </transition>
          <p>{{ item.title }}</p>
        </router-link>
      </li>
    </transition-group>

    <div style="clear:both" />
    <div class="morecp" @click="getMore()" v-show="showButtonFlag">
      <a
        href="javascript:void(0)"
      >{{ buttonContent }}</a>
    </div>
  </div>
</template>
<script>
import fillImg from '@/assets/fill.png'
export default {
  props: {
    productImg: Array,
  },
  data() {
    return {
      n: 10,
      showButtonFlag:false,
      fillImg:fillImg,
      showFillImgFlag:null
    };
  },
  computed: {
    dataList() {
      return this.productImg.slice(0, this.n);
    },
    buttonContent() {
      if (this.n >= this.productImg.length) {
        return "没有了";
      } else return "点击加载更多";
    }
  },
  methods: {
    getMore() {
      this.n = this.n + 10;
      if(this.n >= this.productImg.length){
        this.showButtonFlag = false
      }
    },
    hidFillImg (index) {
      this.$set(this.showFillImgFlag,index,false)
    }
  },
  directives:{
    liResetHeight:{
      bind(el){
        const windowWidth = document.body.offsetWidth//窗口宽度
        const imgWH = 600 / 480                      //图片的宽高比
        el.style.height = ( windowWidth - windowWidth * 0.1 ) / 2 / imgWH + 30 + 'px' //0.1是10%，图片的margin
      }
    }
  },
  created() {
    //初始化fillImg控制显示数据
    this.showFillImgFlag = Array(this.productImg.length).fill(true)
    if(this.productImg.length > this.n){
      this.showButtonFlag = true
    }
  },
};
</script>
<style lang="css" scoped>
.list-item {
  display: inline-block;
  position: relative;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-leave-active {
  position: absolute;
}
.list-enter,
.list-leave-to {
  opacity: 0;
}
.list-move {
  transition: all 1s;
}
.img-enter{
  opacity: 0;
}
.img-enter-to{
  opacity: 1;
}
.img-enter-active{
  transition: all 1s;
}
h3 {
  background: #fff;
  font-size: 18px;
  line-height: 38px;
  padding-left: 3%;
  text-align: left;
  margin-top: 10px;
}
h3 font {
  font-size: 14px;
  color: #666;
  font-weight: normal;
}
ul {
  overflow: hidden;
}
li {
  width: 45.5%;
  margin: 10px 0 0 3%;
  overflow: hidden;
  background: #fff;
  float: left;
}
li img {
  width: 100%;
  position: absolute;
  left: 0;
}
li p {
  color: #444;
  font-size: 15px;
  line-height: 30px;
  height: 30px;
  overflow: hidden;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.morecp {
  margin: 15px 3%;
  font-size: 18px;
  text-align: center;
  background: #e5383b;
  line-height: 38px;
  border-radius: 4px;
  color: #fff;
}
.morecp a {
  text-decoration: none;
  color: #fff;
}
.fill-img{
  position: static;
}
</style>
