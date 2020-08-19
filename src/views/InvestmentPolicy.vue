<template>
  <div id="investment-policy">
    <NavMenu />
    <h3>
      <img src="@/assets/newmn3.png">招商政策
    </h3>
    <div class="comcont">
      <div >
        <ul>
          <li v-for="item in msg.investmentPolicy" :key="item">
            <img :src="item" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import NavMenu from './NavMenu'
export default {
  computed: {
    msg(){
      return this.$store.state.msg
    }
  },
  components:{
    NavMenu
  },
};
</script>
<style lang="css" scoped>
#investment-policy {
  width: 100%;
  margin-bottom: 10px;
  margin-top: 46px;
}
h3 {
    font-size: 18px;
    padding: 8px 3% 6px 3%;
    border-bottom: #e4e4e4 3px solid;
    text-align: left;
    background: #fff;
}
 h3 img {
height: 20px;
    margin-right: 4px;
    vertical-align: bottom;
}
.comcont{
  transition: height 0.8s;
  background-color: rgb(205, 64, 64);
}
.comcont>div img{
  width: 100%;
}
</style>