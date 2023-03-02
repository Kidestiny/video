<template>
  <div class="card">
    <p>{{ name }}</p>
    <el-button
      size="small"
      class="cardButton"
      @click="myClick"
    >查看课程</el-button>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['name', 'subject', 'teacher', 'season'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    myClick () {
      window.open(`./#/Seevideo?name=${this.name}&subject=${this.subject}&teacher=${this.teacher}&season=${this.season}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  border: 2px solid rgb(208, 207, 200);
  border-radius: 20px;
  height: 150px;
  margin-bottom: 5px;
  box-shadow: 0 1px 0 #fff, inset 0 -15px 0 rgb(255 255 255 / 25%),
    0 5px 0 rgb(0 0 0 / 15%);
  background: #217fdf;
}
p {
  margin-top: 25px;
  text-align: center;
}
.cardButton {
  border-radius: 5px;
  background-color: aliceblue;
}
</style>
