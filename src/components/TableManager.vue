<template lang='pug'>
  .TableManager
    SmartTable
</template>

<script>
import SmartTable from '@/components/SmartTable'

export default {
	name: 'TableManager',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	components: {SmartTable}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
  .TableManager
    width 100%
    height 100%
    margin 0
    padding 0
    background #ffffff
</style>
