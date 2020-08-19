<template>
  <transition name="nav" mode="out-in">
    <slot />
  </transition>
</template>
<style scoped>
	.nav-enter,
	.nav-leave-to {
		transform: scale(0, 0);
	}
	
	.nav-enter-to,
	.nav-leave {
		transform: scale(1, 1);
	}
	
	.nav-enter-active,
	.nav-leave-active {
		transition: transform 0.5s;
	}
</style>