<template>
  <el-row id="new-note-form">
    <el-col :span="16" :offset="4">
      <el-form id="form">
        <el-form-item>
          <el-input
            type="textarea"
            :rows="14"
            placeholder="Please input"
            v-model="note.content" />
        </el-form-item>
        <el-form-item>
          <el-button @click="createNote">Enviar</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>

  export default {
    data() {
      return {
        note: {
          content: ''
        },
      }
    },

    methods: {
      createNote() {
        this.$store.dispatch('createNote', this.note)
        this.$message({
          message: 'Anotação criada',
          type: 'success'
        });
        this.$router.push('/noteslist')
      }
    }
  }
</script>

<style>
  #new-note-form{
    color: white;
  }

  #form {
    margin: 50px 0px 0px 0px;
  }
</style>
