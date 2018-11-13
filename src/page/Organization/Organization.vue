<template>
  <div id='origanization'>
    <el-container>
      <el-header height="70px">
        <el-row>
          <el-col :span="6">
            <div class="grid-content">
              <h3>
                <span>组织架构</span>
                <i></i>
              </h3>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content head-right">
              <el-autocomplete
                  v-model="state4"
                  :fetch-suggestions="querySearchAsync"
                  placeholder="请输入内容"
                  @select="handleSelect">
              </el-autocomplete>
              <ul>
                <li><i></i><span>导入</span></li>
                <li><i></i><span>导出</span></li>
                <li><i></i><span>操作记录</span></li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        
      </el-main>
    </el-container>
    <h1>Origanization components</h1>
    <router-link to="/Organization/OperateRecord">历史记录</router-link>
    <router-link to="/Organization/StaffInfo">人员信息</router-link>
  </div>
</template>

<script>
  export default {
    name: 'origanization',
    data() {
      return {
        restaurants: [],
        state4: '',
        timeout: null
      };
    },
    methods: {
      loadAll() {
        return [
          {"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号"},
          {"value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号"},
          {"value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"},
          {"value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13"}
        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>

<style lang="stylus">
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
</style>
