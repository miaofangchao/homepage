<template>
  <div class="CengBox">
    <img
      src="@/assets/cha.png"
      class="chaaaa"
      @click="closeForm()"
    >
    <CallCompany
      :name="msg.name"
      :address="msg.address"
      :contacts="msg.contacts"
      :tel="msg.tel"    
      />
  </div>
</template>
<script>
import CallCompany from '../Home/CallCompany'
export default {
  components:{
    CallCompany
  },
  computed: {
    msg(){
      return this.$store.state.msg
    }
  },
  methods: {
    closeForm() {
      this.$emit("closeForm", false);
    }
  }
};
</script>
<style lang="css" scoped>
.CengBox {
  position: fixed;
  width: 90%;
  left: 5%;
  background: #fff;
  top: 25%;
  overflow: hidden;
  border-radius: 12px;
  z-index: 999;
  padding-top: 10px;
}
.chaaaa {
  position: absolute;
  width: 20px;
  right: 10px;
  height: 20px;
  top: 3px;
}
</style>