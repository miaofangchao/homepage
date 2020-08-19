<template>
  <div class="leave-message">
    <NavMenu />
    <LeaveMessage />
  </div>
</template>
<script>
import NavMenu from './NavMenu'
import LeaveMessage from '../components/Home/LeaveMessage'
export default {
  components:{
    NavMenu,
    LeaveMessage
  }
}
</script>
<style lang="css" scoped>
  .leave-message{
    width: 100%;
    margin-top: 46px;
  }
</style>