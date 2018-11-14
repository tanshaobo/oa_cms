<template>
    <el-container id='origanization'>
      <el-header height='70px'>
        <el-row>
          <el-col :span='6'>
            <div class='grid-content'>
                <span>组织架构</span>
                <i></i>
            </div>
          </el-col>
          <el-col :span='18'>
            <div class='grid-content head-right'>
              <el-autocomplete
                  v-model='state4'
                  :fetch-suggestions='querySearchAsync'
                  placeholder='请输入内容'
                  @select='handleSelect'>
              </el-autocomplete>
              <ul>
                <li><el-button>导入</el-button></li>
                <li><el-button>导出</el-button></li>
                <li><el-button>操作记录</el-button></li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
            <div class='main-left grid-content'>
              <el-tree :data='structureTree' :props='defaultProps' @node-click='handleNodeClick'></el-tree>
            </div>
            <div class='main-right grid-content'>
              <el-row class='main-right-top'>
                <el-col :span='6' class='department-name'>技术部</el-col>
                <el-col :span='18' class='operate-column'>
                  <ul>
                    <li><el-button>编辑</el-button></li>
                    <li><el-button>新增子公司</el-button></li>
                    <li><el-button>新增子部门</el-button></li>
                    <li><el-button>删除</el-button></li>
                  </ul>
                </el-col>
                <el-col :span='24'>负责公司互联网产品的研发、平台运营、数据分析等工作负责公司互联网产品的研发、平台运营、数据分析等工作</el-col>
              </el-row>
              <el-row class='main-right-middle'>
                  <el-col :span='24'>
                    <div class='grid-content'>下级部门</div>
                  </el-col>
                  <el-scrollbar></el-scrollbar>
              </el-row>
              <el-row class='main-right-bottom'>
                <el-col :span='24'><div class='grid-content'>部门人员</div></el-col>
                <el-scrollbar></el-scrollbar>
              </el-row>
              <h1>Origanization components</h1>
              <router-link to='/Organization/OperateRecord'>历史记录</router-link>
              <router-link to='/Organization/StaffInfo'>人员信息</router-link>
            </div>
      </el-main>
    </el-container>
</template>

<script>
export default {
  name: 'origanization',
  data () {
    return {
      restaurants: [],
      state4: '',
      timeout: null,
      structureTree: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    loadAll () {
      return [
        {'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号'},
        {'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号'},
        {'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113'},
        {'value': '南拳妈妈龙虾盖浇饭', 'address': '普陀区金沙江路1699号鑫乐惠美食广场A13'}
      ]
    },
    querySearchAsync (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      console.log(item)
    },
    handleNodeClick (data) {
      console.log(data)
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  }
}
</script>

<style lang='stylus'>
#origanization
  .el-header
    line-height 70px
    background #FFFFFF
    h3
      margin 0
    .head-right
      text-align right
      ul
        margin 0
        display inline-block
        li
          display inline-block
          margin 0 20px
  .el-main
    height calc(100% - 110px)
    position absolute
    top 70px
    width calc(100% - 40px)
    background #FFFFFF
    padding 0
    margin 20px
    .main-left
      width 340px
      position absolute
      left 0
      top 0
      height 100%
      border-right 1px solid rgba(234,239,245,1)
    .main-right
      position absolute
      width calc(100% - 340px)
      height 100%
      right 0
      top 0
      .main-right-top
        .operate-column
          text-align right
          ul
            margin 0
            padding 0
            li
              display inline-block
              list-style-type none
      .main-right-middle
        .el-scrollbar
          max-height 200px
      .main-right-bottom
        .el-scrollbar
          max-height calc(100% - 420px)
</style>
