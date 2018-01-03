import Vue from 'vue'
import Router from 'vue-router'
import TableManager from '@/components/TableManager'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/tables',
			name: 'TableManager',
			component: TableManager
		}
	]
})
