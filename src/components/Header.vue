<template>
  <div id='Header' >
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="8">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <ul>
            <li>
            <router-link to=""><i class=""></i></router-link>
            </li>
            <li>
              <router-link to="">
                <span>账户管理</span>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="el-icon-setting"></i>
              </router-link>
            </li>
                        <li>
              <router-link to="">
                <i class="el-icon-bell"></i>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <i class="el-icon-service"></i>
                <span>包租婆</span>
              </router-link>
            </li>
          </ul>
        </div>
      </el-col>
        </el-row>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      options: [{
        value: '1',
        label: '猿马网络'
      }, {
        value: '2',
        label: '山舟网络'
      }, {
        value: '3',
        label: '热巢网络'
      }, {
        value: '4',
        label: '光耀网络'
      }],
      value: '1'
    }
  }
}
</script>

<style scoped lang="stylus">
#Header
  background #FFFFFF
  border-bottom 1px solid #EAEFF5
  .el-row
    height 69px
  ul
    list-style none
    padding 0
    margin 0
    text-align right
    li
      display inline-block
      color #434a5d;
      vertical-align: top;
      a
        display block
        text-decoration none
        color #434A5D
      i
        display inline-block
        width 20px
        height 20px
        padding 25px 20px
        vertical-align top
        &:before
          font-size 20px
      span
        display inline-blick
        line-height 70px
</style>

<style lang="stylus">
#Header
  .el-select
    height 70px
    .el-input
      .el-input__inner
        margin 14px 0
        font-size 30px
        font-family MicrosoftYaHei-Bold
        font-weight bold
        color rgba(51,51,51,1)
        border none
      .el-input__suffix
        display none
</style>
