<template>
  <div id="main-component">
    <div
      v-if="notesList.length == 0"
      style="margin: 200px auto !important;"
    >
      <h1>Você não possui anotações.</h1>
      <i class="el-icon-folder-opened"></i>
      
      <div style="margin-top: 20px;">
        <el-button @click="goToCreateNewNoteFormMethod">
          Criar anotação <i class="el-icon-plus"></i>
        </el-button>
      </div>
    </div>

    <div v-if="!selectedNote.content"></div>

    <div v-if="selectedNote.content">
      <span>
        <b>criado em: {{ noteCreatedDate(selectedNote.created_at) }}</b>
      </span>
      <p class="note-content-main">{{ selectedNote.content }}</p>
    </div>
  </div>  
</template>

<script>
  export default {
    props: [
      'selectedNote',
      'notesList',
      'noteCreatedDate',
      'goToCreateNewNoteFormMethod'
    ],
  }
</script>

<style>
 #main-component {
    color: white;
  }

  .el-icon-plus {
    font-size: 15px;
  }

  .el-icon-folder-opened {
    font-size: 50px;
  }

  .note-content-main {
    font-size: 20px !important;
    padding: 0px 80px 0px 80px;
    margin: 15px 50px 10px 50px;
    text-justify: auto;
    overflow: scroll;
    overflow-x: hidden;
    height: 700px;
    text-align: justify;
  }
</style>