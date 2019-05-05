<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-lable">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="username" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-lable">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="password" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{passwordErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn" >
          <a class="button" @click="login">登录</a>
        </div>
      </div>
      <p>{{errorText}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      errorText: ''
    }
  },
  computed: {
    userErrors () {
      let errorText, status
      if (!/@/g.test(this.username)) {
        status = false
        errorText = "未包含@"
      } else {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let errorText, status
      if (!/^\w{1,6}$/g.test(this.password)) {
        status = false
        errorText = "请输入6位数密码"
      } else {
        status = true
        errorText = ''
      }
       if (!this.passwordFlag) {
        errorText = ''
        this.passwordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    login () {
      if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = "部分选项未通过"
      } else {
        this.errorText = ''
        this.$http.get('api/login')
        .then((res) => {
          this.$emit('has-log', res.data)
        }, (err) => {
          console.log(err)
        })
      }
    }
  }
};
</script>
<style scoped>
</style>

