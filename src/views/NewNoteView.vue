<template>
  <div id="new-note-screen">
    <h1>Nova Anotação</h1>
    <NewNoteFormComponent />
  </div>
</template>

<script>
  import NewNoteFormComponent from '../components/NewNoteFormComponent.vue';

  export default {
  name: 'App',
  components: {
    NewNoteFormComponent
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
