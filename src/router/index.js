import Vue from 'vue'
import Router from 'vue-router'
import TableManager from '@/components/TableManager'
import SmartLocker from '@/components/SmartLocker'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'SmartLocker',
			component: SmartLocker
		},
		{
			path: '/tables',
			name: 'TableManager',
			component: TableManager
		}
	]
})
