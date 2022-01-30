import $store from '@/store'

function resize() {
  if ($store) {
    const windowInnerHeight = window.innerHeight
    const windowInnerWidth  = window.innerWidth
    $store.dispatch('app/resize', { windowInnerHeight, windowInnerWidth })
    console.log(`Window resized: ${windowInnerWidth} x ${windowInnerHeight}`)
  }
}

var ms = 300
var lastClick = Date.now() - ms

window.onresize = function() {
  if (Date.now() - lastClick >= ms) {
    resize()
    lastClick = Date.now()
  }
}
