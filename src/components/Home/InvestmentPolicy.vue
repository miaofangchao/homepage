<template>
  <div id="investment-policy">
    <h3>
      <img src="@/assets/newmn3.png" />招商政策
    </h3>
    <div id="contentTextFather" class="comcont">
      <div id="contentText">
        <ul>
          <li v-for="item in investmentPolicy" :key="item">
            <img :src="item" alt v-if="item.indexOf('.mp4')==-1" />
            <video :src="item" v-else></video>
          </li>
        </ul>
      </div>
    </div>

    <ButtonMore
      content-text="contentText"
      content-text-father="contentTextFather"
      content-height="400"
      v-show="showButtenFlag"
    />
  </div>
</template>
<script>
import ButtonMore from "./ButtonMore";
export default {
  data() {
    return {
      showButtenFlag: true,
      // investmentPolicy:null //在store中获取
    };
  },
  components: {
    ButtonMore,
  },
  props: {
    investmentPolicy: Array,
  },
  // created() {
  //   this.investmentPolicy = this.$store.state.msg.investmentPolicy
  // },
  //招商政策模块高度的获取：有图片加载问题，获取的div高度可能不准确。
  mounted() {
    this.$nextTick().then(()=>{
      var div = document.getElementById("contentTextFather"); //父元素
      var img = div.querySelectorAll("img");
      //判断是否有图片
      console.log(img.length)
      if (img.length) {
        var count = 0
        //图片加载后获取高度
        for(let i = 0;i<img.length;i++){
          img[i].addEventListener('load',()=>{
            count++
            if(count == img.length){
              var p = document.getElementById("contentText"); //子元素
              var pHeight = getComputedStyle(p).height; //带 px 的值
              var pNum = Number(pHeight.slice(0, pHeight.length - 2)); //获取P高度的数值
              pHeight = pNum + 'px';
              if (pNum < 400) {
                div.style.height = pHeight;
                this.showButtenFlag = false;
              } else {
                div.style.height = "400px";
              }
            }
          })
        }
      } else {
        var p = document.getElementById("contentText"); //子元素
        var pHeight = getComputedStyle(p).height; //带 px 的值
        var pNum = Number(pHeight.slice(0, pHeight.length - 2)); //获取P高度的数值
        pHeight = pNum + 'px';
        console.log(pNum)
        if (pNum < 400) {
          div.style.height = pHeight;
          this.showButtenFlag = false;
        } else {
          div.style.height = "400px";
        }
      }
    })
  },
};
</script>
<style lang="css" scoped>
#investment-policy {
  background: #fff;
  margin: 10px 0;
}
h3 {
  font-size: 18px;
  padding: 8px 3% 6px 3%;
  border-bottom: #e4e4e4 3px solid;
  text-align: left;
}
h3 img {
  height: 20px;
  margin-right: 4px;
  vertical-align: bottom;
}
#contentTextFather {
  overflow: hidden;
  transition: height 0.8s;
  height: 400px;
  background-color: rgb(146, 1, 1);
  font-size: 0;
}
#contentText img {
  width: 100%;
}
</style>