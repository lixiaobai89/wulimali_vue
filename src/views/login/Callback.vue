<template>
  <body id="poster">
    
  </body>
</template>

<script>
export default {
  //页面加载时执行
  data() {
    return {
      authBody: {
        authCode: this.$route.query.auth_code,
        appId: this.$route.query.app_id,
      }
    }
  },
  //页面加载时执行
  mounted() {
    this.axios.post(this.$baseUrl_api + '/api/ali/callback', this.authBody).then((resp) =>{
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
}
</script>

<style>

</style>
