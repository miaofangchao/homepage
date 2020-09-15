<template>
  <div id="nav-menu">
    <router-link to="/" exact>
      公司首页
    </router-link>
    <router-link to="/InvestmentProduct" >
      招商产品
    </router-link>
    <router-link
      to="/InvestmentPolicy"
      @click="showHome=false"
    >
      招商政策
    </router-link>
    <router-link
      to="/CompanyNewsList"
      @click="showHome=false"
    >
      公司动态
    </router-link>
  </div>
</template>
<script>

export default {
  name: "NavMenu",
  data() {
    return {
      showHome: true
    };
  },
};
</script>
<style lang="css" scoped>
#nav-menu {
  background: white;
  padding: 2% 0%;
  margin-bottom: 10px;
}
.router-link-active{
  background-color:#d80105;
  color:white;
  border-radius: 3px;
}
a {
  display: inline-block;
  color: #d80105;
  width: 25%;
  text-align: center;
  font-size: 150%;
  font-weight: bold;
}
</style>