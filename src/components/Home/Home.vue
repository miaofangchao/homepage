<template>
  <div id="home">
    <TopImg :img-src="msg.topImg" />
    <NavMenu />
    <CompanyProfile
      :img-src="imgIco"
      :area="msg.address"
      :name="msg.name"
      :companyProfile="companyProfile"
    />
    <ProductSortList 
      v-if="msg.productSort"
      :productImg="msg.productImg"
      :productSort="msg.productSort" />
    <ProductUnsortList 
      v-else
      :product-img="msg.productImg" 
    />
    <InvestmentPolicy 
      :investmentPolicy="msg.investmentPolicy.reverse()" />
    <LeaveMessage />
    <CallCompany 
      :name="msg.name"
      :address="msg.address"
      :contacts="msg.contacts"
      :tel="msg.tel"
    />
    <CompanyNews
      :companyNews="msg.companyNews"/>
    <div style="padding:0 3%;">
      <img
        src="@/assets/dbma.jpg"
        width="100%"
      >
    </div>
    <p>
      技术支持：
      <a href="http://m.jius.net/">m.jius.net酒商网</a>
      <br>
    </p>
  </div>
</template>
<script>
import ico from "@/assets/ico.png";
import CompanyProfile from "./CompanyProfile";
import ProductUnsortList from "./ProductUnsortList";
import ProductSortList from "./ProductSortList";
import InvestmentPolicy from "./InvestmentPolicy";
import LeaveMessage from "./LeaveMessage";
import CallCompany from "./CallCompany";
import CompanyNews from "./CompanyNews";
import TopImg from "./TopImg";
import NavMenu from "../../views/NavMenu";
import { mapState } from 'vuex'
export default {
  components: {
    TopImg,
    NavMenu,
    CompanyProfile,
    ProductSortList,
    ProductUnsortList,
    InvestmentPolicy,
    LeaveMessage,
    CallCompany,
    CompanyNews,
  },
  data() {
    return {
      imgIco: ico,
  }
  },
  computed: {
    ...mapState([
      'msg',
      'companyProfile'
    ])
  },
};
</script>
<style lang="css" scoped>
#home {
  background: #f1f1f1;
  padding-bottom: 10px;
}
</style>