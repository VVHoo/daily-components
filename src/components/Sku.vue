<template>
    <div class="sku-group">
        <div class="sku-row" v-for="(skuType, index) in skuRow" :key="index">
            <div class="sku-row__type">{{skuType[0]}}</div>
            <div class="sku-row__content">
                <span class="sku-item" v-for="(skuItem, skuIndex) in skuType[1]" :key="skuIndex" @click="select(index, skuIndex)">{{skuItem.item}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../data'
export default {
  computed: {
    skuRow () {
      return Object.entries(data.filter_spec)
    },
    maps () {
      return Object.values(data.filter_spec).map((items) => {
        return Object.values(items).map(item => {
          return item.item_id
        })
      })
    },
    openWay () {
      return data.spec_goods_arr.map(item => {
        return item.join(':')
      })
    }
  },
  mounted () {
  },
  methods: {
    select (xIndex, yIndex) {
    }
  }
}
</script>

<style lang="scss" scoped>
    .sku-group {
        width: 100%;
        .sku-row {
            margin-bottom: 10px;
            &__type {
                color: #333;
            }
            &__content {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .sku-item {
                    margin: 5px 0;
                    padding: 5px 10px;
                    border: 1px solid #999;
                    &__active {
                        color: #ef5350;
                        background: #ef5350;
                    }
                    &__disabled {
                        color: #eee;
                        background: #eee;
                    }
                }
            }
        }
    }
</style>
