const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('sign up ran!')

  const data = getFormFields(event.target)
  document.getElementById('sign-up').reset()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// sign-in
const onSignIn = function (event) {
  event.preventDefault()
  // console.log('sign in ran!')

  const data = getFormFields(event.target)
  document.getElementById('sign-in').reset()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// change-passwords
const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran!')

  const data = getFormFields(event.target)
  document.getElementById('change-password').reset()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// sign-out
const onSignOut = function (event) {
  event.preventDefault()
  // console.log('sign out ran')

  const data = getFormFields(event.target)
  document.getElementById('sign-out').reset()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// add project
const onAddProject = function (event) {
  event.preventDefault()
  // console.log('add project ran!')

  const data = getFormFields(event.target)
  document.getElementById('add-project').reset()
  api.addProject(data)
    .then(ui.addProjectSuccess)
    .catch(ui.addProjectFailure)
}

const onGetProjects = (event) => {
  event.preventDefault()
  api.getProjects()
    .then(ui.getMyProjectsSuccess)
    .catch(ui.getMyProjectsFailure)
}

const onShowAllProjects = (event) => {
  event.preventDefault()
  api.showAllProjects()
    .then(ui.getProjectsSuccess)
    .catch(ui.getProjectsFailure)
}

// update project onUpdateProject
const onUpdateProject = function (event) {
  event.preventDefault()
  // console.log('event onUpdateProject ran')

  const data = getFormFields(event.target)
  document.getElementById('update-project').reset()
  api.updateProject(data)
    .then(ui.updateProjectSuccess)
    .catch(ui.updateProjectFailure)
}

// delete project
const onDeleteProject = function (event) {
  event.preventDefault()
  // console.log('onDeleteProject ran.')

  // const data = $(event.target).attr('data-id')
  const data = $(event.target).closest('ul').attr('data-id')
  // document.getElementById('delete-project').reset()
  // const gameId = $(event.target).closest('ul').attr('data-id')
  api.deleteProject(data)
    .then(ui.deleteProjectSuccess)
    .catch(ui.deleteProjectFailure)
}

// const onClearProjects = (event) => {
//   event.preventDefault()
//   ui.clearGames()
// }

// handlers
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#add-project').on('submit', onAddProject)
  $('#get-projects').on('submit', onGetProjects)
  $('#show-all-projects').on('submit', onShowAllProjects)
  $('#update-project').on('submit', onUpdateProject)
  // $('#delete-project').on('submit', onDeleteProject)
  $('.content').on('click', 'button', onDeleteProject)
}

module.exports = {
  addHandlers
}
