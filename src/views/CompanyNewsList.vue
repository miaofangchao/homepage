<template>
  <div
    id="company-news-list"
    class="m_bk"
  >
    <NavMenu />
    <h3>
      <img src="@/assets/newmn4.png">公司动态
    </h3>
    <div v-if="msg">
    <ul class="mnlist" v-for="item in msg.companyNews" :key="item.id">
      <li>
        ·
        <router-link :to="{path:'/CompanyNewsSingle/' + item.id}">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
import NavMenu from './NavMenu'
export default {
  components:{
    NavMenu
  },
  computed: {
    msg(){
      return this.$store.state.msg
    }
  },
};
</script>
<style lang="css" scoped>
#company-news-list {
  margin-bottom: 10px;
  width: 100%;
}
h3 {
  font-size: 18px;
  padding: 8px 3% 6px 3%;
  border-bottom: #e4e4e4 3px solid;
  background: #fff;
  margin-bottom: 5px;
  text-align: left;
}
h3 img {
  height: 20px;
  margin-right: 4px;
  vertical-align: bottom;
}
.m_bk h3 span {
  float: right;
  font-size: 14px;
  font-weight: normal;
  border: #dbdbdb 1px solid;
  padding: 0 14px;
  border-radius: 16px;
  line-height: 24px !important;
}
.mnlist li {
  text-align: left;
  line-height: 38px;
  border-bottom: #f1f1f1 1px solid;
  height: 38px;
  overflow: hidden;
  padding: 0 3%;
  background: #fff;
}
</style>