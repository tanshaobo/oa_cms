<template>
  <div id='leftNav'>
    <div class="logo">
      <img src="/static/public/logo_icon.png">
      <p>OA管理平台</p>
    </div>
    <el-scrollbar >
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            background-color="#22293F"
            text-color="#fff"
            active-background-color="#2D4164"
            @close="handleClose" unique-opened>
          <el-menu-item index="1">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>工作中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">新建工作</el-menu-item>
              <el-menu-item index="2-2">待办工作</el-menu-item>
              <el-menu-item index="2-3">已办工作</el-menu-item>
              <el-menu-item index="2-4">抄送我的</el-menu-item>
              <el-menu-item index="2-5">全部工作</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">人力资源</span>
            </template>
            <el-submenu index="3-1">
              <span slot="title">招聘管理</span>
              <el-menu-item index="3-1-1">简历管理</el-menu-item>
              <el-menu-item index="3-1-2">面试管理</el-menu-item>
            </el-submenu>
            <el-menu-item-group>
              <el-menu-item index="3-2">员工管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="3-3">薪酬管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="3-4">培训管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="3-5">绩效管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>行政办公</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">办公用品</el-menu-item>
              <el-menu-item index="4-2">会议申请与安排</el-menu-item>
              <el-menu-item index="4-3">资产管理</el-menu-item>
              <el-menu-item index="4-4">公告通知</el-menu-item>
              <el-menu-item index="4-5">规章制度</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>财务管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">采购</el-menu-item>
              <el-menu-item index="5-2">报销</el-menu-item>
              <el-menu-item index="5-3">备用金</el-menu-item>
              <el-menu-item index="5-4">印章使用</el-menu-item>
              <el-menu-item index="5-5">发票开具</el-menu-item>
              <el-menu-item index="5-6">外带</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <span slot="title">组织架构</span>
          </el-menu-item>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1">角色</el-menu-item>
              <el-menu-item index="7-2">管理员</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name: 'auth',
  data () {
    return {
      isCollapse: true,
      functionList: [
        {name: '首页'},
        {name: '工作中心', children: [{name: '新建工作'}, {name: '代办工作'}, {name: '已办工作'}, {name: '抄送我的'}, {name: '全部工作'}]},
        {name: '人力资源', children: [{name: '招聘管理', children: [{name: '简历管理'}, {name: '面试管理'}]}, {name: '员工管理'}, {name: '薪酬管理'}]},
        {name: '行政办公', children: [{name: '办公用品'}, {name: '会议申请与安排'}, {name: '资产管理'}, {name: '公告通知'}, {name: '规章制度'}]},
        {name: '财务管理', children: [{name: '采购'}, {name: '报销'}, {name: '备用金'}, {name: '印章使用'}, {name: '发票开具'}, {name: '外带'}]},
        {name: '组织架构'},
        {name: '权限管理', children: [{name: '角色'}, {name: '管理员'}]}
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="stylus">
#leftNav
  background #22293F
  color #FFFFFF
  .logo
    padding 10px 0
    img
      display block
      width 58px
      height 58px
      margin 10px auto
    p
      margin 0
      font-size 22px
      text-align center
      line-height 42px
      font-family PingFang-SC-Medium
      font-weight bold
  .el-menu-vertical-demo:not(.el-menu--collapse)
    width 230px
    min-height 400px
    background-color #22293F
    color #FFFFFF
  .is-active
    background-color #2D4164!important
</style>

<style lang="stylus">
#leftNav
  position fixed
  top 0
  bottom 0
  .el-scrollbar
    height calc(100% - 140px)
    .el-scrollbar__wrap
      overflow-x hidden
</style>
