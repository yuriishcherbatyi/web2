'use strict'

const planetModel = new Planet() // eslint-disable-line no-undef

function initAddForm () {
  const form = window.document.querySelector('#planet-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const planetData = {}
    formData.forEach((value, key) => {
      planetData[key] = value
    })

    planetModel.Create(planetData)

    e.target.reset()
  })
}

function initLists () {
  window.jQuery('#planet-list').DataTable({
    data: planetModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Load capacity', data: 'load capacity' },
      { title: 'Weight', data: 'weight' }
    ]
  })
}

function initListEvents () {
  document.addEventListener('planetsListDataChanged', function (e) {
    const dataTable = window.jQuery('#planet-list').DataTable()

    dataTable.clear()
    dataTable.rows.add(e.detail)
    dataTable.draw()
  }, false)
}

function initDeletingItem () {
  const button = window.document.querySelector('#planet-delete')
  button.addEventListener('click', function (e) {
    e.preventDefault()
    let id = prompt('Enter element`s id to delete: ')
    if (id.match(/^[a-z]+$/i) || Number(id) > planetModel.Select().length) {
      alert('Type correct data!')
    }
    else {
      planetModel.Delete(Number(id))
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