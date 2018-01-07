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
</style>
