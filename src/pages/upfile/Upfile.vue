<template>
  <div class="hello">
    <h2>文件上传</h2>
    <el-input placeholder="请输入密码" v-model="input" show-password style="margin:20px;width:80%"></el-input>
    <el-input placeholder="请输入文件名字" v-model="name" style="margin:20px;width:80%"></el-input>
    <el-button type="primary" @click="submit">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: [],
      input: '',
      name: '',
      url: 'http://localhost:3000/add'
    }
  },
  methods: {
    submit () {
      if (this.input === '' || this.name === '') {
        alert('请输入文件名和密码')
      } else {
        fetch(this.url, {
          method: 'POST', // *GET, POST, PUT, DELETE, 等.
          mode: 'cors', // no-cors（跨域模式但服务器端不支持cors）, cors（跨域模式，
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include（携带cookie）,
          headers: {
            'Content-Type': 'application/json',
            input: this.input,
            name: this.name
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
