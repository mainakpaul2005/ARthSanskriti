// filepath: d:\Coding\Projects\ARthSanskriti\ARthSanskriti\lib\firebase.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, initializeAuth } from 'firebase/auth';
import 'react-native-get-random-values';
// @ts-ignore - React Native persistence
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';

// Firebase configuration from google-services.json
const firebaseConfig = {
  apiKey: 'AIzaSyDzMDGV4_4snJGSPrJAcTICCEB4sHlr5qw',
  authDomain: 'arthsanskriti-82113.firebaseapp.com',
  projectId: 'arthsanskriti-82113',
  storageBucket: 'arthsanskriti-82113.firebasestorage.app',
  messagingSenderId: '1071598081018',
  appId: '1:1071598081018:android:ca1f570c7f9a5212888a43',
};

// Ensure single app instance
const app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);

// Use RN persistence on native; web uses default
const isNative = typeof document === 'undefined';
const auth = isNative
  ? initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) })
  : getAuth(app);

export { app, auth };

