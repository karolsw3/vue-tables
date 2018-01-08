<template lang='pug'>
	.SmartTable
		ColorPicker(v-if='colorPickerVisible' @colorChanged='setColor' :colors=["#0084ff", "#ffc300", "#4af844",
				"#7646ff", "#a695c7", "#ff5ca1",
				"#fa3c4c", "#f56b78", "#33343f"])
		.SmartTable__header
			.SmartTable__headerText
				template(v-if='!isEdited') {{name}}
				template(v-else)
					input.SmartTable__input.SmartTable__input--hidden(v-model='name', v-on:blur='isEdited = false', @keyup.enter='isEdited = false')
			.SmartTable__headerButtons
				.button.button--icon(:style='{background: color}', v-on:click='isEdited = true') 
					p edit
				.button.button--icon(:style='{background: color}', v-on:click='colorPickerVisible = !colorPickerVisible') 
					p palette
				slot
		.SmartTable__inputs
			input.SmartTable__input(v-for='(column, index) in columns', v-model='newRow[index]' @keyup.enter='pushRow')
			.button.button--icon(:style='{background: color}', v-on:click='pushRow') 
				p add
		table
			tr
				SmartCell(v-for='(column, index) in columns', :text='column.text', primary='true', :color='color' :key='column.id')
					.button.button--icon.button--red(style='margin: 0', v-on:click='deleteColumn(index)') 
						p delete
				.button.button--icon(v-on:click='pushColumn', :style='{background: color}') 
					p add
			tr(v-for='(row, rowIndex) in rows')
				SmartCell(v-for='(cell, cellIndex) in row', :text='cell.text', :key='cell.id')
				.button.button--red.button--icon(v-on:click='deleteRow(rowIndex)') delete
</template>

<script>
import SmartCell from '@/components/SmartCell'
import ColorPicker from '@/components/ColorPicker'

export default {
	name: 'SmartTable',
	data () {
		return {
			nextCellId: 1,
			color: '#0084ff',
			colorPickerVisible: false,
			name: 'New Table',
			isEdited: false,
			newRow: [],
			columns: [{id: 0, text: 'Click me to edit'}],
			rows: []
		}
	},
	components: {SmartCell, ColorPicker},
	methods: {
		normalizeColumnInputs: function () {
			this.newRow = []
			this.columns.map(() => {
				this.newRow.push('-')
			})
		},
		pushRow: function () {
			this.rows.push(this.newRow.map(newRow => ({id: this.nextCellId++, text: newRow})))
			this.normalizeColumnInputs()
		},
		deleteRow: function (index) {
			this.rows.splice(index, 1)
		},
		pushColumn: function () {
			if (this.columns.length < 5) {
				this.columns.push({id: this.nextCellId++, text: 'New column'})
				this.newRow.push('-')
				this.rows.map((row) => {
					while (row.length < this.columns.length) {
						row.push({id: this.nextCellId++, text: '-'})
					}
				})
			}
		},
		deleteColumn: function (index) {
			this.columns.splice(index, 1)
			this.rows.map((row) => {
				row.splice(index, 1)
			})
			this.normalizeColumnInputs()
		},
		setColor: function (color) {
			this.color = color
			this.colorPickerVisible = false
		}
	},
	created: function () {
		this.normalizeColumnInputs()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
  borderRadius = 25px
	animationDuration = 0.23s

	.SmartTable
		@keyframes onShow
			0%
				opacity 0
			100%
				opacity 1
		margin 60px auto
		width 80%
		max-width 900px
		padding 0
		border-radius borderRadius
		background white
		border 1px solid #ccc
		animation-name onShow
		animation-duration animationDuration
		animation-timing-function ease-in
		transition all animationDuration
		&__header
			display flex
			justify-content space-between
			align-items center
			flex-wrap nowrap
			font-weight 900
			padding 5px
			width 100%
			text-align center
			cursor default
			border-bottom 1px solid #ccc
			box-sizing border-box
		&__headerText
  		width 100%
			display flex	
			justify-content center
			align-items center
		&__headerButtons
			display flex
			align-items center
		&__inputs
			display flex
			justify-content space-between
			align-items center
			padding 5px
			box-sizing border-box
		&__input
			text-align center
			min-width 0
			font-size 1em
			margin 2px
			padding 10px 20px
			border none
			width 100%
			background #f5f5f5
			box-sizing border-box
			border-radius borderRadius
			&--hidden		
				background transparent
				margin 0
				padding 0
				color inherit
		table
			width 100%
			border-collapse collapse
		tr
			width 100%
			display flex
			align-items center
			padding 5px
			box-sizing border-box
			justify-content space-between
</style>
