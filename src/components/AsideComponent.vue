<template>
 <div id="aside">
    <h1>Anotações</h1>
    <div style="width: 440px; margin: 0px 0px 0px 20px;">
      <NotesListComponent
        :notesList="notesList"
        :loadSelectedNoteMethod="toNoteSelectedView"
        :deleteSelectedNoteMethod="deleteSelectedNote"
        :noteCreatedDate="noteCreatedDate"
      />
    </div>
  </div>
</template>

<script>
  import { formatNoteCreatedDate } from '@/utils/formatNoteCreatedDate';
  import NotesListComponent from './NotesListComponent.vue';

  export default {
    components: {
      NotesListComponent
    },

    props: ['notesList'],

    methods: {
      noteCreatedDate(date) {
        return formatNoteCreatedDate(date)
      },

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
      }      
    },

    mounted() {
      this.loadSelectedNote()
    }
  }
</script>

<style>
  #aside {
    background: black;
    padding: 50px 0px 50px 0px;
    height: 700px;
    overflow: scroll;
    /* overflow-x: hidden; */
  }
</style>