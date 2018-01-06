<template lang='pug'>
	.TableManager(:style='{background: color}')
		SmartMenu(@colorChanged='setColor')
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
			color: '#fff',
			nextTableId: 1,
			tables: [{id: 0}]
		}
	},
	methods: {
		setColor: function (color) {
			this.color = color
		},
		pushTable: function () {
			this.tables.push({id: this.nextTableId++})
			var objDiv = document.getElementsByClassName('TableManager')[0]
			setTimeout(() => {
				objDiv.scrollTop = 999999
			}, 10)
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
		overflow-y auto
		background #ffffff
		height 100vh
</style>
