/**
 * Created by user on 2017/10/19.
 */
export default {
  getTime(state, straData) {
    // 时间戳以毫秒为单位   /1000转化为秒
    let data = straData
    for (let i = 0; i < data.length; i++) {
      // 获取当前时间的时间戳 - 对应的时间戳
      let differTime = (Date.parse(new Date()) / 1000) - data[i].timestamp
//          天数
      let day = parseInt(differTime / (60 * 60 * 24))
//          小时
      let Hour = parseInt(differTime / 3600) % 24
      if (day >= 1) {
        let str = data[i].time.substr(5, 5)
        data[i].differTime = str
      } else {
        data[i].differTime = `${Hour}小时前`
      }
    }
  },
  touchWidth(state, obj) {
    obj.addEventListener('touchstart', (e) => {
      // 获取手指刚触摸屏幕时的位置
      state.startX = e.touches[0].clientX
      e.stopPropagation()
    })
    obj.addEventListener('touchmove', (e) => {
      state.moveX = e.touches[0].clientX - state.startX
    })
    obj.addEventListener('touchend', (e) => {
      let width = obj.firstChild.clientWidth
      state.width = width
      if (state.moveX <= (-Math.round(width / 4))) {
        state.moveWidth = -width
      } else if (state.moveX >= (Math.round(width / 4))) {
        state.moveWidth = 0
      }
      obj.style.transaction = 'all 0.5s'
      obj.style.webkitTransition = 'all 0.5s'
      obj.style.transform = 'translateX(' + state.moveWidth + 'px)'
      obj.style.webkitTransform = 'translateX(' + state.moveWidth + 'px)'
    })
  },
  clickSpanFn(state, {obj, num}) {
    let width = obj.firstChild.clientWidth
    if (num === 0) {
      state.moveWidth = 0
    } else if (num === 1) {
      state.moveWidth = -width
    }
    obj.style.transaction = 'all 0.5s'
    obj.style.webkitTransition = 'all 0.5s'
    obj.style.transform = 'translateX(' + state.moveWidth + 'px)'
    obj.style.webkitTransform = 'translateX(' + state.moveWidth + 'px)'
  }
}
