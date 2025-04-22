import moment from 'moment'

function formatNoteCreatedDate(date) {
  return moment(date).format('DD/MM/yyyy HH:mm:ss')
}

export { formatNoteCreatedDate }