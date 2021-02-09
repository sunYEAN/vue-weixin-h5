import UserApi from '../services/user'
import Utils from '../utils'

export default {
  namespace: 'user',
  state: {
    token: null,
    isLogin: false,
    userInfo: null
  },
  actions: {
    login ({ dispatch, commit }) {
      UserApi.login().then(res => {
        if (res && res.success) {
          commit('UPDATE_TOKEN', res.data)
          dispatch('getUserInfo', { reset: true }) // 登录后重置用户信息
        }
      })
    },
    logout ({ commit }) {
      commit('USER_LOGOUT')
      // 跳转去哪
    },
    getUserInfo ({ commit, state }, params) {
      const { reset } = params || {}
      if (!reset && state.userInfo) return state.userInfo
      UserApi.getUserInfo().then(res => {
        if (res && res.success) {
          commit('UPDATE_USER_INFO', res.data)
        }
      })
    }
  },
  mutations: {
    USER_LOGOUT (state) {
      state.token = null
      state.isLogin = false
      state.userInfo = null
      Utils.removeStorage('token')
    },
    UPDATE_TOKEN (state, payload) {
      state.token = payload
      Utils.setStorage('token', payload)
    },
    UPDATE_USER_INFO (state, payload) {
      state.userInfo = payload
    }
  }
}
