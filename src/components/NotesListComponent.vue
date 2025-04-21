<template>
  <div id="note-list-component">
    <el-card class="box-card" v-for="note in notesList" :key="note.id">
      <div class="card-text-and-buttons">
        <h3 class="card-text">{{ note.content }}</h3>
        <i class="el-icon-delete" @click="deleteSelectedNote(note.id)"></i>
        <i class="el-icon-view" @click="toNoteSelectedView(note.id)"></i>
      </div>
      <h5>criado em: {{ formattedDate(note.created_at) }}</h5>
    </el-card>
  </div>
</template>

<script>
import moment from 'moment'

  export default {
    props: ['notesList'],

    data() {
      return {
        dateFormatted: '',
      }
    },

    methods: {
      loadSelectedNote(note_id) {
        this.$store.dispatch('showSelectedNote', note_id)
      },

      toNoteSelectedView(note_id) {
        this.$route.fullPath === '/noteslist' ?
        this.$router.push(`/selectednote/${note_id}`) : this.loadSelectedNote(note_id)
      },

      deleteSelectedNote(note_id) {
        this.$confirm('Tem certeza de que deseja excluir esta nota?', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
          center: true
        }).then(() => {
            this.$store.dispatch('deleteSelectedNote', note_id)
            this.$alert("Nota excluída", {
            showConfirmButton: false,
            type: 'success',
            center: true,
          })
          setTimeout(() => {
            this.$router.go(0)
          }, 2000);
        }).catch(error => error);

        
      },

      formattedDate(date) {
        return moment(date).format("DD/MM/yyyy HH:mm:ss")
      }
    },

    mounted() {
      this.loadSelectedNote()
    }
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
