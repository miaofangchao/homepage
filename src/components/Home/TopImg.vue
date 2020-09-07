<template>
  <div id="top-img" v-height>
    <TransitionFade>
      <img
        :src="imgSrc"
        alt=""
      >
    </TransitionFade>
  </div>
</template>
<script>
import TransitionFade from '../../views/TransitionFade'
export default {
    props:{
        imgSrc:String,
    },
    components:{
      TransitionFade
    },
    directives:{
      height:{
        directives(el){
          //图片尺寸为300/225
          const appWidth = document.getElementById('app').offsetWidth //窗口宽度 app 的width有最大最小限制，使用body的width会出现值偏大的情况
          el.style.height = appWidth * 0.75 +'px'
        }
      }
    }
}
</script>
<style scoped>
    div {
        font-size: 0;
    }
    img {
        width: 100%;
    }
</style>