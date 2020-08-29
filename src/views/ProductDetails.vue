<template>
    <div id="product-details">
        <NavMenu />
        <div>
            <img :src="src" alt="">
            <ul>
                <li><h3>产品系列：{{sort}}</h3></li>
                <li><h3>产品名称：{{title}}</h3></li>
                <li>
                    <h3>产品介绍：</h3>
                    <div v-html="productIntro"></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import NavMenu from './NavMenu'
import axios from 'axios'
import getData from '../api/productDetails'
export default {
    data() {
        return {
            src:null,
            sort:null,
            title:null,
            productIntro:null
        }
    },
    components:{
        NavMenu
    },
    beforeRouteEnter (to, from, next) {
        const productId = to.params.id
        axios.get(getData(productId))
        .then(response =>{
            next((vm)=>{
                //刷新页面时，再获取一次数据，action：getHomeData 方法改为promise，当返回结果时，再更新数据。
                //这样避免了 在这个页面刷新时报错的问题。或者如下面的方法：加一个延时也可以，但是不稳定。
                vm.$store.dispatch('getHomeData').then(()=>{
                    const productImg = vm.$store.state.msg.productImg
                    const productSort = vm.$store.state.msg.productSort
                    const targetImg = productImg.filter((item)=> item.productId == productId)
                    const sortId = targetImg[0].sortId
                    if (productSort){
                        const targetSort = productSort.filter((item)=> item.sortId == sortId)
                        vm.sort = targetSort[0].sort
                    }
                    vm.src = targetImg[0].src
                    vm.title = targetImg[0].title
                    vm.productIntro = response.data
                })
                // setTimeout(()=>{
                //     const productImg = vm.$store.state.msg.productImg
                //     const productSort = vm.$store.state.msg.productSort
                //     const targetImg = productImg.filter((item)=> item.productId == productId)
                //     const sortId = targetImg[0].sortId
                //     if (productSort){
                //         const targetSort = productSort.filter((item)=> item.sortId == sortId)
                //         vm.sort = targetSort[0].sort
                //     }
                //     vm.src = targetImg[0].src
                //     vm.title = targetImg[0].title
                //     vm.productIntro = response.data
                // },100)
            })
        })
            //测试数据
            // next((vm)=>{
            //     const productImg = vm.$store.state.msg.productImg
            //     const productSort = vm.$store.state.msg.productSort
            //     const targetImg = productImg.filter((item)=> item.productId == productId)
            //     const sortId = targetImg[0].sortId
            //     const targetSort = productSort.filter((item)=> item.sortId == sortId)
            //     vm.sort = targetSort[0].sort
            //     vm.src = targetImg[0].src
            //     vm.title = targetImg[0].title
            //     vm.productIntro = `<p>无相国酒系列<br/></p>`
            // })

    },
}
</script>
<style lang="css" scoped>
    #product-details{
        margin-top: 46px;
        width: 100%;
    }
    li{
        text-align: left;
        background-color: white;
        padding: 2% 3%;
        margin-top: 3px;
    }
    img{
        width: 100%;
    }
    li div{
        padding: 2% 1%;
    }
</style>