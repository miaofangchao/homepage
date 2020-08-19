<template>
  <div class="register">
    <div class="header">
      <div
        class="Tback"
        @click="closeRegister()"
      />
      快速注册
    </div>
    <div class="zcdiv">
      <ul>
        <li>
          <span>用户名</span><input
            id="ipusername"
            type="text"
            class="zck"
			name="UserName"
            placeholder="请设置登录用户名"
          >
        </li>
        <li>
          <span>密码</span><input
            id="ipuserpin"
            type="password"
			name="PassWord"
            class="zck"
            placeholder="请设置登录密码"
          >
        </li>
        <li>
          <span>手机号码</span><input
            id="ipusertel"
            type="text"
            class="zck"
            placeholder="请输入手机号"
          >
        </li>
        <li>
          <span>短信验证</span><input
            id="ipcode"
            style="width:35%"
            type="text"
            class="zck"
            placeholder="请输入验证码"
          >
          <input
            id="getcode"
            type="button"
            style=" background:#db3336;font-size:12px;padding:5px 10px; border-radius:20px;color:#fff;border: 0;"
            value="获取验证码"
          >
        </li>
        <li>
          <span>用户类型</span><select
            id="stype"
            name="select"
          >
            <option value="1">
              我要招商
            </option>
            <option value="0">
              我要代理
            </option>
          </select>
        </li>
      </ul>
      <div
        id="ureg"
        class="zcbtn"
      >
        <a>立即注册</a>
      </div>
      <div class="wttx">
        遇到问题？您可以<a href="tel:13333840256">联系客服</a>
      </div>
    </div>
  </div>
</template>

<script>
	export default{
		methods:{
			closeRegister () {
				this.$emit("closeRegister")
			}
		}
	}
</script>

<style>
	.register {
		width: 90%;
		position: fixed;
		left: 5%;
		top: 10%;
		z-index: 999;
		background: white;
		border-radius: 5px;
		padding-bottom: 15px;
	}

	.header {
		text-align: center;
		border-bottom: #dedede 1px solid;
		font-size: 20px;
		line-height: 42px;
		position: relative;
		background: #f02b2b;
		color: white;
	}

	.Tback {
		width: 15px;
		height: 15px;
		border: solid #FFFFFF;
		border-width: 2px 2px 0 0;
		transform: rotate(-135deg);
		margin: 7px 0 0 5px;
		text-shadow: 0px 1px 2px #095fa4;
		position: absolute;
		top: 6px;
		left: 10px;
	}

	.zcdiv {
		margin: 15px auto 0 auto;
		width: 94%;
	}

	.zcdiv li {
		border-bottom: #dedede 1px solid;
		padding: 8px 0;
		line-height: 28px;
		font-size: 18px;
		text-align: left;
		margin-left: 5px;
	}
	.zcdiv li span {
		color: #444;
		text-align: center;
		display: inline-block;
		width: 27%;
	}

	.zck {
		border: 0;
		font-size: 18px;
		color: #999;
		line-height: 28px;
		padding: 0 0 0 12px;
		font-family: Microsoft YaHei;
		width: 60%;
		outline: none;
	}

	.zcdiv li select {
		border: 0;
		font-size: 18px;
		height: 28px;
		width: 100px;
		margin-left: 15px;
		border: #f1f1f1 1px solid;
	}

	.zcbtn {
		margin: 25px auto 15px auto;
		width: 94%;
		background: #f02b2b;
		border-radius: 4px;
		text-align: center;
		font-size: 18px;
		line-height: 40px;
	}

	.zcbtn a {
		color: #fff;
	}

	.wttx {
		color: #999;
		font-size: 14px;
	}

	.wttx a {
		text-decoration: underline;
		margin-left: 5px;
	}
</style>
