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
      </el-tab-pane>
      <el-tab-pane label="物理" name="second"></el-tab-pane>
      <el-tab-pane label="其他" name="third"></el-tab-pane>
    </el-tabs>
    <el-tabs v-model="activeSeason" @tab-click="handleClick">
      <el-tab-pane label="春" name="spring">春</el-tab-pane>
      <el-tab-pane label="夏" name="summer">夏</el-tab-pane>
      <el-tab-pane label="秋" name="autumn">秋</el-tab-pane>
      <el-tab-pane label="冬" name="winter">冬</el-tab-pane>
      <el-tab-pane label="全部" name="all">全部</el-tab-pane>
    </el-tabs>
    <div class="flex">
      <Card class="flexItem" v-for="(i, index) in videoPho" :key="index" :name="i" @click="clickCard"></Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'HelloWorld',
  components: { Card },
  data () {
    return {
      activeName: 'second',
      activeSeason: 'spring',
      msg: '欢迎访问精华在线',
      videoMath: ['1', '2'],
      videoPho: ['3', '4', '4fd', 'f4', '4fd', 'f4', '4fd', 'f4', '4踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩从ff']
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
      console.log(this.activeName, this.activeSeason)
    },
    clickCard () {
      window.open = 'https://www.baidu.com/s?ie=UTF-8&wd=%E7%82%B9%E5%87%BB%E8%B7%B3%E8%BD%AC%E7%BD%91%E9%A1%B5'
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
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.flexItem {
  width: 24%;
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
