<template>
  <div id='main'>
    <el-container>
        <el-aside width="230px">
            <LeftNav></LeftNav>
        </el-aside>
      <el-container>
          <el-header height="70px">
            <Header></Header>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>
              <Footer></Footer>
          </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import LeftNav from '@/components/LeftNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'auth',
  components: {
    Header,
    LeftNav,
    Footer
  }
}
</script>

<style scoped lang="stylus">
#main
  height 100%
.el-footer
  background-color #3B3B3B
  color #333
  text-align center
  line-height 60px
.el-header
  border-bottom 1px solid #EAEFF5
.el-footer
  background-color #eee
.el-main
  padding 0
  background #F5F6FA
  position relative
.el-container
  height 100%
</style>
