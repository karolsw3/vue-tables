<template lang='pug'>
	.SmartLocker
		.SmartLocker__locker
			input.SmartLocker__input(type='password', placeholder='Type your login key')
			router-link.button.button--icon(to='tables') keyboard_arrow_right
</template>

<script>

export default {
	name: 'SmartLocker',
	props: ['colors'],
	data () {
		return {
			typedKey: ''
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
	borderRadius = 25px
	animationDuration = 0.12s

	.SmartLocker
		display flex
		width 100vw
		height 100vh
		justify-content center
		align-items center
		color #ccc
		&__locker
			padding 5px
			display flex
			align-items center
			padding 30px
			border 1px solid #ccc
			border-radius 25px
		&__input
			color #aaa
			background white
			border 1px solid #ccc
			border-radius 25px
			min-width 300px
			width 50%
			padding 9px 20px

</style>
