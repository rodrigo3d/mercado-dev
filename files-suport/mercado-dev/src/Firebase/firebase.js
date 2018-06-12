/**
 * Minhas Séries
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://minhas-series.rodrigo3d.com
 * @see https://github.com/rodrigo3d/minhas-series
 */





  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyCJ8GhrGkYAMKPSrKfXwA9F9LdOIQLaARo",
  //   authDomain: "minhas-seriesreactjs.firebaseapp.com",
  //   databaseURL: "https://minhas-seriesreactjs.firebaseio.com",
  //   projectId: "minhas-seriesreactjs",
  //   storageBucket: "minhas-seriesreactjs.appspot.com",
  //   messagingSenderId: "1022931349289"
  // };
  // firebase.initializeApp(config);

  const config = {
    apiKey: "AIzaSyAmD8h25ccy1swW-U593ZiZZ_DQR3oS1CU",
    authDomain: "minhas-series-reactjs.firebaseapp.com",
    databaseURL: "https://minhas-series-reactjs.firebaseio.com",
    projectId: "minhas-series-reactjs",
    storageBucket: "minhas-series-reactjs.appspot.com",
    messagingSenderId: "1025252086394"
  };

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')
  require('firebase/auth')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())
  const auth = app.auth();
  const db = app.database();

  export {
    db,
    auth,
    base,
  };

//export default base
