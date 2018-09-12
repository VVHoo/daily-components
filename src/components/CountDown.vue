<template>
  <div class="count-down">{{countDownText}}</div>
</template>

<script>
export default {
  props: {
    beginTime: Number,
    endTime: Number,
    match: String
  },
  data () {
    return {
      interval: null,
      remainingTime: 0,
      countDownText: '',
      realTime: 0
    }
  },
  mounted () {
    this.realTime = this.beginTime
    this.remainingTime = Math.abs(this.endTime - this.realTime)
    this.startClock()
  },
  deactivated () {
    this.stopClock()
  },
  methods: {
    startClock () {
      let type = this.match.split(':')[0].toUpperCase()
      this.interval = setInterval(() => {
        let day = Math.floor(this.remainingTime / 60 / 60 / 24 % 24, 10)
        let hour = Math.floor(this.remainingTime / 60 / 60 % 24, 10) < 10 ? '0' + Math.floor(this.remainingTime / 60 / 60 % 24, 10) : Math.floor(this.remainingTime / 60 / 60 % 24, 10)
        let minutes = Math.floor(this.remainingTime / 60 % 60, 10) < 10 ? '0' + Math.floor(this.remainingTime / 60 % 60, 10) : Math.floor(this.remainingTime / 60 % 60, 10)
        let seconds = Math.floor(this.remainingTime % 60, 10) < 10 ? '0' + Math.floor(this.remainingTime % 60, 10) : Math.floor(this.remainingTime % 60, 10)
        switch (type) {
          case 'DD':
            this.countDownText = `剩余 ${day} 天 ${hour} 小时 ${minutes} 分钟 ${seconds} 秒`
            break
          case 'HH':
            this.countDownText = `剩余 ${hour} 小时 ${minutes} 分钟 ${seconds} 秒`
            break
          case 'MM':
            this.countDownText = `剩余 ${minutes} 分钟 ${seconds} 秒`
            break
        }
        this.calculateTime()
      }, 1000)
    },
    calculateTime () {
      this.realTime++
      this.remainingTime = Math.abs(this.endTime - this.realTime)
    },
    stopClock () {
      clearInterval(this.interval)
    }
  }
}
</script>

<style scoped>
</style>
