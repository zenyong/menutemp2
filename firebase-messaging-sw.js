// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyDfVCowTr9-0zpbKg5bhqjsMD5PAJNpKlo",
    authDomain: "fashiongoat-5099c.firebaseapp.com",
    projectId: "fashiongoat-5099c",
    storageBucket: "fashiongoat-5099c.appspot.com",
    messagingSenderId: "570554360081",
    appId: "1:570554360081:web:7060a8bd1550873cf26cb0",
    measurementId: "G-ZWNFDQV8HV"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message service worker', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});