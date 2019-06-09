<template>
  <div class="form-wrapper">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="form">
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item class="denglu">
        <el-button type="primary" @click="onSubmit">登陆</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //表单的数据

      form: {
        username: "",
        password: ""
      },
      //表单验证规则
      rules: {
        //required表示必填项
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },

  methods: {
    onSubmit() {
      //提交到后台的数据
      const data = {
        uname: this.form.username,
        upwd: this.form.password
      };
      //如果验证不成功，不提交表单
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.$axios({
            method: "POST",
            url: "http://localhost:8899/admin/account/login",
            data
          }).then(res => {
            console.log(res);
              //结构并赋值
            const {message,status}=res.data
            if(status==0){
                this.$router.push('/admin')
            }
            if(status==1){
                this.$message.error(message)
            }
          });
        }
      });
    }
  }
};
</script>

<style>
.form-wrapper {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.form {
  width: 500px;
  position: absolute;
  left: 50%;
  margin-left: -250px;
  top: 50%;
  margin-top: -95px;
}
.denglu {
  text-align: center;
}
</style>
