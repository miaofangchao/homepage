<template>
  <div id="company-profile">
    <div class="rzdiv">
      <div class="rzpic">
        <img :src="imgSrc">
      </div>
      <div class="rzcont">
        <h1>{{ name }}</h1>
        <p>
          信誉指数：
          <span>诚信认证企业</span>
        </p>
        <p>运营模式：全国运营</p>
        <p>所在地区：{{ area }}</p>
      </div>
    </div>
    <div class="m_bk">
      <h3>
        <img src="@/assets/newmn1.png">公司介绍
      </h3>
      <div
        id="comcontents"
        class="comcont"
      >
        <p
          id="textP"
          v-html="companyProfile"
        />
      </div>
    </div>
    <ButtonMore v-if="showButtenFlag"
      content-text="textP"
      content-text-father="comcontents"
      content-height="60"
    />
  </div>
</template>
<script>
import ButtonMore from "./ButtonMore";
export default {
  data() {
    return {
      showButtenFlag:true
    }
  },
  components: {
    ButtonMore
  },
  props: {
    imgSrc: String,
    name: String,
    area: String,
    companyProfile: String
  },
  mounted() {
    var p = document.getElementById('textP')
    var div = document.getElementById('comcontents')
    var pHeight = getComputedStyle(p).height  //带 px 的值
    var pNum = Number(pHeight.slice(0,pHeight.length-2)) //获取P高度的数值
    if(pNum < 60){
      div.style.height = pHeight
      this.showButtenFlag = false
    }else{
      div.style.height = '60px'
    }
  },
};
</script>
<style lang="css" scoped>
#company-profile {
  margin-bottom: 10px;
  margin-bottom: 10px;
}
.rzdiv {
  background: #fff;
  padding: 10px 3%;
  position: relative;
  border-bottom: #ececec 1px solid;
  border-top: #ececec 1px solid;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rzpic {
  float: left;
  font-size: 0;
  padding-left: 2%;

}
.rzpic img {
  width: 100%;
}
.rzcont {
  float: left;
  overflow: hidden;
  margin-left: 5%;
  width: 70%;

}
.rzcont h1 {
  font-size: 18px;
  color: #000;
  margin-bottom: 3px;
  text-align: left;
}
.rzcont p {
  font-size: 15px;
  line-height: 22px;
  color: #555;
  text-align: left;
  white-space: nowrap;
}
.rzcont span {
  background: #df3f35;
  color: #ffffff;
  font-size: 12px;
  border-radius: 4px;
}
#comcontents {
  transition: height 0.8s;
}
.m_bk {
  margin-top: 10px;
  background: #fff;
  padding-bottom: 1px;
}
.m_bk h3 {
  font-size: 18px;
  padding: 8px 3% 6px 3%;
  border-bottom: #e4e4e4 3px solid;
  text-align: left;
}
.m_bk h3 img {
  height: 20px;
  margin-right: 4px;
  vertical-align: bottom;
}
.comcont {
  padding: 13px 0 8px 0;
  margin: 0 auto;
  width: 94%;
  font-size: 16px;
  line-height: 150%;
  height: 60px;
  overflow: hidden;
}
#textP {
  padding: 2px 0;
  height: auto;
  text-align: left;
}
</style>