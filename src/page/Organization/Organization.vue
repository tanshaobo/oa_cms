<template>
  <div id='origanization'>
    <el-container>
            <el-header>
                <app-header></app-header>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <app-menu></app-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <app-main></app-main>
                    </el-main>
                    <el-footer>
                        <app-footer></app-footer>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue'
import AppMenu from '@/components/LeftNav.vue'
import AppMain from '@/components/Main.vue'
import AppFooter from '@/components/Footer.vue'
export default {
  name: 'auth',
  components: {
    AppHeader,
    AppMenu,
    AppMain,
    AppFooter
  }
}
</script>

<style scoped lang="stylus">
    #origanization
        height 100%
    .el-header, .el-footer
        background-color #3B3B3B
        color #333
        text-align center
        line-height 60px
    .el-footer
        background-color #eee
    .el-aside
        color #333
        text-align center
        line-height 200px
        text-align left!important
    .el-main
        background-color #e6e6e6
        color #333
        text-align center
        line-height 160px
    .el-container
        height 100%
</style>
