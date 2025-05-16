<template>
  <div id="header">
    <el-menu
      class="el-menu-demo"
      mode="horizontal">
        <el-menu-item v-for="data in data" :key="data.id">
          <router-link :to="data.link">{{ data.label }}</router-link>
        </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style>
  #header {
    background: white;
    border: 1px solid purple;
    padding: 10px 50px 10px 50px;
    color: black;
  }
</style>
