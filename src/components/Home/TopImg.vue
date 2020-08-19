<template>
  <div id="top-img">
    <img
      :src="imgSrc"
      alt=""
    >
  </div>
</template>
<script>

export default {
    props:{
        imgSrc:String,
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