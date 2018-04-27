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

// show all handlebars version
const onGetProjects = (event) => {
  event.preventDefault()
  api.getProjects()
    .then(ui.getProjectsSuccess)
    .catch(ui.getProjectsFailure)
}
// show all Projects
// const onShowAllProjects = function (event) {
//   event.preventDefault()
//   console.log('Is events the the thing you are looking for?')
//
//   const data = getFormFields(event.target)
//   document.getElementById('show-all-projects').reset()
//   api.showAllProjects(data)
//     .then(ui.showAllProjectsSuccess)
//     .catch(ui.showAllProjectsFailure)
// }

// update project onUpdateProject
const onUpdateProject = function (event) {
  event.preventDefault()
  console.log('event onUpdateProject ran')

  const data = getFormFields(event.target)
  // document.getElementById('update-project').reset()
  api.updateProject(data)
    .then(ui.updateProjectSuccess)
    .catch(ui.updateProjectFailure)
}

// delete project
const onDeleteProject = function (event) {
  event.preventDefault()
  console.log('onDeleteProject ran.')

  // const data = $(event.target).attr('data-id')
  const data = $(event.target).closest('ul').attr('data-id')
  // document.getElementById('delete-project').reset()
  api.deleteProject(data)
    .then(ui.showDeleteProjectSuccess)
    .catch(ui.showDeleteProjectFailure)
}

// handlers
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#add-project').on('submit', onAddProject)
  $('#show-all-projects').on('submit', onGetProjects)
  // $('#show-all-projects').on('submit', onShowAllProjects)
  $('#update-project').on('submit', onUpdateProject)
  // $('#delete-project').on('submit', onDeleteProject)
  $('.content').on('click', 'button', onDeleteProject)
}

module.exports = {
  addHandlers
}
