<template>
  <div class="poster">
    <el-form :model="ruleForm" class="register-container" label-position="left"  ref="ruleForm" label-width="0px">
      <LanguageSwitcher/>
      <h3 class="register_title">
            {{ $t('table.title') }}
      </h3>
      <el-form-item label="" prop="loginName">
        <el-input type="text" prefix-icon="el-icon-user-solid" v-model="ruleForm.loginName" :placeholder="$t('table.accountReg')"></el-input>
      </el-form-item>
      <el-form-item label="" prop="name">
        <el-input type="text" prefix-icon="el-icon-user-solid" v-model="ruleForm.name" :placeholder="$t('table.nameReg')"></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input type="password" v-model.number="ruleForm.password" :placeholder="$t('table.passwordReg')"></el-input>
      </el-form-item>
      <el-form-item label="" prop="checkPass">
        <el-input type="password" v-model.number="ruleForm.checkPass" :placeholder="$t('table.passwordReg2')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="background:#505458;border:none" @click="submitForm('ruleForm')">{{ $t('table.regBut') }}</el-button>
        <el-button @click="resetForm('ruleForm')">{{ $t('table.reset') }}</el-button>
        <el-button @click="toLogin()">{{ $t('table.logBut') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'Regaister',
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          loginName: '',
          name: '',
          password: '',
          checkPass: ''
        },
        rules: {
          loginName: [
            { required:true, message:"请输入", trigger: 'blur' },
            { min:2, max:9, message:"长度2-9", trigger: 'blur' }
          ],
          name: [
            { required: true, message:"请输入", trigger: 'blur' },
            { min:2, max:9, message:"长度2-9", trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.axios.post(this.$baseUrl + '/sys-user/register', this.ruleForm).then((resp) =>{
            let data = resp.data;
            if(data.success){
                this.ruleForm = {};
                this.$message({
                message: '注册成功',
                type: 'success'
                });
            }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      toLogin() {
        this.$router.push({path:'/'})
      }
    }
}
</script>

<style>
    #poster{
        background-position:center;
        height:100%;
        width:100%;
        background-size:cover;
        position:fixed;
        margin:0px;
        padding:0ps;
    }
    .register-container{
        border-radius:15px;
        background-clip:padding-box;
        margin:90px auto;
        padding:35px 35px 15px 35px;
        width:350px;
        background:#fff;
        border:1px solid #eaeaea;
        box-shadow:0 0 25px #cac6c6;
    }
    .register_title{
        margin: 0px auto 40px auto;
    }
</style>