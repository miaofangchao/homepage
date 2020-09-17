<template>
  <div
    id="call-company"
    class="m_bk"
  >
    <h2>联系企业</h2>
    <div class="contact-way-con">
      <h3>{{ name }}</h3>
      <p>
        联系人：
        <span>{{ contacts }}</span>
      </p>
      <p>
        电话：
        <span>{{ tel }}</span>
      </p>
      <p>地址：{{ address }}</p>
    </div>
  </div>
</template>
<script>
	export default {
		props:{
			name:String,
			contacts:String,
			tel:String,
			address:String
		}
	};
</script>
<style lang="css" scoped>
	#call-company {
		background: #ffffff;
		text-align: left;
		margin-bottom: 10px;
		padding: 0% 4%;
	}

	h2 {
		margin-bottom: 2px;
		border-bottom: 2px solid;
	}
</style>
