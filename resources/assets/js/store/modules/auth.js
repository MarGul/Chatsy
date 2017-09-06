import { SET_AUTHENTICATED, SET_USER } from '../mutation-types';

const state = {
	authenticated: window.auth.authenticated,
	user: window.auth.user
}

const mutations = {
	[SET_AUTHENTICATED](state, authenticated) {
		state.authenticated = authenticated;
	},
	[SET_USER](state, user) {
		state.user = user;
	}
}

const getters = {
	authenticated: state => state.authenticated,
	user: state => state.user
}

export default {
	state,
	mutations,
	getters
};