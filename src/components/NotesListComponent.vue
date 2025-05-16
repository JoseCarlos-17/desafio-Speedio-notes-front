<template>
  <div id="note-list-component">
    <div v-for="note in notesList" :key="note.id">
      <NoteListItemComponent
        :noteData="note"
        :loadSelectedNoteMethod="loadSelectedNoteMethod"
        :deleteSelectedNoteMethod="deleteSelectedNoteMethod"/>
    </div>    
  </div>
</template>

<script>
  import NoteListItemComponent from './NoteListItemComponent.vue';
  export default {
    name: 'NoteListComponent',

    components: {
      NoteListItemComponent
    },

    props: [
      'notesList',
      'loadSelectedNoteMethod',
      'deleteSelectedNoteMethod',
    ],
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
