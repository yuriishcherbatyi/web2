'use strict'

const stationModel = new Station() // eslint-disable-line no-undef

function initAddForm () {
  const form = window.document.querySelector('#station-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const stationData = {}
    formData.forEach((value, key) => {
      stationData[key] = value
    })

    stationModel.Create(stationData)

    e.target.reset()
  })
}

function initLists () {
  window.jQuery('#station-list').DataTable({
    data: stationModel.Select(),
    columns: [
      { title: 'ID', data: 'id'},
      { title: 'Load capacity', data: 'load capacity'},
      { title: 'Availability', data: 'availability'}
    ]
  })
}

function initListEvents () {
  document.addEventListener('stationsListDataChanged', function (e) {
    const dataTable = window.jQuery('#station-list').DataTable()

    dataTable.clear()
    dataTable.rows.add(e.detail)
    dataTable.draw()
  }, false)
}

function initDeletingItem () {
  const button = window.document.querySelector('#station-delete')
  button.addEventListener('click', function (e) {
    e.preventDefault()
    let id = prompt('Enter element`s id to delete: ')
    if (id.match(/^[a-z]+$/i) || Number(id) > stationModel.Select().length) {
      alert('Type correct data!')
    }
    else {
      stationModel.Delete(Number(id))
    }
    e.target.reset()
  })
}
window.addEventListener('DOMContentLoaded', e => {
  initAddForm()
  initLists()
  initListEvents()
  initDeletingItem()
})