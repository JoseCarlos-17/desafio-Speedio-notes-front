import moment from 'moment'

export default function formatNoteCreatedDate(date) {
  return moment(date).format('DD/MM/yyyy HH:mm:ss')
}