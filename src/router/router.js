import Vue from 'vue'
import Router from 'vue-router'
import DashboardView from '../views/DashboardView'
import NotesListView from '../views/NotesListView'
import NewNoteView from '../views/NewNoteView'
import SelectedNoteView from '../views/SelectedNoteView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView
    },

    {
      path: '/noteslist',
      name: 'NotesList',
      component: NotesListView
    },

    {
      path: '/newnote',
      name: 'NewNote',
      component: NewNoteView
    },

    {
      path: '/selectednote/:id',
      name: 'SelectedNote',
      component: SelectedNoteView
    }
  ]
})