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
        <div class="social-login">
          <el-button class="alipay-button" size="mini" @click="loginWithAliPay">AliPay</el-button>
          <el-button class="wechat-button" size="mini" @click="loginWithWeChat">WeChat</el-button>
        </div>
    </el-form>
  </body>
</template>

<script>
export default {
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
      if (this.ruleForm.loginName === '') {
        this.$message({
              message: '登录失败',
              type: 'fail'
              });
        return;
      }
      sessionStorage.setItem('loginName', this.ruleForm.loginName);
      // this.axios.post('http://localhost:8081/sys-user/login', this.ruleForm).then((resp) =>{
      this.axios.post('/sys-user/login', this.ruleForm).then((resp) =>{
          let data = resp.data;
          console.info(data);
          if(data.success){
              this.ruleForm = {};
              this.$message({
              message: '登录成功',
              type: 'success'
              });
              // sessionStorage.setItem('token', data.content);
              this.$router.push({path:'/Home'})
          } else {
            this.$message({
              message: '登录失败',
              type: 'fail'
              });
          }
      })
    },
    toRegister() {
      this.$router.push({path:'/Register'})
    },
    loginWithAliPay() {
      // Implement your AliPay login logic here
      console.log('Login with AliPay');
      // For example, redirect to AliPay login URL or handle it through your API
      const encodedUrl = encodeURIComponent(this.$baseUrl + '/Callback');
      window.location.href = 'https://openauth-sandbox.dl.alipaydev.com/oauth2/publicAppAuthorize.htm?app_id=' + '9021000141654921' + '&scope=' + 'auth_user' + '&redirect_uri=' + encodedUrl;
      // window.location.href = 'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=' + '2021004190697081' + '&scope=' + 'auth_user' + '&redirect_uri=' + encodedUrl;
    },
    loginWithWeChat() {
      // Implement your WeChat login logic here
      console.log('Login with WeChat');
      // For example, redirect to WeChat login URL or handle it through your API
    }
  }
}
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?ff68a847104cf85c8ce8a68fe3e26007";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
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
    .social-login {
      display: flex;
      justify-content: flex-start; /* Align buttons to the left */
      margin-top: 20px;
    }
    .alipay-button {
      background-color: #007bff !important; /* Blue */
      color: white !important; /* White text */
    }
    .wechat-button {
      background-color: #3dbb3d !important; /* Green */
      color: white !important; /* White text */
    }
</style>
