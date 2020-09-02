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
        bind(el){
          //图片尺寸为300/225
          el.style.height = document.body.offsetWidth * 0.75 +'px'
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