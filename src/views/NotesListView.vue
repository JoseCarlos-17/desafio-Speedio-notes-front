<template>
  <div id="notes-list-view">
    <h1>Anotações</h1>
    <el-row>
      <el-col :span="8" :offset="8">
        <NotesListComponent
          :notesList="notesList"
          :loadSelectedNoteMethod="toNoteSelectedView"
          :deleteSelectedNoteMethod="deleteSelectedNote"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import NotesListComponent from '@/components/NotesListComponent.vue';
  export default {
    components: {
      NotesListComponent
    },

    methods: {
      loadNoteList() {
        return this.$store.dispatch('getNotesList')
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
          setTimeout(() => this.$router.go(0), 2000);
        }).catch(error => error);
      }
    },

    computed: {
      notesList() {
        return this.$store.getters.notesList
      }
    },

    mounted() {
      this.loadNoteList()
    }
  }
</script>

<style>
  h1 {
    font-size: 30px !important;
  }
  #notes-list-view {
    padding: 50px 0px 0px 0px;
    height: 700px;
    overflow: scroll;
    overflow-x: hidden;
  }
</style>
