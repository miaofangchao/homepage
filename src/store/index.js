import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import url from '../api/home'
import getLoginState from '@/api/mobile-loginState'
import { Promise } from 'core-js';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg:null,
    companyProfile:null,
    loginFlag: null,
    comId:''
},
  mutations: {
  },
  actions: {
    getHomeData({ state }) {
      //return promise 是为了防止在产品详细页刷新时报错
      return new Promise((resolve=>{
        //产品详细页面为防止刷新页面报错，重新获取了数据。加此判断，router进入产品详细页时不会重复发送请求。但是刷新产品详细页面时会发送两次请求。
        if(state.msg){
          resolve()
        }else{
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
              resolve()
          })
          .catch(function (error) {
            // 请求失败处理
            console.log(error);
          });
        }
      }))
    },
    testLoginState({ state }) {
      getLoginState().then(
        (resolve) => {
          state.comId = resolve.data.comId
          setTimeout(() => {
            state.loginFlag = resolve.data.loginState
          }, 250);
        },
        () => {
          state.loginFlag = false
        }
      )
    },
  },
  modules: {
  }
})
