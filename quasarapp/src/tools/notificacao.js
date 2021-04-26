function showNotif ($msg) {
  this.$q.notify({
    message: $msg,
    color: 'red'
  })
}
export { showNotif }
