<template>
  <div
    style="height: 100%;"
    v-loading="loading"
  >
    <h1>{{ msg }}</h1>
    <div style="display: flex; height: 70%;">
      <div style="flex:1">
        <video
          :src=courseName
          width="80%"
          height="100%"
          controls="controls"
        ></video>
      </div>
      <div style="width:300px;  background-color: white;">
        <div style="overflow: scroll; height: 70vh;">
          <ol @click="changeChapter">
            <li
              v-for="i in chapters"
              :key="i"
            >
              {{ i }}
            </li>
          </ol>
        </div>
      </div>
    </div>
    <h2>{{ courseName }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Seevideo',
  data () {
    return {
      msg: 'Welcome to seevideo App',
      chapter: '',
      before: null,
      loading: false,
      chapters: ['高二—春—白彦斌—高二数学春季提高课—1导数与定义上', '高二—春—白彦斌—高二数学春季提高课—1导数与定义下', '高二—春—白彦斌—高二数学春季提高课—2导数分类讨论上', '高二—春—白彦斌—高二数学春季提高课—2导数分类讨论下', '高二—春—白彦斌—高二数学春季提高课—3导数分类讨论应用上', '高二—春—白彦斌—高二数学春季提高课—3导数分类讨论应用下', '高二—春—白彦斌—高二数学春季提高课—4导数的经典练习和证明不等式的问题上', '高二—春—白彦斌—高二数学春季提高课—4导数的经典练习和证明不等式的问题下', '高二—春—白彦斌—高二数学春季提高课—5复数上', '高二—春—白彦斌—高二数学春季提高课—5复数下', '高二—春—白彦斌—高二数学春季提高课—6演绎推理上']
    }
  },
  computed: {
    courseName: function () {
      console.log(this.$route.query.name)
      return 'http://localhost:3000/video/' + this.$route.query.subject + '/' + this.$route.query.teacher + '/' + this.$route.query.name + '/' + this.chapter
    }
  },
  created: function () {
    console.log(123)
    this.postList(this.$route.query.subject, this.$route.query.teacher, this.$route.query.season, this.$route.query.name).then(res => {
      console.log(res.chapters)
      this.chapters = res.data.chapters
    })
  },
  methods: {
    changeChapter (e) {
      this.loading = true
      console.log(e)
      if (this.before && this.before.style && this.before.style.backgroundColor) {
        this.before.style.backgroundColor = 'white'
      }
      this.chapter = e.target.innerText
      this.before = e.target
      e.target.style.backgroundColor = 'bisque'
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    postList () {
      console.log(arguments)
      return this.$http({
        method: 'post',
        url: 'http://localhost:3000/getList',
        data: {
          subject: arguments[0],
          teacher: arguments[1],
          season: arguments[2],
          name: arguments[3]
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
ol {
  list-style-type: none;
  padding: 0px;
  height: 100%;
}
li {
  display: block;
  border: black solid 1px;
  margin: 5px;
  cursor: pointer;
  padding: 3px 6px;
}
.click {
  background-color: bisque;
}
a {
  color: #42b983;
}
</style>
