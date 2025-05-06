<template>
  <div id="header">
    <el-menu
      class="el-menu-demo"
      mode="horizontal">
        <el-menu-item>
          <router-link to="/">Home</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link to="/newnote">Criar anotação</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link to="noteslist">Lista de anotações</router-link>
        </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
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
