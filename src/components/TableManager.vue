<template lang='pug'>
	.TableManager
		SmartMenu
			.menu__button(v-on:click='pushTable') New table
		SmartTable(v-for='(table, index) in tables' :key='table.id')
			.SmartTable__button.SmartTable__button--red(v-on:click='deleteTable(index)') 
					p delete
</template>

<script>
import SmartMenu from '@/components/SmartMenu'
import SmartTable from '@/components/SmartTable'

export default {
	name: 'TableManager',
	data () {
		return {
			nextTableId: 1,
			tables: [{id: 0}]
		}
	},
	methods: {
		pushTable: function () {
			this.tables.push({id: this.nextTableId++})
		},
		deleteTable: function (index) {
			this.tables.splice(index, 1)
		}
	},
	components: {SmartMenu, SmartTable}
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
