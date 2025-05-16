<template>
  <div id="new-note-screen">
    <h1>Nova Anotação</h1>
    <NoteFormComponent @createMethod="createNote" />
  </div>
</template>

<script>
  import NoteFormComponent from '../components/NewNoteFormComponent.vue';

  export default {
  name: 'NewNoteView',

  components: {
    NoteFormComponent
  },

  methods: {
    createNote(note) {
      this.$store.dispatch('createNote', note)
      this.$message({ message: 'Anotação criada', type: 'success' });
      this.$router.push('/noteslist')
    }
  }
}
</script>

<style>
  #new-note-screen {
    color: white;
    padding: 50px 0px 0px 0px;
  }

  h1 {
    color: white !important;
  }
</style>
