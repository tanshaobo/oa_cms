<template>
  <div id='auth'>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose" unique-opened>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>组织架构</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选添加人员</el-menu-item>
              <el-menu-item index="1-2">人员详情</el-menu-item>
              <el-menu-item index="1-3">导入</el-menu-item>
              <el-menu-item index="1-4">历史记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">按部门</el-menu-item>
              <el-menu-item index="2-2">人员详情</el-menu-item>
              <el-menu-item index="2-3">导入</el-menu-item>
              <el-menu-item index="2-4">历史记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>工作中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">按部门</el-menu-item>
              <el-menu-item index="3-2">人员详情</el-menu-item>
              <el-menu-item index="3-3">导入</el-menu-item>
              <el-menu-item index="3-4">历史记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">人力资源</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-document"></i>
            <span slot="title">财务管理</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-setting"></i>
            <span slot="title">数据中心</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-setting"></i>
            <span slot="title">数据中心</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'auth',
  data () {
    return {
      isCollapse: true
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
    .el-menu-vertical-demo:not(.el-menu--collapse)
        width 200px
        min-height 400px
    .is-active
        background-color rgb(67, 74, 80)!importan
</style>
