// we need to connect to firebase here
// we need to use websocket here as well 
// store 
import express from "express";
import admin from 'firebase-admin';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const credentials = require('../firebase_credentials.json');
admin.initializeApp({
    credential: admin.credential.cert(credentials)
});
const firestoreDb = admin.firestore();

export default firestoreDb;