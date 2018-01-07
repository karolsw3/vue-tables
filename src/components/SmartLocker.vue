<template lang='pug'>
	.SmartLocker
		.SmartLocker__locker
			input.SmartLocker__input(type='password', placeholder='Type your login key')
			router-link.SmartLocker__button(to='tables') keyboard_arrow_right
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
		&__input
			color #aaa
			background white
			border 1px solid #ccc
			border-radius 25px
			min-width 300px
			width 50%
			padding 9px 20px
		&__button
			color white
			text-align center
			cursor pointer
			height 20px
			width 20px
			margin 0 10px
			padding 7px
			border-radius 99px
			display inline-block
			background #00d700
			font-family 'Material Icons'
			transition all 0.12s
			&:hover
				opacity 0.7

</style>
