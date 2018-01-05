<template lang='pug'>
	.menu
		.menu__header Smart tables
		slot
</template>

<script>

export default {
	name: 'SmartMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
	animationDuration = 0.12s

.menu
	top 0 !important
	padding 10px 0
	width 100%
	position fixed
	display flex
	justify-content space-between
	align-items center
	background white
	border-bottom 1px solid #eee
	&__header
		padding 0 20px
		cursor default
		font-weight 900
	&__button
		height 100%
		cursor pointer
		background #0084ff
		color white
		margin 0 10px
		padding 5px 20px
		border-radius 99px
		transition-duration animationDuration
		box-sizing border-box
		&:hover
			opacity 0.7
		&--red
			background #fa3c4c		
</style>
