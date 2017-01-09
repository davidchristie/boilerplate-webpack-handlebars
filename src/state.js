module.exports = {
  get,
  set
}

var state = {
  copyrightYear: 2017,
  page: 'home',
  wombles: [{
    name: 'Orinocco',
    email: 'orinocco@wimbledoncommon.net',
    details: 'Tin cans',
    showingDetails: false
  }, {
    name: 'Tomsk',
    email: 'tomsk@wimbledoncommon.net',
    details: 'Plastic bags',
    showingDetails: false
  }, {
    name: 'Bungo',
    email: 'bungo@wimbledoncommon.net',
    details: 'Discarded wombat poop',
    showingDetails: false
  }]
}

function get () {
  return Object.create(state)
}

function set (updated) {
  state = Object.create(updated)
}
