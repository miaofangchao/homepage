<template>
  <div
    :class="{gsjsdiv:true,shadow:!showFlag}"
  >
    <div @click="toggleState()">
      <transition
        name="button"
        mode="out-in"
      >
        <component :is="view" />
      </transition>
    </div>
  </div>
</template>
<script>
var buttonShow = {
  template: `<div class="gsmore" >查看更多</div>`
};
var buttonHid = {
  template: `<div class="gsmore" >收起</div>`
};
export default {
  components: {
    buttonShow,
    buttonHid
  },
  props: {
    contentText: String, //内容的id
    contentTextFather:String, // 内容的父元素的id  同时css：transition: height 0.8s;
    contentHeight:String,
  },
  data() {
    return {
      showFlag: false,
      view: "buttonShow"
    };
  },
  watch: {
    showFlag: function() {
      if (this.showFlag == true) {
        this.view = buttonHid;
      } else if (this.showFlag == false) {
        this.view = buttonShow;
      }
    }
  },
  methods: {
    // 查看更多按钮的过渡，
    toggleState() {
      if (this.showFlag == false) {
        this.showFlag = !this.showFlag;
        // 先设置当前元素的高度自动，从具体数值转为aoto时没有过渡效果，需要通过设置父元素的高度为具体数值来开启过渡。
        // document.getElementById(this.contentText).style.height = "auto";
        // 在把p的高度具体数值赋值给父元素，开启过渡效果
        document.getElementById(this.contentTextFather).style.height = getComputedStyle(document.getElementById(this.contentText),null).height;
      } else {
        this.showFlag = !this.showFlag;
        // document.getElementById(this.contentText).style.height = this.contentHeight +"px";
        document.getElementById(this.contentTextFather).style.height = this.contentHeight +"px";
      }
    }
  }
};
</script>
<style lang="css" scoped>
.button-enter,
.button-leave-to {
  opacity: 0;
}
.button-enter-to,
.button-leave {
  opacity: 1;
}
.button-enter-active,
.button-leave-active {
  transition: opacity 0.3s;
}
#button,.gsjsdiv{
  background: #fff;
  z-index: 99;
  position: relative;
}
.shadow{
  box-shadow: 0px -25px 20px #fff;
}
.gsmore {
  margin: 0 auto 5px auto;
  background: #f4f4f4;
  border: #dbdbdb 1px solid;
  width: 90%;
  text-align: center;
  font-size: 18px;
  color: #d80105;
  border-radius: 20px;
  line-height: 38px;
}
</style>