<template>
  <div id="app">
    <Header :loginFlag="loginFlag"/>
    <TransitionFade mode="out-in">
      <keep-alive :max="10">
        <router-view></router-view>
      </keep-alive>
    </TransitionFade>
      <Footer
        :tel="msg.tel"
        :close-all-flag="closeAllFlag"
        @toggleCover="toggleCover($event)"
        @resetCloseAllFlag="resetCloseAllFlag($event)"
      />
    <TransitionFade>
      <CoverFullPage
        v-show="showCoverFlag"
        @closeAll="closeAll()"
      />
    </TransitionFade>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import CoverFullPage from "./views/CoverFullPage";
import TransitionFade from "./views/TransitionFade";
import TransitionScale from "./views/TransitionScale"
export default {
  components: {
    Header,
    Footer,
    CoverFullPage,
    TransitionFade,
    TransitionScale
  },
  data() {
    return {
      showCoverFlag: false,
      closeAllFlag: true,
    };
  },
  methods: {
    toggleCover($event) {
      this.showCoverFlag = $event;
      this.closeAllFlag = $event;
    },
    // 当点击遮盖层时关闭所有弹出窗口
    closeAll() {
      this.closeAllFlag = false;
      this.showCoverFlag = false;
    },
    // 子组件关闭后重置closeAllFlag
    resetCloseAllFlag($event) {
      this.closeAllFlag = $event;
    }
  },
  computed: {
    msg(){
      return this.$store.state.msg
    },
    loginFlag(){
      return this.$store.state.loginFlag
    }
  },
  created() {
    this.$store.dispatch('getHomeData')    //默认进入Home，
    // if(this.$route.path == '/'){
    //   this.$router.push('Home')
    // }
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #666666;
}

ol,
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f1f1f1;
  max-width: 760px;
  min-width: 310px;
  margin: 0 auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
