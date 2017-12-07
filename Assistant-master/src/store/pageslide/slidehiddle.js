/**
 * Created by user on 2017/9/27.
 */
const state = {
  index: 1,
  timer: 0,
  length: 0,
  int: 0,
  isMove: false,
  startY: 0
}
const getters = {
  num: state => state.index
}
const mutations = {
  getLength(state, length) {
    state.length = length
  },
  addTransTion(state, obj) {
    obj.style.transaction = 'all 0.5s'
    obj.style.webkitTransition = 'all 0.5s'
  },
  setTranslateX(state, obj) {
    let offsetX = -state.index * obj.offsetWidth / 10
    obj.style.transform = 'translateX(' + offsetX + 'px)'
    obj.style.webkitTransform = 'translateX(' + offsetX + 'px)'
  },
  removeTransition(state, obj) {
    obj.style.transition = 'none'
    obj.style.webkitTransition = 'none'
  },
  limove(state, ele) {
    let pages = ele.getElementsByTagName('li')
    for (var i = 0; i < pages.length; i++) {
      pages[i].className = ''
    }
    let num = state.index
    if (state.index > state.length - 2) {
      num = 1
    } else if (state.index <= 0) {
      num = state.length - 2
    }
    pages[num - 1].className = 'now'
  },
  transitionEnd(state, {obj, callback}) {
    if (typeof obj === 'object') {
      obj.addEventListener('webkitTransitionEnd', function () {
        callback && callback()
      })
      obj.addEventListener('transitionEnd', function () {
        callback && callback()
      })
    }
  },
  returnNum(state) {
    let num = state.index - 1
    return num
  },
  backgroundAlpha(state) {
    let opacity = 0
    window.onscroll = function () {
      let top = document.body.scrollTop
      if (top > 200) {
        opacity = 0.85
      } else {
        opacity = 0.85 * (top / 200)
      }
    }
    return opacity
  }
}

const actions = {
  timeFn({commit, state}, {obj, ele, callback}) {
    clearInterval(state.timer)
    state.timer = setInterval(() => {
      state.index++
      commit('addTransTion', obj)
      commit('setTranslateX', obj)
      commit('limove', ele)
      commit('transitionEnd', {obj, callback})
      if (state.index > 7) {
        state.index = 1
      }
    }, 2000)
  },
  timeEnd({commit, state}, obj) {
    if (state.index > state.length - 2) {
      state.index = 1
      commit('removeTransition', obj)
      commit('setTranslateX', obj)
    } else if (state.index <= 0) {
      state.index = state.length - 2
      commit('removeTransition', obj)
      commit('setTranslateX', obj)
    }
  },
  touchFn({commit, state}, {obj, ele, callback}) {
    let startX = 0

    let moveX = 0

    let isMove = false

    let offsetWidth = obj.offsetWidth / 10
    obj.addEventListener('touchstart', (e) => {
      isMove = false
      clearInterval(state.timer)
      startX = e.touches[0].clientX
      e.stopPropagation()
    })
    obj.addEventListener('touchmove', (e) => {
      isMove = true
      moveX = e.touches[0].clientX - startX
      commit('setTranslateX', obj)
    })
    obj.addEventListener('touchend', () => {
      if (isMove && Math.abs(moveX) > offsetWidth / 3) {
        if (moveX < 0) {
          state.index++
        } else if (moveX > 0) {
          state.index--
        }
      }
      commit('limove', ele)
      commit('addTransTion', obj)
      commit('setTranslateX', obj)
      state.timer = setInterval(() => {
        state.index++
        commit('limove', ele)
        commit('addTransTion', obj)
        commit('setTranslateX', obj)
        commit('transitionEnd', {obj, callback})
      }, 2000)
    })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
