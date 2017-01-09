var state = require('./state')
var index = require('./templates/index.hbs')

document.addEventListener('DOMContentLoaded', render)

function render () {
  var app = document.getElementById('app')
  app.innerHTML = index(getViewData())
  bindEventListeners(app)
}

function bindEventListeners (elem) {
  var lis = elem.getElementsByTagName('li')
  for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function (e) {
      toggleWomble(e.target.parentNode)
    })
  }
  document.getElementById('home-link')
    .addEventListener('click', function () {
      setPage('home')
    })
  document.getElementById('about-link')
    .addEventListener('click', function () {
      setPage('about')
    })
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
  var name = elem.getAttribute('data-name')
  var showingDetails = elem.getAttribute('data-details') === 'true'
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
