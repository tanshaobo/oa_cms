<template>
  <div class="oa-footer">
    版权所有    2018© 北京猿马网络技术有限公司
  </div>
</template>
<script>
import { testapi } from '@/api/index'
export default {
  name: 'auth',
  data () {
    return {
      a: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
     console.log (1)
    }
  }
}
</script>
<style scoped lang="stylus">

</style>
