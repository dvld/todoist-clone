import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCaIPlD5NoXy95py3JqC4tl65V67CSdUiA',
  authDomain: 'niko-todoist-clone.firebaseapp.com',
  databaseURL: 'https://niko-todoist-clone.firebaseio.com',
  projectId: 'niko-todoist-clone',
  storageBucket: 'niko-todoist-clone.appspot.com',
  messageSenderId: '348606605858',
  apiId: '1:348606605858:web:b72275650eebfc17cf787b',
});

export { firebaseConfig as firebase };