'use strict'

const cargoModel = new Cargo() // eslint-disable-line no-undef

function initAddForm () {
  const form = window.document.querySelector('#cargo-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const cargoData = {}
    formData.forEach((value, key) => {
      cargoData[key] = value
    })

    cargoModel.Create(cargoData)

    e.target.reset()
  })
}

function initLists () {
  window.jQuery('#cargo-list').DataTable({
    data: cargoModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Name', data: 'name' },
      { title: 'Weight', data: 'weight' }
    ]
  })
}

function initListEvents () {
  document.addEventListener('cargoesListDataChanged', function (e) {
    const dataTable = window.jQuery('#cargo-list').DataTable()

    dataTable.clear()
    dataTable.rows.add(e.detail)
    dataTable.draw()
  }, false)
}

function initDeletingItem () {
  const button = window.document.querySelector('#cargo-delete')
  button.addEventListener('click', function (e) {
    e.preventDefault()
    let id = prompt('Enter element`s id to delete: ')
    if (id.match(/^[a-z]+$/i) || Number(id) > cargoModel.Select().length) {
      alert('Type correct data!')
    }
    else {
      cargoModel.Delete(Number(id))
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