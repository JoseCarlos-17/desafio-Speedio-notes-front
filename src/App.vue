<template>
  <el-row id="app">
    <el-col :span="20" :offset="2">
      <HeaderComponent :data="menuItens"/>
      <div class="main-content"><router-view /></div>
    </el-col>
  </el-row>
</template>

<script>
import HeaderComponent from '../src/components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  
  data() {
    return {
      menuItens: [
        { label: 'Home', link: '/' },
        { label: 'Criar anotação', link: '/newnote' },
        { label: 'Lista de anotações', link: 'noteslist' },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  /* color: #2c3e50; */
  margin: 30px 50px auto 50px;
  height: 600px;
}

.main-content{
  background: rgba(102, 0, 102, 0.562);
  height: 800px;
}

html {
  background: linear-gradient(to left, rgb(20, 20, 66), rgb(80, 39, 133), white, rgb(80, 39, 133), rgb(20, 20, 66)) no-repeat;
  height: 100%;
}
</style>
