<template>
    <div class="company-news-single">
        <NavMenu/>
        <h2 class="title">{{title}}</h2>
        <h3 class="time">{{time}}</h3>
        <p class="company-news-content" v-html="companyNewsSingle"></p>
    </div>
</template>
<script>
import NavMenu from './NavMenu'
import axios from 'axios'
import getData from '../api/companyNewsSingle'
export default {
    data() {
        return {
            companyNewsSingle:null,
            title:null,
            time:null
        }
    },
    components:{
        NavMenu
    },
    beforeRouteEnter: (to, from, next) => {
        axios.get(getData(to.params.id))
        .then(response =>{
            next(vm =>{
                let msg = response.data.split('||')
                let msgJson = JSON.parse(msg[0])
                vm.title = msgJson.title
                vm.time = msgJson.time
                vm.companyNewsSingle = msg[1]
            })
        })
        .catch(err =>{
            console.log(err)
        })
    },
}
</script>
<style lang="css" scoped>
    .company-news-single{
        width: 100%;
        padding-bottom: 10px;
    }
    p{
        text-align: left;
    }
    .company-news-content,.company-news-single .title,.company-news-single .time{
        padding-top: 10px;
        background-color: white;
    }
    .company-news-single .title{
        font-size: 125%;
    }
    .company-news-content{
        padding-bottom: 10px;
        padding: 6px;
    }
    .company-news-single .time{
        padding-right: 10px;
        text-align: right;
        border-bottom: 1px dashed gray;
        padding-bottom: 5px;
    }
    .company-news-content >>> img{
        width: 100% !important;
        height: auto !important;
    }
</style>