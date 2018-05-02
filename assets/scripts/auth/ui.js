'use strict'

const store = require('../store')
const showProjectsTemplate = require('../templates/all-project-listing.handlebars')

const getProjectsSuccess = (data) => {
  // console.log(data)
  const showProjectsHtml = showProjectsTemplate({ projects: data.projects })
  $('.content').html('').append(showProjectsHtml)
  if (data.projects.length === 0) {
    $('.content').html('You\'ll need to add a project first!')
  }
}

const getProjectsFailure = function () {
  $('#message').text('Sorry, Something went wrong. Try again!')
  $('#message').css('background-color', 'red')
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
  // console.error('signUpFailure ran. Error is :', error)
}

// sign up
const signUpSuccess = function (data) {
  $('#auth-message').text('Welcome to the Sharp Project. Please sign in!')
  $('#auth-message').css('background-color', 'green')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 2000)
  $('.sign-up-show').addClass('hidden')
  // console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function () {
  // Fail msg does not fade until replaced by successful signin.
  $('#auth-message').text('Please check username and password and try again.')
  $('#auth-message').css('background-color', 'red')
  // console.error('signUpFailure ran. Error is :', error)
}

// sign in
const signInSuccess = function (data) {
  $('#auth-message').text('You are all signed in. Time to check out some projects!')
  $('#auth-message').css('background-color', 'green')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 2000)
  $('.sign-in-show').addClass('hidden')
  $('.sign-up-show').addClass('hidden')
  $('.sign-in-show').addClass('hidden')
  $('.main').removeClass('hidden')
  // console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function () {
  $('#auth-message').text('Please try again.')
  $('#auth-message').css('background-color', 'red')
  // console.error('signInFailure ran. Error is :', error)
}

// change-password
const changePasswordSuccess = function (data) {
  $('#message-pw').text('Successfully changed password')
  $('#message-pw').css('background-color', 'green')
  setTimeout(function () {
    $('#message-pw').text('')
  }, 3000)
}

const changePasswordFailure = function () {
  $('#message-pw').text('Did not change password')
  $('#message-pw').css('background-color', 'red')
  setTimeout(function () {
    $('#message-pw').text('')
  }, 3000)
}

// sign-out
const signOutSuccess = function (data) {
  $('#message3').text('Signed out successfully')
  $('#message3').css('background-color', 'green')
  setTimeout(function () {
    $('#message3').text('')
  }, 3000)
  $('.sign-up-show').removeClass('hidden')
  $('.sign-in-show').removeClass('hidden')
  $('.main').addClass('hidden')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  $('input[type=number]').val('')
  store.user = null
}

const signOutFailure = function () {
  $('#auth-message').text('Error on sign out')
  $('#auth-message').css('background-color', 'red')
  // console.error('signOutFailure ran.')
  store.user = null
}

// add project
const addProjectSuccess = function (data) {
  $('#message-add').text('You added a project!')
  $('#message-add').css('background-color', 'green')
  setTimeout(function () {
    $('#message-add').text('')
  }, 3000)
  // console.log('onAddProjectSuccess ran. Data is :', data)
}

const addProjectFailure = function () {
  $('#message-add').text('Something went wrong. Try again!')
  $('#message-add').css('background-color', 'red')
  setTimeout(function () {
    $('#message-add').text('')
  }, 3000)
  // console.error('signUpFailure ran. Error is :', error)
}

// update project
const updateProjectSuccess = function (data) {
  $('#message-update').text('Project Updated!')
  $('#message-update').css('background-color', 'green')
  setTimeout(function () {
    $('#message-update').text('')
  }, 2000)
  // console.log('updateProjectSuccess ran.:', data)
}

const updateProjectFailure = function () {
  $('#message-update').text('Something went wrong. Try again!')
  $('#message-update').css('background-color', 'red')
  setTimeout(function () {
    $('message-update').text('')
  }, 2000)
  // console.error('updateProjectFailure ran. Error is :', error)
}

// delete project
const deleteProjectSuccess = function (data) {
  $('#message').text('The project was deleted!')
  $('#message').css('background-color', 'green')
  $('input[type=text]').val('')
  $('input[type=number]').val('')
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
  // console.log('deleteProjectSuccess ran.:', data)
}

const deleteProjectFailure = function () {
  $('#message').text('The project was not deleted.')
  $('#message').css('background-color', 'red')
  $('input[type=text]').val('')
  $('input[type=number]').val('')
  setTimeout(function () {
    $('message').text('')
  }, 3000)
  // console.error('deleteProjectFailure ran. Error is :', error)
}

// const clearProjects = () => {
//   $('.content').empty()
// }

module.exports = {
  getProjectsSuccess,
  getProjectsFailure,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  addProjectSuccess,
  addProjectFailure,
  deleteProjectSuccess,
  deleteProjectFailure,
  updateProjectSuccess,
  updateProjectFailure
  // clearProjects
}
