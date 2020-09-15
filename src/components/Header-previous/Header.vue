<template>
  <div id="header">
	<div class="top_menu">
		<div class="logodiv">
		<a href="http://m.jius.net/">
			<img src="@/assets/logo.png">
		</a>
		</div>
		<div class="rtmenu">
		<span
			id="show-nav-bar"
			@click.stop="showNav()"
		>导航</span>|
		<span
			id="show"
			@click.stop="showLogin()"
		>登录</span>|
		<span @click.stop="showRegister()">注册</span>
		</div>
	</div>
    <TransitionScale>
      <HeaderNav
        v-show="showNavFlag"
        @closeNav="closeNav()"
      />
    </TransitionScale>
    <TransitionScale>
      <Login
        v-show="showLoginFlag"
        @jumpRegister="jumpRegister()"
        @closeLogin="closeLogin()"
      />
    </TransitionScale>
    <TransitionScale>
      <Register
        v-show="showRegisterFlag"
        @closeRegister="closeRegister()"
      />
    </TransitionScale>
  </div>
</template>
<script>
	import HeaderNav from "./HeaderNav";
	import TransitionScale from '../../views/TransitionScale'
	import Login from './Login'
	import Register from './Register'
	export default {
		name: "Header",
		components: {
			HeaderNav,
			TransitionScale,
			Login,
			Register,
		},
		props:{
			closeAllFlag:Boolean
		},
		data() {
			return {
				showNavFlag: false,
				showLoginFlag: false,
				showRegisterFlag: false
			};
		},
		watch:{
			closeAllFlag:function(){
				if(this.showNavFlag){
					if(!this.closeAllFlag){
						this.showNavFlag = false
						this.$emit("resetCloseAllFlag",true)
					}
				}else if(this.showLoginFlag){
					if(!this.closeAllFlag){
						this.showLoginFlag = false
						this.$emit("resetCloseAllFlag",true)
					}
				}else if(this.showRegisterFlag){
					if(!this.closeAllFlag){
						this.showRegisterFlag = false
						this.$emit("resetCloseAllFlag",true)
					}
				}
			}
		},
		methods: {
			closeNav () {
				this.showNavFlag = false
				this.$emit("toggleCover")
			},
			showNav () {
				this.showNavFlag = true
				this.$emit("toggleCover",true)
			},
			showLogin () {
				this.showLoginFlag = true
				this.$emit("toggleCover",true)
			},
			closeLogin(){
				this.showLoginFlag = false
				this.$emit("toggleCover",false)
			},
			showRegister(){
				this.showRegisterFlag = true
				this.$emit("toggleCover",true)
			},
			closeRegister(){
				this.showRegisterFlag = false
				this.$emit("toggleCover",false)
			},
			jumpRegister(){
				this.showLoginFlag = false
				this.showRegisterFlag = true
			}
		}
	};
</script>

<style>
	.top_menu {
		background: #e5383b;
		height: 46px;
		color: #fff;
		text-align: center;
		font-size: 20px;
		width: 100%;
		top: 0;
		z-index: 996;
		line-height: 46px;
		position: fixed;
		max-width: 760px;
		min-width: 310px;
	}

	.logodiv {
		position: absolute;
		left: 8px;
		width: 105px;
		top: 8px;
		line-height: 26px !important;
	}

	.rtmenu {
		position: absolute;
		right: 8px;
		font-size: 16px;
		color: #fff;
		line-height: 46px;
	}

	.logodiv img {
		width: 100%;
	}

	.rtmenu span {
		padding: 0 5px;
		display: inline-block;
		height: 100%;
	}

	.rtmenu span a {
		color: #fff;
	}
</style>
