<template>
  <div id="dashboard-view">
    <el-row class="aside-dashboard-view">
      <el-col :span="8">
        <AsideComponent :notesList="notesList"/>
      </el-col>

      <el-col :span="16" class="main-dashboard-view">
        <MainComponent
          :selectedNote="$store.getters.selectedNote"
          :notesList="notesList"
          :noteCreatedDate="noteCreatedDate"
          :goToCreateNewNoteFormMethod="goToCreateNewNoteForm"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import MainComponent from '../components/MainComponent'
  import AsideComponent from '../components/AsideComponent.vue'
  import { formatNoteCreatedDate } from '@/utils/formatNoteCreatedDate';

  export default {
    name: 'DashboardView',
    components: {
      MainComponent,
      AsideComponent
    },

    methods: {
      loadNotesList() {
        return this.$store.dispatch('getNotesList')
      },

      noteCreatedDate(date) {
        return formatNoteCreatedDate(date)
      },

      goToCreateNewNoteForm(){
        this.$router.push('/newnote')
      },
    },

    computed: {
      notesList() {
        return this.$store.getters.notesList
      }
    },

    mounted() {
      this.loadNotesList()
    }
  }
</script>

<style>
  #dashboard-view {
    color: white;
  }

  .main-dashboard-view {
    padding: 50px 0px 0px 0px;
  }

  .aside-dashboard-view {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>
