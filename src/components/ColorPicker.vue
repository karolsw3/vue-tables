<template lang='pug'>
	.ColorPicker
		.ColorPicker__colorSlot(v-for='color in colors')
			.ColorPicker__color(:style='{background: color}', @click='setColor(color)')
</template>

<script>

export default {
	name: 'ColorPicker',
	props: ['colors'],
	data () {
		return {
			color: '#0084ff'
		}
	},
	methods: {
		setColor: function (color) {
			this.$emit('colorChanged', color)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
	borderRadius = 25px
	animationDuration = 0.12s

	.ColorPicker
		@keyframes onShow
			0%
				opacity 0
				margin-top 0
			100%
				opacity 1
				margin-top 50px

		position absolute
		width 200px
		height 200px
		margin 50px auto
		left 0
		right 0
		z-index 3
		background #fff
		display flex
		flex-wrap wrap
		justify-content center
		align-items center
		border-radius borderRadius
		animation-name onShow
		animation-duration animationDuration
		animation-timing-function ease-in
		transition all animationDuration
		&__colorSlot
			box-sizing border-box
			width 33%
			height 33%
			padding 10px
		&__color
			height 100%
			width 100%
			border 4px solid #eee
			border-radius 100px
			cursor pointer
			background #eee
			transition all animationDuration
			&:hover
				opacity 0.7			
</style>
