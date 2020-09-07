<template>
  <div id="product-list">
    <div 
      v-for="(item,index) in productSort"
      :key="item.sortId">
      <h3>
        {{item.sort}}
        <font>（共{{getCurrentSort(item.sortId).length}}款产品）</font>
      </h3>
      <transition-group
        name="list"
        tag="ul"
      >
        <li
          v-for="(img,i) in getCurrentSort(item.sortId).slice(0,n[index])"
          :key="img.title"
          class="list-item"
          v-liResetHeight
        >
          <router-link :to="{path:'ProductDetails/'+ img.productId}">
            <img
              class="fill-img"
              v-if="showFillImgFlag[index][i]"
              :src="fillImg"
            >
            <transition name="img">
            <img 
              @load="hidFillImg(index,i)"
              :src="img.src" 
              :alt="img.title"
              v-show="!showFillImgFlag[index][i]"
              >
            </transition>
            <p>{{ img.title }}</p>
          </router-link>
        </li>
      </transition-group>

      <div style="clear:both" />
      <div class="morecp" @click.self="getMore(item,index)" v-show="buttonShowFlag[index]" >
        {{ buttonContent[index] }}
      </div>
    </div>
  </div>
</template>
<script>
import fillImg from '@/assets/fill.png'
export default {
  data() {
    return {
      n:null, // 每个分类显示图片数量的数组，产品种类数量(productSort.length)为length，每个n[i]初始值为4，显示4个图片
      buttonContent:null, //按钮显示文字的数组。产品种类数量为length，每个成员初始值：‘点击加载更多’
      buttonShowFlag:null, //按钮是否显示的数组。 产品种类数量为length，初始值 false 不显示
      fillImg:fillImg,  //图片未加载时的填充图片，一个空白图片
      showFillImgFlag:null//二位数组，是否显示填充图片；初始值true，当图片onload时，值变为false。一维数组length为productSort.length，二位数组的length为getCurrentSort(this.productSort[i].sortId).length，对应每一个要加载的图片。
    };
  },
  props:{
      productImg:Array,
      productSort:Array,
  },
  computed: {},
  methods: {
    // 点击按钮，加载更多图片：用Vue.set()修改数组时响应，点击加载更多按钮时，只加载对应的分类图片
    getMore(item,index) {
        if(this.n[index]+8 >= this.getCurrentSort(item.sortId).length){
          // Vue.set(this.buttonContent,index,'没有了')
          this.$set(this.buttonShowFlag,index,false)
        }
        this.$set(this.n,index,this.n[index]+8)
    },

    //获取当前分类的图片的数组：根据v-for循环中当前productSort[index].sortId值 过滤整个productImg
    getCurrentSort(id){
      return this.productImg.filter(function(item){
        return item.sortId == id
      })
    },
    hidFillImg (index,i) {
      //多维数组。先设置内部的值，再刷新数组
      this.$set(this.showFillImgFlag[index],i,false)
      this.$set(this.showFillImgFlag,index,this.showFillImgFlag[index])
    }
  },
  directives:{
    //初始化li的高度
    liResetHeight:{
      inserted(el){
        //bind里面获取不到document.getElementById('app')
        const appWidth = document.getElementById('app').offsetWidth //窗口宽度 app 的width有最大最小限制，使用body的width会出现值偏大的情况
        const imgWH = 600 / 480                      //图片的宽高比
        el.style.height = ( appWidth - appWidth * 0.1 ) / 2 / imgWH + 30 + 'px' //0.1是10%，图片的margin；30是p标签的高度，
      }
    }
  },
  beforeMount() {
    // 初始化数组信息
    this.n = Array(this.productSort.length).fill(4) //每个分类显示4个图片
    this.buttonContent = Array(this.productSort.length).fill('点击加载更多')
    this.buttonShowFlag = Array(this.productSort.length).fill(false)
    //二维数组，控制占位图片的显示
    this.showFillImgFlag = Array(this.productSort.length).fill([])

    // 循环每一个种类的产品
    for(let i = 0;i < this.productSort.length;i++){
      //初始化二位占位图片数组
      let len = this.getCurrentSort(this.productSort[i].sortId).length
      this.showFillImgFlag[i] = Array(len).fill(true)

      // this.getCurrentSort(this.productSort[i].sortId).length 当前种类的数量 大于可显示数量时，按钮显示
      if(this.getCurrentSort(this.productSort[i].sortId).length > this.n[i]){
        this.$set(this.buttonShowFlag,i,true)
      }
    }
  },
};
</script>
<style lang="css" scoped>
.list-item {
  position: relative;
  font-size: 0;
  float: left;
}
.list-enter-active {
  transition: all 1s;
}
.list-enter{
  opacity: 0;
}
.list-enter-to{
  opacity: 1;
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
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.morecp {
  margin: 15px 3% 0;
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
