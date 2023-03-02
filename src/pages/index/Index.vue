<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-carousel
      :interval="4000"
      type="card"
      height="200px"
    >
      <el-carousel-item
        v-for="item in 6"
        :key="item"
      >
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <span class="demonstration">请选择你想要的老师</span>
    <el-cascader
      v-model="value"
      :options="options"
      @change="handleChange"
      style="margin-left: 30px;"
    >
    </el-cascader>
    <el-tabs
      v-model="activeSeason"
      @tab-click="handleChange"
    >
      <el-tab-pane
        label="春"
        name="spring"
      >春</el-tab-pane>
      <el-tab-pane
        label="夏"
        name="summer"
      >夏</el-tab-pane>
      <el-tab-pane
        label="秋"
        name="autumn"
      >秋</el-tab-pane>
      <el-tab-pane
        label="冬"
        name="winter"
      >冬</el-tab-pane>
      <el-tab-pane
        label="其他"
        name="other"
      >其他</el-tab-pane>
    </el-tabs>
    <div class="flex">
      <!-- <Card
        class="flexItem"
        v-for="(i, index) in videoPho"
        :key="index"
        :name="i"
        @click="clickCard"
      ></Card> -->
      <Card
        class="flexItem"
        v-for="(i, index) in videoPho"
        :subject="value[0]"
        :teacher="value[1]"
        :season="activeSeason"
        :key="index"
        :name="i"
      ></Card>
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
      videoPho: [],
      value: ['maths', 'ayh'],
      options: [{
        value: 'maths',
        label: '数学',
        children: [{
          value: 'ayh',
          label: '安永贺'
        }, {
          value: 'byb',
          label: '白彦斌'
        }, {
          value: 'glm',
          label: '郭丽梅'
        }, {
          value: 'mjl',
          label: '苗金利'
        }, {
          value: 'smhl',
          label: '司马红丽'
        }]
      }, {
        value: 'physics',
        label: '物理',
        children: [{
          value: 'jbw',
          label: '蒋博文'
        }, {
          value: 'wp',
          label: '王鹏'
        }]
      }]
    }
  },

  methods: {
    clickCard (e, i) {
      console.log(arguments)
      console.log(1)
      window.open(`./${i}`)
      console.log(1)
    },
    handleChange () {
      console.log(this.value, this.activeSeason)
      this.postData(this.value[0], this.value[1], this.activeSeason).then(res => {
        console.log(res.data)
        this.videoPho = res.data.course.map(a => (a.split('—'))[3])
      })
    },
    postData () {
      console.log(arguments)
      return this.$http({
        method: 'post',
        url: 'http://localhost:3000/course',
        data: {
          subject: arguments[0],
          teacher: arguments[1],
          season: arguments[2]
        }
      })
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
  color: #217fdf;
}
.flex {
  margin: 20px;
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
