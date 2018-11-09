<template>
  <div id='origanization'>
    <Header></Header>
    <h1>Origanization components</h1>
    <router-link to="/Organization/OperateRecord">历史记录</router-link>
    <router-link to="/Organization/StaffInfo">人员信息</router-link>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'origanization',
  components: {
    Header
  }
}
</script>

<style lang="stylus">
#auth
  border 1px solid red
</style>
