const VueImg$1 = Object.create(null)

// Check webP support
VueImg$1.canWebp = !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
// Default cdn prefix
const protocol = location.protocol === 'https:' ? 'https://' : 'http://'
VueImg$1.cdn = protocol + 'apps-prd.oss-cn-shenzhen.aliyuncs.com/'

const install = (Vue, options) => {
  Vue.directive('img', {
    bind (el, binding, vnode) {
      // 渲染首屏图片，加载默认图片
    },
    inserted (el, binding, vnode) {
      // 加载当前可见区域图片
    }
  })
}

export default install
