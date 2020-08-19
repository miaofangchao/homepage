<template>
  <div class="header-nav">
    <div class="searchrk">
      <form action>
        <input
          id="searchkeys"
          type="text"
          class="prosrk"
          placeholder="请输入产品关键字"
        >
        <input
          name
          type="button"
          value="搜 索"
          class="prossk"
        >
      </form>
      <div
        style="position: absolute; z-index: 3; top: 3px; right: 10px;"
        @click="closeNav()"
      >
        <img
          src="@/assets/exit.jpg"
          class="exit"
          alt="点击关闭登陆窗口"
          style="width: 20px; height: 20px;"
        >
      </div>
    </div>
    <div class="daohangbk">
      <div class="dkflbk">
        <div class="fltit">
          招商频道
        </div>
        <div class="fllist">
          <ul>
            <li>
              <a href="/fl/1bj.asp">白酒招商</a>
            </li>
            <li>
              <a href="/fl/2pj.asp">啤酒招商</a>
            </li>
            <li>
              <a href="/fl/4ptj.asp">葡萄酒招商</a>
            </li>
            <li>
              <a href="/fl/3bjj.asp">保健酒招商</a>
            </li>
            <li>
              <a href="/fl/5hj.asp">红酒招商</a>
            </li>
            <li>
              <a href="/fl/6gj.asp">黄米果酒招商</a>
            </li>
          </ul>
          <div style="clear: both" />
        </div>
        <div style="clear: both" />
      </div>
      <div class="dkflbk">
        <div class="fltit">
          美酒资讯
        </div>
        <div class="fllist">
          <ul>
            <li>
              <a href="http://m.jius.net/news/dongtai/">酒业资讯</a>
            </li>
            <li>
              <a href="http://m.jius.net/news/hangqing/">市场行情</a>
            </li>
            <li>
              <a href="http://m.jius.net/news/hangqing-chanpinfenxi/">发现美酒</a>
            </li>
            <li>
              <a href="http://m.jius.net/news/xinpin/">新酒上市</a>
            </li>
            <li>
              <a href="http://m.jius.net/news/cehua/">营销策划</a>
            </li>
          </ul>
          <div style="clear: both" />
        </div>
        <div style="clear: both" />
      </div>
      <div class="dkflbk">
        <div class="fltit">
          找产品
        </div>
        <div class="fllist">
          <ul>
            <li>
              <a href="http://m.jius.net/chanpin/">招商产品库</a>
            </li>
          </ul>
          <div style="clear: both" />
        </div>
        <div style="clear: both" />
      </div>
      <div class="dkflbk">
        <div class="fltit">
          热门专题
        </div>
        <div class="fllist">
          <ul>
            <li>
              <a href="http://m.jius.net/subject/zuiremen/">热门酒水</a>
            </li>
            <li>
              <a href="http://m.jius.net/subject/shengyijing/">酒水生意经</a>
            </li>
            <li>
              <a href="http://m.jius.net/subject/jiuzhishi/">酒知识</a>
            </li>
            <li>
              <a href="http://m.jius.net/subject/niangjiugongyi/">酿酒工艺</a>
            </li>
          </ul>
          <div style="clear: both" />
        </div>
        <div style="clear: both" />
      </div>
      <div class="dkflbk">
        <div class="fltit">
          综合频道
        </div>
        <div class="fllist">
          <ul>
            <li>
              <a href="http://m.jius.net/tangjiuhui/">糖酒会</a>
            </li>
            <li>
              <a href="http://m.jius.net/wkt/">微课堂</a>
            </li>
            <li>
              <a href="http://m.jius.net/pinpai/">名酒品牌</a>
            </li>
            <li>
              <a href="http://m.jius.net/gongqiu/">供求平台</a>
            </li>
          </ul>
          <div style="clear: both" />
        </div>
        <div style="clear: both" />
      </div>
      <div class="dkflbk">
        <div class="fltit">
          信息发布
        </div>
        <div class="fllist">
          <ul>
            <li>
              <a href="http://m.jius.net/zhaoshang/">招商信息</a>
            </li>
            <li>
              <a href="http://m.jius.net/qiugou/">在线找酒</a>
            </li>
          </ul>
          <div style="clear: both" />
        </div>
        <div style="clear: both" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderNav",
  methods: {
    closeNav() {
      this.$emit("closeNav");
    }
  }
};
</script>
<style scoped>
a {
    color: #333;
}
.header-nav {
  position: fixed;
  top: 46px;
  left: 0;
  background: #fff;
  width: 100%;
  z-index: 999;
  padding-bottom: 15px;
}
.searchrk {
  padding: 18px 3%;
}
.prosrk {
  width: 60%;
  line-height: 32px;
  border: #e1e3e3 1px solid;
  padding: 0 5px;
  color: #666;
  font-size: 16px;
}
.prossk {
  width: 20%;
  border: 0;
  height: 34px;
  font-size: 16px;
  position: relative;
  top: 0px;
  background: #e5383b;
  color: #fff;
}

.daohangbk {
  padding-top: 8px;
  border-top: #f6f6f6 1px solid;
}
.dkflbk {
  margin: 0 auto 10px auto;
}
.fltit {
  float: left;
  width: 20%;
  text-align: right;
  font-size: 14px;
  font-weight: bold;
  line-height: 28px;
  color: black;
}
.fllist {
  float: right;
  width: 75%;
}
.fllist li {
    float: left;
    font-size: 14px;
    margin-right: 10px;
    line-height: 28px;
}
</style>