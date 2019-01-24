let html = document.documentElement

const canWebp = () => {
  return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
}

let resize = function (size) {
  let viewWidth
  let dpr = window.devicePixelRatio
  let dataDpr = document.documentElement.getAttribute('data-dpr')
  let ratio = dataDpr ? (dpr / dataDpr) : dpr
  try {
    viewWidth = +(html.getAttribute('style').match(/(\d+)/) || [])[1]
  } catch (e) {
    let w = html.offsetWidth
    if (w / dpr > 540) {
      viewWidth = 540 * dpr / 10
    } else {
      viewWidth = w / 10
    }
  }
  viewWidth = viewWidth * ratio
  if (Number(viewWidth) >= 0 && typeof viewWidth === 'number') {
    return (size * viewWidth) / 75 // 75 is the 1/10 iphone6 deivce width pixel
  } else {
    return size
  }
}

export {
  resize,
  canWebp
}
