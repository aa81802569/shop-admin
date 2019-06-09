<template>
  <el-row type="flex" justify="space-between">
   <div class="arrow" @click="handleClick"><i class="el-icon-back"></i></div>
   <div>admin 超级管理员 退出</div>
  </el-row>
</template>

<script>
export default {
 methods:{
   handleClick:function(){
     this.$emit('adminClick')
   }
 }
};
</script>

<style scoped>
.arrow{
    cursor:pointer;
}
</style>
