'use strict'

const store = require('../store')

// sign up
const signUpSuccess = function (data) {
  $('#message').delay(2000).fadeOut(150)
  $('#message').text('Signed up successfully. Please sign in!')
  $('#message').css('background-color', 'green')
  // ('.sign-up-show').addClass('hidden')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').delay(2000).fadeOut(150)
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

// sign in
const signInSuccess = function (data) {
  // $('#message').delay(2000).fadeOut(150)
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  // $('.sign-in-show').delay(2000).addClass('hidden')
  // $('.sign-up-show').addClass('hidden')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('You failed')
  $('#message').css('background-color', 'red')
  console.error('signInFailure ran. Error is :', error)
}

// change-password
const changePasswordSuccess = function (data) {
  $('#message').delay(2000).fadeOut(150)
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
  console.log('changePasswordSuccess ran!')
}

const changePasswordFailure = function () {
  $('#message').delay(2000).fadeOut(150)
  $('#message').text('Password not changed')
  $('#message').css('background-color', 'red')
  // console.error('changePasswordFailure ran. Error is :', error)
}

// sign-out

const signOutSuccess = function (data) {
  // $('#message').delay(2000).fadeOut(150)
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('signOutSuccess ran and was a success!!')
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error('signOutFailure ran.')
  store.user = null
}

// add project
const addProjectSuccess = function (data) {
  // $('#message').delay(2000).fadeOut(150)
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
const showAllProjectsSuccess = function (data) {
  // $('#message').delay(2000).fadeOut(150)
  $('#message').text('Look at all the projects people have added!')
  $('#message').css('background-color', 'green')
  // ('.sign-up-show').addClass('hidden')
  console.log('showAllProjectsSuccess ran. Is this the data you want?:', data)
}

const showAllProjectsFailure = function (error) {
  // $('#message').delay(2000).fadeOut(150)
  $('#message').text('Something went wrong. Try again!')
  $('#message').css('background-color', 'red')
  console.error('showAllProjectsFailure ran. Error is :', error)
}

module.exports = {
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
  showAllProjectsSuccess,
  showAllProjectsFailure
}
