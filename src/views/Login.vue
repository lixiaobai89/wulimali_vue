<template>
  <body id="poster">
    <el-form class="login-container" label-position="left" label-width="">
        <LanguageSwitcher/>
        <h3 class="login_title">
            {{ $t('table.title') }}
        </h3>
        <el-form-item label="">
            <el-input type="text" v-model="ruleForm.loginName" :placeholder="$t('table.accountLog')"></el-input>
        </el-form-item>
        <el-form-item label="">
            <el-input type="password" v-model="ruleForm.password" :placeholder="$t('table.passwordLog')"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="background:#505458;border:none" @click="submitForm('ruleForm')">{{ $t('table.logBut') }}</el-button>
            <el-button @click="toRegister()">{{ $t('table.regBut') }}</el-button> 
        </el-form-item>
    </el-form>
  </body>
</template>

<script>
// import LanguageSwitcher from '../components/LanguageSwitcher.vue';
import CountryFlag from 'vue-country-flag';

export default {
  // components: {
  //   LanguageSwitcher
  // },
  // components: {
  //   CountryFlag
  // },
  mounted() {
  },
  name: 'Login',
  data() {
      return {
        ruleForm: {
          loginName: '',
          password: ''
        }
      }
    },
    methods: {
      toggleLanguage() {
        // Toggle between 'en' and 'zh' (or any other languages you define)
        const newLocale = this.$i18n.locale === 'en' ? 'zh' : 'en';
        this.$i18n.locale = newLocale;
      },
      submitForm(formName) {
        // this.axios.post('http://localhost:8081/sys-user/login', this.ruleForm).then((resp) =>{
        this.axios.post(this.$baseUrl + '/sys-user/login', this.ruleForm).then((resp) =>{
            let data = resp.data;
            console.info(data);
            if(data.success){
                this.ruleForm = {};
                this.$message({
                message: '登录成功',
                type: 'success'
                });
                sessionStorage.setItem('token', data.content);
                this.$router.push({path:'/Home'})
            }
        })
      },
      toRegister() {
        this.$router.push({path:'/Register'})
      }
    }
}
</script>

<style>
    body{
        margin:0px;
        padding:0ps;
    }
    #poster{
        background-position:center;
        height:100%;
        width:100%;
        background-size:cover;
        position:fixed;
    }
    .login-container{
        border-radius:15px;
        background-clip:padding-box;
        margin:90px auto;
        padding:35px 35px 15px 35px;
        width:350px;
        background:#fff;
        border:1px solid #eaeaea;
        box-shadow:0 0 25px #cac6c6;
    }
    .login_title{
        margin: 0px auto 40px auto;
    }
    
    .language-switcher {
      position: fixed;
      top: 10px;
      right: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .globe-icon {
      font-size: 24px;
      margin-right: 10px;
    }
</style>
