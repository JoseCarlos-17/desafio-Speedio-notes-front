<template>
 <div id="aside">
    <h1>Anotações</h1>
    <div style="width: 440px; margin: 0px 0px 0px 20px;">
      <NotesListComponent
        :notesList="notesList"/>
    </div>
  </div>
</template>

<script>
  import NotesListComponent from './NotesListComponent.vue';
  export default {
    components: {
      NotesListComponent
    },

    props: ['notesList']
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