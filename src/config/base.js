const config = {
  apiKey: "AIzaSyDYB-tyPwkb0wQmtvK3qlI0XxzQjhv3Epc",
  authDomain: "mercadodev-11845.firebaseapp.com",
  databaseURL: "https://mercadodev-11845.firebaseio.com",
  projectId: "mercadodev-11845",
  storageBucket: "gs://mercadodev-11845.appspot.com",
  messagingSenderId: "775857718154"
}

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')
require('firebase/auth')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
export const auth = app.auth();
export const storage = app.storage()
export default base
