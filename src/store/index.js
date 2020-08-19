import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import url from '../api/home'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // msg: JSON.parse('{"name":"贵州省仁怀市海丰酒业有限公司","address":"贵州省仁怀市盐津街道竹梅巷16号","contacts":"方总","tel":"15186609999","topImg":"http://www.jius.net/UpFile/Company/201805/1805151425443065.jpg","productImg":[{"title":"无相国酒系列","src":"http://www.jius.net/UpFile/Product/201806/1806191815357960.jpg","sortId":"2079","productId":"81927"},{"title":"无相国酒","src":"http://www.jius.net/UpFile/Product/201806/1806191815066808.jpg","sortId":"2079","productId":"81926"},{"title":"无相国酒","src":"http://www.jius.net/UpFile/Product/201806/1806191814476074.jpg","sortId":"2079","productId":"81925"},{"title":"无相国酒","src":"http://www.jius.net/UpFile/Product/201806/1806191814255108.jpg","sortId":"2079","productId":"81924"},{"title":"无相国酒","src":"http://www.jius.net/UpFile/Product/201806/1806191814018665.jpg","sortId":"2079","productId":"81923"},{"title":"无相国酒","src":"http://www.jius.net/UpFile/Product/201806/1806191812263605.jpg","sortId":"2079","productId":"81922"},{"title":"无相国酒","src":"http://www.jius.net/UpFile/Product/201806/1806191812094558.jpg","sortId":"2079","productId":"81921"},{"title":"无相国酒","src":"http://www.jius.net/UpFile/Product/201806/1806191811459196.jpg","sortId":"2079","productId":"81920"},{"title":"无相国酒","src":"http://www.jius.net/UpFile/Product/201806/1806191811234054.jpg","sortId":"2079","productId":"81919"},{"title":"高端私人订制酒","src":"http://www.jius.net/UpFile/Product/201806/1806191809124629.jpg","sortId":"2106","productId":"81915"},{"title":"方族魂酒","src":"http://www.jius.net/UpFile/Product/201806/1806191808463824.jpg","sortId":"2106","productId":"81914"},{"title":"方族魂酒","src":"http://www.jius.net/UpFile/Product/201806/1806191808229370.jpg","sortId":"2106","productId":"81913"},{"title":"方老吉酒","src":"http://www.jius.net/UpFile/Product/201806/1806191807476887.jpg","sortId":"2106","productId":"81912"},{"title":"方老吉酒","src":"http://www.jius.net/UpFile/Product/201806/1806191807181419.jpg","sortId":"2106","productId":"81911"},{"title":"百年潮酒","src":"http://www.jius.net/UpFile/Product/201806/1806191806234842.jpg","sortId":"2080","productId":"81910"},{"title":"百年潮酒","src":"http://www.jius.net/UpFile/Product/201806/1806191805595520.jpg","sortId":"2080","productId":"81909"},{"title":"百年潮酒","src":"http://www.jius.net/UpFile/Product/201806/1806191805316432.jpg","sortId":"2080","productId":"81908"},{"title":"百年潮弱碱性富硒活性养生酒","src":"http://www.jius.net/UpFile/Product/201805/1805211543342807.jpg","sortId":"2080","productId":"81422"},{"title":"无相国酒","src":"http://www.jius.net/UpFile/Product/201805/1805190929475485.jpg","sortId":"2079","productId":"81413"},{"title":"无相国酒","src":"http://www.jius.net/UpFile/Product/201805/1805190929220286.jpg","sortId":"2079","productId":"81412"},{"title":"无相国酒","src":"http://www.jius.net/UpFile/Product/201805/1805190928444528.jpg","sortId":"2079","productId":"81411"},{"title":"无相国酒","src":"http://www.jius.net/UpFile/Product/201805/1805190928244230.jpg","sortId":"2079","productId":"81410"},{"title":"无相国酒","src":"http://www.jius.net/UpFile/Product/201805/1805190924348956.jpg","sortId":"2079","productId":"81409"},{"title":"百年潮弱碱性富硒活性酒","src":"http://www.jius.net/UpFile/Product/201805/1805190923499885.jpg","sortId":"2080","productId":"81408"},{"title":"百年潮弱碱性富硒活性酒","src":"http://www.jius.net/UpFile/Product/201805/1805190923280030.jpg","sortId":"2080","productId":"81407"},{"title":"百年潮弱碱性富硒活性酒","src":"http://www.jius.net/UpFile/Product/201805/1805190923139522.jpg","sortId":"2080","productId":"81406"},{"title":"百年潮弱碱性富硒活性酒","src":"http://www.jius.net/UpFile/Product/201805/1805171433373809.jpg","sortId":"2080","productId":"81398"}],"investmentPolicy":["http://www.jius.net/UpFile/ComVideo/201805/1805181620075151.flv","http://www.jius.net/UpFile/Company/201806/1806191614317002.jpg","http://www.jius.net/UpFile/Company/201806/1806191704051710.png"],"companyNews":[{"id":"1317","name":"健康养生酒领域，为何要钟情于百年潮弱碱性富硒活性养生酒？"}],"productSort":[{"sort":"无相国酒系列","sortId":"2079"},{"sort":"百年潮系列","sortId":"2080"},{"sort":"定制系列","sortId":"2106"} ] }'),
    // companyProfile: '五粮液锦上添花全国运营中心正在火爆招商中.五粮液锦上添花全国运营中心正在火爆招商中五粮液锦上添花全国运营中心正在火爆招商中五粮液锦上添花全国运营中心正在火爆招商中五粮液锦上添花全国运营中心正在火爆招商中五粮液锦上添花全国运营中心正在火爆招商中五粮液锦上添花全国运营中心正在火爆招商中五粮液锦上添花全国运营中心正在火爆招商中五粮液锦上添花全国运营中心正在火爆招商中五粮液锦上添花全国运营中心正在火爆招商中五粮液锦上添花全国运营中心正在火爆招商中五粮液锦上添花全国运营中心正在火爆招商中...'
    
    msg:null,
    companyProfile:null,
},
  mutations: {
  },
  actions: {
    getHomeData({ state }) {
      axios.get(url)
      .then(response => {
          var responseMsg = response.data.split("||");
          try {
            state.msg = JSON.parse(responseMsg[0]);
          } catch (error) {
            console.log(error);
          }
          state.companyProfile = responseMsg[1]
          document.title = state.msg.name;
      })
      .catch(function (error) {
        // 请求失败处理
        console.log(error);
      });
    }
  },
  modules: {
  }
})
