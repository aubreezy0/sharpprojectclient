'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password/',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (data) {
  console.log('signOut store.user is ', store.user)
  return $.ajax({
    url: config.apiUrl + `/sign-out/`,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const addProject = function (data) {
  console.log('addProject store.user is ', store.user)
  return $.ajax({
    url: config.apiUrl + '/projects',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    method: 'POST',
    data
  })
}

const showAllProjects = function (data) {
  console.log('show all projects store.user is ', store.user)
  return $.ajax({
    url: config.apiUrl + '/projects',
    // headers: {
    //   contentType: 'application/json',
    //   Authorization: 'Token token=' + store.user.token
    // },
    method: 'GET',
    data
  })
}
// const addProject = function (data) {
//   console.log('addProject store.user is ', store.user)
//     return $.ajax({
//     url: config.apiUrl + `/projects/`,
//     method: 'DELETE',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addProject,
  showAllProjects
}
