/**
 * Minhas Séries
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://minhas-series.rodrigo3d.com
 * @see https://github.com/rodrigo3d/minhas-series
 */

 import rebase from 're-base';
 import firebase from 'firebase';

//const envs = process.env;

// const config = {
//   apiKey: envs.REACT_APP_FIREB_API_KEY,
//   authDomain: envs.REACT_APP_FIREB_AUTH_DOMAIN,
//   databaseURL: envs.REACT_APP_FIREB_DATABASE_URL,
//   projectId: envs.REACT_APP_FIREB_PROJECT_ID,
//   storageBucket: envs.REACT_APP_FIREB_STORAGE_BUCKET,
//   messagingSenderId: envs.REACT_APP_FIREB_MESSAGING_SENDER_ID
// }

const config = {
  apiKey: "AIzaSyAmD8h25ccy1swW-U593ZiZZ_DQR3oS1CU",
  authDomain: "minhas-series-reactjs.firebaseapp.com",
  databaseURL: "https://minhas-series-reactjs.firebaseio.com",
  projectId: "minhas-series-reactjs",
  storageBucket: "minhas-series-reactjs.appspot.com",
  messagingSenderId: "1025252086394"
}

const app = firebase.initializeApp(config);
const base = rebase.createClass(app.database());
export const auth = firebase.auth();
export const db = firebase.database();

export default base;
