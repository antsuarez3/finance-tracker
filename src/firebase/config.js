import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCe3QfT61Vh1OGtk_Fjhho-35BADPBrQFQ',
  authDomain: 'mymoney-17f9b.firebaseapp.com',
  projectId: 'mymoney-17f9b',
  storageBucket: 'mymoney-17f9b.appspot.com',
  messagingSenderId: '843369370044',
  appId: '1:843369370044:web:65227f890878c375c69bb9',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
