/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import { getInitialLocale } from '@/utils/framework'

const SET_LOCALE                = 'SET_LOCALE'
const SET_WINDOW_INNER_HEIGHT   = 'SET_WINDOW_INNER_HEIGHT'
const SET_WINDOW_INNER_WIDTH    = 'SET_WINDOW_INNER_WIDTH'

const state = {
  windowInnerWidth: window.innerWidth,
  windowInnerHeight: window.innerHeight,
  locale: getInitialLocale()
}

const mutations = {
  [SET_LOCALE]: (state, locale) => {
    state.locale = locale
  },
  [SET_WINDOW_INNER_HEIGHT]: (state, windowInnerHeight) => {
    state.windowInnerHeight = windowInnerHeight
  },
  [SET_WINDOW_INNER_WIDTH]: (state, windowInnerWidth) => {
    state.windowInnerWidth = windowInnerWidth
  }
}

const actions = {
  setLocale({ commit }, locale) {
    commit(SET_LOCALE, locale)
  },
  resize({ commit }, { windowInnerHeight, windowInnerWidth }) {
    commit(SET_WINDOW_INNER_HEIGHT, windowInnerHeight)
    commit(SET_WINDOW_INNER_WIDTH, windowInnerWidth)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
