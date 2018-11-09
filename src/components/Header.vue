<template>
  <div id='auth'>
    <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <img src="../assets/loginlogo.png" height="60" width="242" alt="">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <ul>
                        <li>
                            <a href="">
                                <i class="el-icon-setting"></i>
                                <span>设置</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>账户管理</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="el-icon-bell"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="el-icon-service"></i>
                                <span>包租婆</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
  </div>
</template>
<script>
export default {
  name: 'auth'
}
</script>

<style scoped lang="stylus">
    #auth
        height 60px
        ul
            list-style none
            padding 0
            margin 0
            li
                display inline-block
                color #fff
                height 60px
                line-height 60px
                padding 0 10px
</style>
