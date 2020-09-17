<template>
  <div class="footer">
    <div class="comnav">
      <ul>
        <li class="nav1">
          <a href="/"><p><img src="@/assets/ft5.png"></p>首页</a>
        </li>
        <li class="nav2">
          <a :href="'tel:'+ tel">
            <p>
              <img src="@/assets/ft2.png">
            </p>电话咨询
          </a>
        </li>
        <li class="nav5">
          <router-link to="/InvestmentProduct">
            <p>
              <img src="@/assets/cpico.png">
            </p>招商产品
          </router-link>
        </li>
        <li
          id="pcollect"
          class="nav3"
          @click.stop="showForm()"
        >
          <span>联系我们</span>
        </li>
        <li class="nav4">
          <router-link to="/LeaveMessage">立即咨询</router-link>
        </li>
      </ul>
      <div style="clear: both" />
    </div>
    <TransitionScale>
      <FooterForm
        v-show="showFormFlag"
        @closeForm="closeForm($event)"
      />
    </TransitionScale>
  </div>
</template>
<script>
import FooterForm from "./FooterForm";
import TransitionScale from "../../views/TransitionScale";
export default {
  components: {
    FooterForm,
    TransitionScale
  },
  props: {
    closeAllFlag: Boolean,
    tel:String
  },
  data() {
    return {
      showFormFlag: false
    };
  },
  watch: {
    closeAllFlag: function() {
      if (this.showFormFlag) {
        if (!this.closeAllFlag) {
          this.showFormFlag = false;
          this.$emit("resetCloseAllFlag", true);
        }
      }
    }
  },
  methods: {
    closeForm($event) {
      this.showFormFlag = false;
      this.$emit("toggleCover", $event);
    },
    showForm() {
      this.showFormFlag = true;
      this.$emit("toggleCover", true);
    }
  }
};
</script>
<style lang="css" scoped>
.footer {
  overflow: hidden;
  height: 40px;
  background: white;
}
li {
  float: left;
}

li img {
  width: 18px;
}

.comnav {
  background: #fff;
  position: fixed;
  bottom: -1px;
  width: 100%;
  z-index: 996;
  max-width: 760px;
  min-width: 310px;
}
.comnav>ul{
  overflow: hidden;
}
.comnav .nav1 {
  width: 13%;
  font-size: 12px;
}

.comnav .nav2 {
  width: 18%;
  font-size: 12px;
}

.comnav .nav5 {
  width: 17%;
  font-size: 12px;
}

.comnav .nav3 {
  width: 25%;
  font-size: 18px;
  line-height: 40px;
  background: #000;
  color: #fff;
}

.comnav .nav4 {
  width: 27%;
  font-size: 18px;
  line-height: 40px;
  background: #db0202;
}
.comnav .nav4 a{
  color: white;
}

/* 
.comnav .nav3 a,
.comnav .nav4 a {
  color: #fff;
} */
</style>