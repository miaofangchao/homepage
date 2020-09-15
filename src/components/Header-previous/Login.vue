<template>
  <div class="login">
    <form action="http://www.jius.net/Login.asp?Action=Log">
      <div class="lgtitle">
        <div
          class="Tback"
          @click="closeLogin()"
        />
        登录
      </div>
      <div class="icenter">
        <div class="us_reg">
          <ul>
            <li>
              <input
                id="UserName"
                class="tipInput"
                type="text"
                placeholder="请输入用户名"
                name="username"
              >
            </li>
            <li style="border-bottom: none;">
              <input
                id="upwd"
                class="tipInput"
                type="password"
                placeholder="请输入密码"
                name="PassWord"
              >
            </li>
          </ul>
        </div>
        <div
          id="9928mainlogin"
          style="cursor: pointer;"
          class="zcmenu"
        >
          立即登录
        </div>
        <div style="text-align: center; font-size: 14px; line-height: 24px;color: black;">
          （注：如已注册有酒商网账号，可直接登录）
        </div>
        <div
          class="zctzbtn"
          @click="jumpRegister()"
        >
          免费注册
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default{
	methods:{
		jumpRegister () {
			this.$emit("jumpRegister")
		},
		closeLogin(){
			this.$emit("closeLogin")
		}
	}
}
</script>

<style>
	.login {
		width: 90%;
		position: fixed;
		left: 5%;
		top: 10%;
		z-index: 999;
		background: white;
		border-radius: 5px;
		padding-bottom: 15px;
	}

	.lgtitle {
		background: #e5383b;
		line-height: 42px;
		width: 100%;
		font-size: 20px;
		color: #fff;
		text-align: center;
		margin: 0 auto;
		border-radius: 5px;
	}

	.us_reg {
		width: 94%;
		border: #e8e5e5 1px solid;
		border-radius: 6px;
		background: #fff;
		margin: 20px auto 0 auto;
	}

	ol,
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.us_reg li {
		font-size: 16px;
		line-height: 48px;
		border-bottom: #e8e5e5 1px solid;
		padding-left: 10px;
	}

	.tipInput {
		width: 95%;
		border: none;
		outline: none;
		height: 40px;
		font-size: 18px;
	}

	.zcmenu {
		width: 94%;
		margin: 20px auto 0 auto;
		border-radius: 4px;
		background: #e54042;
		line-height: 40px;
		text-align: center;
		color: #fff;
		font-size: 18px;
	}

	.zctzbtn {
		width: 94%;
		margin: 10px auto 0 auto;
		border-radius: 4px;
		border: #e4e2e2 1px solid;
		line-height: 38px;
		text-align: center;
		font-size: 18px;
		color: black;
	}
</style>
