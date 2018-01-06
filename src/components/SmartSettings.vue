<template lang='pug'>
	.SmartSettings
		
</template>

<script>
export default {
	name: 'SmartSettings',
	data: function () {
		return {

		}
	}
}
</script>

<style lang='stylus' scoped>
	borderRadius = 25px
	animationDuration = 0.12s

	.SmartSettings
		@keyframes onShow
			0%
				opacity 0
				margin-top 0
			100%
				opacity 1
				margin-top 30px

		position absolute
		width 200px	
		height 200px
		right 30px
		top 60px
		z-index 3
		background white
		display flex
		flex-wrap wrap
		justify-content center
		align-items center
		border-radius borderRadius
		animation-name onShow
		animation-duration animationDuration
		animation-timing-function ease-in
		transition all animationDuration

</style>