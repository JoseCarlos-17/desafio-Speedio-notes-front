<template>
  <div id="notes-list-view">
    <h1>Anotações</h1>
    <el-row>
      <el-col :span="8" :offset="8">
        <NotesListComponent :notesList="notesList"/>
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
