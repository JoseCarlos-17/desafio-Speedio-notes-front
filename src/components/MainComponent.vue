<template>
  <div id="main-component">
    <div
      v-if="$store.getters.notesList.length == 0"
      style="margin: 200px auto !important;">
      <h1>Você não possui anotações.</h1>
      <i class="el-icon-folder-opened"></i>
      <div style="margin-top: 20px;">
        <el-button @click="$router.push('/newnote')">
          Criar anotação <i class="el-icon-plus"></i>
        </el-button>
      </div>
    </div>
    <div v-if="!$store.state.selectedNote.content"></div>
    <div v-if="$store.state.selectedNote.content">
      <span>
        <b>criado em: {{ formatNoteCreatedDate($store.state.selectedNote.created_at) }}</b>
      </span>
      <p class="note-content-main">{{ $store.state.selectedNote.content }}</p>
    </div>
  </div>  
</template>

<script>
  import moment from 'moment'

  export default {
    methods: {
      formatNoteCreatedDate(date) {
        return moment(date).format('DD/MM/yyyy HH:mm:ss')
      }
    },

    mounted() {
      this.$store.dispatch('showSelectedNote', this.$route.params.id)
    }
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