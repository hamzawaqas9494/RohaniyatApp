// Import Firebase scripts for service worker
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Initialize Firebase in service worker
firebase.initializeApp({
  apiKey: "AIzaSyCpEhLh-hE5yjiJz5HFcAOPbSJSxYMCgvo",
  authDomain: "idararohaniyat-1cbcd.firebaseapp.com",
  projectId: "idararohaniyat-1cbcd",
  storageBucket: "idararohaniyat-1cbcd.appspot.com",
  messagingSenderId: "886103293297",
  appId: "1:886103293297:web:25d1c9b248ec08585f8ad0"
});

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Optional: handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
