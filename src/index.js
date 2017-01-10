/*global $*/

var state = require('./state')
var index = require('./templates/index.hbs')

$(document).ready(render)

function render () {
  $('#app').html(index(getViewData()))
  bindEventListeners()
}

function bindEventListeners () {
  $('#womble-list > button').click(function (e) { toggleWomble(e.target) })
  $('#home-link').click(function () { setPage('home') })
  $('#about-link').click(function () { setPage('about') })
}

function getViewData() {
  var data = state.get()
  switch (data.page) {
  case 'home':
    data.showHome = true
    data.title = 'Home'
    data.subtitle = 'A list of wombles'
    break
  case 'about':
    data.title = 'About'
    data.subtitle = 'Learn about wombles'
    data.showAbout = true
    break
  }
  return data
}

function setPage (page) {
  var data = state.get()
  data.page = page
  state.set(data)
  render()
}

function toggleWomble (elem) {
  var $button = $(elem).closest('button')
  var name = $button.attr('data-name')
  var showingDetails = $button.attr('data-details') === 'true'
  var data = state.get()
  data.wombles = data.wombles.map(function (womble) {
    if (womble.name === name) {
      womble.showingDetails = !showingDetails
    }
    return womble
  })
  state.set(data)
  render()
}
