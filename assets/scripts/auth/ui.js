'use strict'

const store = require('../store')
const showProjectsTemplate = require('../templates/project-listing.handlebars')

const getProjectsSuccess = (data) => {
  console.log(data)
  const showProjectsHtml = showProjectsTemplate({ projects: data.projects })
  $('.content').append(showProjectsHtml)
  // if (data.projects.length === 0) {
  //   $('.content').html('Time to add a project!')
  // }
}

const getProjectsFailure = function (error) {
  // $('#message').delay(2000).fadeOut(150)
  $('#message').text('Something went wrong. Try again!')
  $('#message').css('background-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

// sign up
const signUpSuccess = function (data) {
  // $('#auth-message').delay(3000).fadeOut(10)
  $('#auth-message').text('Welcome to the Sharp Project. Please sign in!')
  $('#auth-message').css('background-color', 'green')
  $('.sign-up-show').addClass('hidden')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  // $('#auth-message').delay(3000).fadeOut(150)
  $('#auth-message').text('Error on sign up')
  $('#auth-message').css('background-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

// sign in
const signInSuccess = function (data) {
  $('#auth-message').delay(3000).fadeOut(150)
  $('#auth-message').text('You are all signed in. Time to check out some projects!')
  $('#auth-message').css('background-color', 'green')
  $('.sign-in-show').delay(3000).addClass('hidden')
  $('.sign-up-show').addClass('hidden')
  $('.sign-in-show').addClass('hidden')
  $('.main').removeClass('hidden')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#auth-message').text('You failed')
  $('#auth-message').css('background-color', 'red')
  console.error('signInFailure ran. Error is :', error)
}

// change-password
const changePasswordSuccess = function (data) {
  $('#auth-message').delay(2000).fadeOut(150)
  $('#auth-message').text('Successfully changed password')
  $('#auth-message').css('background-color', 'green')
  console.log('changePasswordSuccess ran!')
}

const changePasswordFailure = function () {
  // $('#auth-message').delay(2000).fadeOut(150)
  $('#auth-message').text('Password not changed')
  $('#auth-message').css('background-color', 'red')
  // console.error('changePasswordFailure ran. Error is :', error)
}

// sign-out

const signOutSuccess = function (data) {
  $('#auth-message2').delay(2000).fadeOut(150)
  $('#auth-message2').text('Signed out successfully')
  $('#auth-message2').css('background-color', 'green')
  console.log('signOutSuccess ran and was a success!!')
  $('.sign-up-show').removeClass('hidden')
  $('.sign-in-show').removeClass('hidden')
  $('.main').addClass('hidden')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  store.user = null
}

const signOutFailure = function () {
  $('#auth-message').text('Error on sign out')
  $('#auth-message').css('background-color', 'red')
  console.error('signOutFailure ran.')
  store.user = null
}

// add project
const addProjectSuccess = function (data) {
  // $('#message').delay(3000).fadeOut(150)
  $('#message').text('You added a project!')
  $('#message').css('background-color', 'green')
  // ('.sign-up-show').addClass('hidden')
  console.log('onAddProjectSuccess ran. Data is :', data)
}

const addProjectFailure = function (error) {
  // $('#message').delay(2000).fadeOut(150)
  $('#message').text('Something went wrong. Try again!')
  $('#message').css('background-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

// show all projects
// const showAllProjectsSuccess = function (data) {
// //   const showProjectsHtml = showProjectsTemplate({ projects: data.project })
// //   $('.content').html(showProjectsHtml)
// //   if (data.project.length === 0) {
// //     $('.content').html('Add a project first, it will be super fun!')
// //   }
// // }
//   // $('#message').delay(2000).fadeOut(150)
//   $('#message').text('Look at all the projects people have added!')
//   $('#message').css('background-color', 'green')
//   // ('.sign-up-show').addClass('hidden')
//   console.log('showAllProjectsSuccess ran:', data)
// }
//
// const showAllProjectsFailure = function (error) {
//   // $('#message').delay(2000).fadeOut(150)
//   $('#message').text('Something went wrong. Try again!')
//   $('#message').css('background-color', 'red')
//   console.error('showAllProjectsFailure ran. Error is :', error)
// }

// update project
const updateProjectSuccess = function (data) {
  // $('#message').delay(2000).fadeOut(150)
  $('#message').text('You made it different!')
  $('#message').css('background-color', 'green')
  // ('.sign-up-show').addClass('hidden')
  console.log('updateProjectSuccess ran.:', data)
}

const updateProjectFailure = function (error) {
  // $('#message').delay(2000).fadeOut(150)
  $('#message').text('Something went wrong. Try again!')
  $('#message').css('background-color', 'red')
  console.error('updateProjectFailure ran. Error is :', error)
}

// delete project
const deleteProjectSuccess = function (data) {
  // $('#message').delay(2000).fadeOut(150)
  $('#message').text('Its a goner!')
  $('#message').css('background-color', 'green')
  // ('.sign-up-show').addClass('hidden')
  $('input[type=text]').val('')
  $('input[type=number]').val('')
  console.log('deleteProjectSuccess ran.:', data)
}

const deleteProjectFailure = function (error) {
  // $('#message').delay(2000).fadeOut(150)
  $('#message').text('The project was not deleted.')
  $('#message').css('background-color', 'red')
  $('input[type=text]').val('')
  $('input[type=number]').val('')
  console.error('deleteProjectFailure ran. Error is :', error)
}

module.exports = {
  // showProjectsTemplate,
  // showProjectsHtml,
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
  // showAllProjectsSuccess,
  // showAllProjectsFailure,
  deleteProjectSuccess,
  deleteProjectFailure,
  updateProjectSuccess,
  updateProjectFailure
}
