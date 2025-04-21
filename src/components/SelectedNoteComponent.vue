<template>
  <div id="selected-note">
    <p class="note-content">{{ $store.state.selectedNote.content }}</p>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('showSelectedNote', this.$route.params.id)
    }
  }
</script>

<style>
  #selected-note{
    color: white;
  }

  h1 {
    font-size: 30px !important;
  }

  .note-content {
    font-size: 20px !important;
    padding: 0px 80px 0px 80px;
    margin: 0px 50px 10px 50px;
    text-justify: auto;
    overflow: scroll;
    overflow-x: hidden;
    height: 700px;
    text-align: justify;
  }
</style>
