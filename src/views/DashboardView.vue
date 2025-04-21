<template>
  <div id="dashboard-view">
    <el-row class="aside-dashboard-view">
      <el-col :span="8">
        <AsideComponent :notesList="notesList"/>
      </el-col>
      <el-col :span="16" class="main-dashboard-view">
        <MainComponent />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import MainComponent from '../components/MainComponent'
  import AsideComponent from '../components/AsideComponent.vue'

  export default {
    name: 'DashboardView',
    components: {
      MainComponent,
      AsideComponent
    },

    methods: {
      loadNotesList() {
        return this.$store.dispatch('getNotesList')
      }
    },

    computed: {
      notesList() {
        return this.$store.state.notesList
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
