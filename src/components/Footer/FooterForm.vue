<template>
  <div class="CengBox">
    <img
      src="@/assets/cha.png"
      class="chaaaa"
      @click="closeForm()"
    >
    <p
      class="top1"
      style="font-family: '微软雅黑'"
    >
      申请样品
    </p>
    <ul>
      <li>
        <p>
          <label for="realnames" />
          <input
            id="realnames"
            type="text"
            name="name"
            placeholder="请输入您的称呼"
            style="width: 70%; border: none; outline: none;"
          >
        </p>
      </li>
      <li>
        <p class>
          <label for="mobiles" />
          <input
            id="mobiles"
            type="text"
            maxlength="11"
            name="tel"
            class="tellTex"
            placeholder="请输入手机号码"
            style="border: none; outline: none;"
          >
        </p>
      </li>

      <li style="height: 82px;">
        <p>
          <label for="contents" />
        </p>
        <textarea
          id="contents"
          name="address"
          rows
          cols
          style="padding: 8px 0 10px; width: 82%; height: 58px; margin-top: 2px; border: none; resize: none; outline: none; font-size: 14px; line-height: 20px;"
          placeholder="请输入地址"
        />
      </li>
    </ul>
    <input
      id="submitbtn"
      type="submit"
      value="确定"
      class="sure"
    >
  </div>
</template>
<script>
export default {
  methods: {
    closeForm() {
      this.$emit("closeForm", false);
    }
  }
};
</script>
<style lang="css" scoped>
.CengBox {
  position: fixed;
  width: 90%;
  left: 5%;
  background: #fff;
  top: 10%;
  height: 357px;
  border-radius: 12px;
  z-index: 999;
}
.chaaaa {
  position: absolute;
  width: 20px;
  right: 10px;
  height: 20px;
  top: -36px;
}
.CengBox .top1 {
  height: 60px;
  line-height: 78px;
  text-align: center;
  color: #333333;
  font-size: 18px;
}
.CengBox ul {
  min-height: 100px;
  width: 88%;
  margin: 0 auto;
  margin-top: 20px;
}
.CengBox ul li {
  height: 40px;
  border: 1px solid #c0c5cb;
  margin-bottom: 10px;
  font-size: 0.6rem;
  border-radius: 4px;
}
.CengBox ul li p {
  float: left;
  line-height: 40px;
  font-size: 14px;
  font-size: 14px;
  overflow: hidden;
}
.CengBox ul li:nth-child(1) p label {
  background: url(../../assets/useName_01.png) no-repeat 10px center;
  background-size: 26px 18px;
  margin-left: -18px;
}
.CengBox ul li:nth-child(2) p label {
  background: url(../../assets/tell_03.png) no-repeat 10px center;
  background-size: 26px 18px;
}
.CengBox ul li:nth-child(3) p label {
  background: url(../../assets/dunpai_05.png) no-repeat 10px center;
  background-size: 26px 18px;
}
.CengBox ul li p label {
  height: 18px;
  width: 45px;
  display: inline-block;
  vertical-align: middle;
}
.CengBox ul li p input {
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  margin-top: 3px;
  font-size: 14px;
  border: none;
}
.CengBox .sure {
  width: 88%;
  height: 40px;
  background: #e5383b;
  text-align: center;
  line-height: 40px;
  margin: 0 auto;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  border: none;
}
</style>