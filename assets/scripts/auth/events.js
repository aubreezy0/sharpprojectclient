const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(event.target)
  document.getElementById('sign-up').reset()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// sign-in
const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(event.target)
  document.getElementById('sign-in').reset()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// change-passwords
const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(event.target)
  document.getElementById('change-password').reset()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// sign-out
const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  const data = getFormFields(event.target)
  document.getElementById('sign-out').reset()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// add project
const onAddProject = function (event) {
  event.preventDefault()
  console.log('add project ran!')

  const data = getFormFields(event.target)
  document.getElementById('add-project').reset()
  api.addProject(data)
    .then(ui.addProjectSuccess)
    .catch(ui.addProjectFailure)
}

// show all Projects
const onShowAllProjects = function (event) {
  event.preventDefault()
  console.log('Is events the the thing you are looking for?')

  const data = getFormFields(event.target)
  document.getElementById('show-all-projects').reset()
  api.showAllProjects(data)
    .then(ui.addProjectSuccess)
    .catch(ui.addProjectFailure)
}

// handlers
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#add-project').on('submit', onAddProject)
  $('#show-all-projects').on('submit', onShowAllProjects)
}

module.exports = {
  addHandlers
}
