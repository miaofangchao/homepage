<template>
<div id="investment-product">
    <NavMenu />
    <ProductSortList v-if="msg.productSort"
      :product-img="msg.productImg"
      :productSort="msg.productSort"/>  
    <ProductUnsortList v-else
      :product-img="msg.productImg" 
    />
</div>
</template>
<script>
import ProductUnsortList from "../components/Home/ProductUnsortList";
import ProductSortList from "../components/Home/ProductSortList";
import NavMenu from './NavMenu'
export default {
    components:{
        ProductUnsortList,
        ProductSortList,
        NavMenu
    },
    computed: {
        msg(){
            return this.$store.state.msg
        }
    }
}
</script>
<style lang="css" scoped>
    #investment-product{
        margin-top: 46px;
        width: 100%;
    }
</style>