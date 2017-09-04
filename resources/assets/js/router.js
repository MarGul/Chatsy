import VueRouter from 'vue-router';

let routes = [
	{ path: '/', name: 'home', component: require('./components/Home') },
	{ path: '/register', name: 'register', component: require('./components/Register') },
	{ path: '/signin', name: 'signin', component: require('./components/Signin') },
];

const router = new VueRouter({
	routes,
	linkActiveClass: 'active',
	mode: 'history'
});

export default router;