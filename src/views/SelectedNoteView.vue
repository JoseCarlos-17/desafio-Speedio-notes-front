<template>
  <div id="selected-note-view">
    <div class="back-button-and-format-date">
      <el-button style="margin-right: 50px;" @click="$router.push('/noteslist')">
        Voltar para a lista
      </el-button>
      <span>
        <b>criado em: {{ formatNoteCreatedDate($store.state.selectedNote.created_at) }}</b>
      </span>
    </div>
    <div>
      <SelectedNoteComponent />
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import SelectedNoteComponent from '../components/SelectedNoteComponent.vue'
  export default {
    name: 'SelectedNoteView',
    components: {
      SelectedNoteComponent
    },

    methods: {
      formatNoteCreatedDate(date) {
        return moment(date).format('DD/MM/yyyy HH:mm:ss')
      }
    }
  }
</script>

<style>
  #selected-note-view{
    color: white;
    padding: 20px 0px 0px 0px;
  }

  .back-button-and-format-date{
    margin: 0px 1090px 20px 80px;
    display: flex;
  }
</style>
