<template>
    <div class="box">
        <div class="card">
            <div class="l" ref="lContainer">
                <!--<img :src="getImage">-->
                <img v-img="{ hash: '/mpImages/exam/default_cover_big.png', width: 260 }">
            </div>
            <div class="r">
                <div class="t">滴滴滴会员卡</div>
                <div class="b">￥100.00</div>
            </div>
        </div>
        <button @click="getData">getData</button>
    </div>
</template>

<script>
import { resize, canWebp } from '@/utils/imgFilter'
export default {
  name: 'ImagesTest',
  computed: {
    getImage () {
      let size = parseInt(resize(260))
      let url = 'https://apps-prd.oss-cn-shenzhen.aliyuncs.com/mpImages/exam/default_cover_big.png'
      return canWebp ? `${url}?x-oss-process=image/resize,w_${size}/format,webp/quality,Q_100` : `${url}?x-oss-process=image/resize,w_${size}/quality,Q_100`
    }
  },
  methods: {
    getData () {
      this.$http.get('/web/index/appIndex?cityid=326').then(res => {
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .box {
        .card {
            display: flex;
            .l {
                width: 400px;
                img {
                    max-width: 100%;
                    display: block;
                }
            }
            .r {
                width: 100%;
            }
        }
    }
</style>
