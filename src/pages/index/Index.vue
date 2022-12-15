<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="数学" name="first">
        <span slot="label"><i class="el-icon-date"></i> 数学</span>
          <strong>数学</strong>
      </el-tab-pane>
      <el-tab-pane label="物理" name="second">
        <video src="http://localhost:3000/video" width="500" controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="其他" name="third">其他</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeName: 'second',
      msg: '欢迎访问精华在线'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
