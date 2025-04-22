<template>
  <div id="note-list-component">
    <el-card class="box-card" v-for="note in notesList" :key="note.id">
      <div class="card-text-and-buttons">
        <h3 class="card-text">{{ note.content }}</h3>
        <i class="el-icon-delete" @click="deleteSelectedNoteMethod(note.id)"></i>
        <i class="el-icon-view" @click="loadSelectedNoteMethod(note.id)"></i>
      </div>
      <h5>criado em: {{ noteCreatedDate(note.created_at) }}</h5>
    </el-card>
  </div>
</template>

<script>
  export default {
    props: [
      'notesList',
      'loadSelectedNoteMethod',
      'deleteSelectedNoteMethod',
      'noteCreatedDate'
    ]
  }
</script>

<style>
  .box-card {
    padding: 0px 0px 0px 0px;
    margin: 20px;
  }

  .el-icon-delete {
    margin: 0px 5px 0px 160px;
    font-size: 20px;
  }

  .el-icon-view {
    margin: 0px 5px 0px 10px;
    font-size: 20px;
  }

  .card-text{
    text-align: center;
    white-space: nowrap;
    margin: 0px 0px -10px 0px;
    width: 250px; 
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-text-and-buttons{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
