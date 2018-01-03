<template lang='pug'>
	.SmartTable
		.SmartTable__header
			.SmartTable__headerText
				template(v-if='!isEdited') {{name}}
				template(v-else, v-model='name', v-on:blur='isEdited = false' @keyup.enter='isEdited = false')
					input.SmartTable__input.SmartTable__input--hidden
			.SmartTable__headerButtons
		.SmartTable__inputs
		table
			tr
			tr
</template>

<script>

export default {
	name: 'SmartTable',
	data () {
		return {
			color: '#0084ff',
			name: 'New Table',
			isEdited: false,
			newRow: [],
			columns: ['Click me to edit'],
			rows: []
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
  borderRadius = 25px

  .SmartTable
    margin 20px auto
    width 80%
    max-width 900px
    padding 2px
    border-radius borderRadius
    box-shadow 0 0 20px #eee
    background white
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
      border-bottom 2px solid #f5f5f5
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
    &__button
      font-family 'Material Icons'
      font-weight 900
      height 100%
      cursor pointer
      background #0084ff
      color white
      margin 2px
      padding 5px 6px
      border-radius 99px
      transition-duration 0.1s
      box-sizing border-box
      &:hover
        opacity 0.7
      &--red
        background #fa3c4c
        border 2px solid white
</style>
