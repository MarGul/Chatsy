import VueRouter from 'vue-router';

let routes = [
	{ path: '/', name: 'home', component: require('./components/Home') },
	{ path: '/signup', name: 'signup', component: require('./components/Signup') },
	{ path: '/signin', name: 'signin', component: require('./components/Signin') },
	{ path: '/chat', name: 'chat', component: require('./components/Signin') },
];

const router = new VueRouter({
	routes,
	linkActiveClass: 'active',
	mode: 'history'
});

export default router;