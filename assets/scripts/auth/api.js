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
    dheaders: {
      contentType: 'application/json'
    },
    data
  })
}

const changePassword = function (data) {
  // console.log('data is ', data)
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
  // console.log('signOut store.user is ', store.user)
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
  // console.log('addProject store.user is ', store.user)
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

const getProjects = function (data) {
  // console.log('getProjects ran')
  return $.ajax({
    url: config.apiUrl + '/projects/' + data.projects.id,
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET',
    data
  })
}

const showAllProjects = function (data) {
  // console.log('show all projects ran')
  return $.ajax({
    url: config.apiUrl + '/projects',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET',
    data
  })
}

const deleteProject = function (data) {
  // console.log('api deleteProject ran ', store.user)
  return $.ajax({
    url: config.apiUrl + '/projects/' + data,
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE'
  })
}

const updateProject = function (data) {
  // console.log(data)
  // console.log('updateProject data is ', store.user)
  return $.ajax({
    url: config.apiUrl + `/projects/` + data.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data

  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addProject,
  getProjects,
  showAllProjects,
  deleteProject,
  updateProject
}
