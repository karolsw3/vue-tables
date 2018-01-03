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

#app
  font-family 'Roboto', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  margin-top 60px
</style>
