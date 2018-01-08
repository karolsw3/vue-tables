<template lang='pug'>
	#app
		router-view
</template>

<script>
export default {
	name: 'app'
}
</script>

<style lang='stylus'>

@import url('https://fonts.googleapis.com/css?family=Roboto')
@import url('https://fonts.googleapis.com/icon?family=Material+Icons')

html, body
	margin 0
	padding 0
	background-attachment fixed
	min-height 100vh
	overflow hidden
a
	text-decoration none
body
	height 100%
#app
	font-family 'Roboto', Helvetica, Arial, sans-serif
	height 100%

.button
	position relative
	height 100%
	cursor pointer
	background #0084ff
	color white
	margin 0 10px
	padding 5px 20px
	border-radius 99px
	transition-duration 0.12s
	box-sizing border-box
	p
		margin 0
	&--red
		background #fa3c4c
		border 2px solid white
	&--icon
		padding 8px
		font-family 'Material Icons'
	&:hover
		filter :brightness(0.9)	
</style>
