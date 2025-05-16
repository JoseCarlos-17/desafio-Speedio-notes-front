<template>
  <el-card class="box-card">
    <div class="card-text-and-buttons">
      <h3 class="card-text">{{ noteData.content }}</h3>
      <i class="el-icon-delete" @click="deleteSelectedNoteMethod(noteData.id)"></i>
      <i class="el-icon-view" @click="loadSelectedNoteMethod(noteData.id)"></i>
    </div>
    <h5>criado em: {{ noteData.created_at }}</h5>
  </el-card>
</template>

<script>
  export default {
    name: 'NoteListItemComponent',
    props: ['noteData', 'deleteSelectedNoteMethod', 'loadSelectedNoteMethod']
  }
</script>

<style>

</style>