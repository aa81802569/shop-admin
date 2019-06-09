<template >
  <el-container class="container">
    <el-aside width="auto" >
      <Menu :isShow="adminIsShow"/>
    </el-aside>

    <el-container>
      <el-header >
        <Header @adminClick="aa"/>
      </el-header>

      <el-main>
        <mianbao/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
//引入头部文件
import Header from "../components/Header.vue";
//导入导航组件
import Menu from "../components/Menu.vue";
//引入mianbao组件
import Mianbao from "../components/mianbao.vue";
export default {
  //注册组件
  components: {
    Header,
    Menu,
    Mianbao
  },
  data(){
      return{
          adminIsShow:false
      }
  },
  methods:{
      aa:function(){
          this.adminIsShow=!this.adminIsShow;
      }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
