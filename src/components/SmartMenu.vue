<template lang='pug'>
	.menu
		.menu__header Smart tables
		.menu__buttons
			slot
			.button.button--icon(v-on:click='colorPickerVisible = !colorPickerVisible')
				p palette
			ColorPicker(v-if='colorPickerVisible' @colorChanged='setColor' :colors=['white', '#0084ff', '#6f677b', '#ff5ca1', '#1b4f9c', '#7646ff', '#fa3c4c', '#f56b78', '#33343f'])
			router-link.button.button--icon.button--red(to='/') clear
</template>

<script>
import ColorPicker from '@/components/ColorPicker'
import SmartSettings from '@/components/SmartSettings'

export default {
	name: 'SmartMenu',
	components: {ColorPicker, SmartSettings},
	data: function () {
		return {
			colorPickerVisible: false
		}
	},
	methods: {
		setColor: function (color) {
			this.colorPickerVisible = false
			this.$emit('colorChanged', color)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
	animationDuration = 0.12s

.menu
	position fixed
	z-index 3 
	top 0 !important
	padding 10px
	margin 0 !important
	width 100%
	display flex
	justify-content space-between
	align-items center
	background white
	border-bottom 1px solid #ccc
	box-sizing border-box
	&__header
		padding 0 20px
		cursor default
		font-weight 900
	&__buttons
		display flex
		align-items center	
</style>
