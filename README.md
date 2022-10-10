# Simple personal expense tracker

This app is free to use, all you need is firebase for storing expenses.

[DEMO](https://mrexpense.netlify.app)

## Video Example
<div align="center">
    <img src="./expense-tracker.gif" alt="Example Video" width="59%" align="center" />
</div>

## Instructions:

### 1. `npm install`

### 2. Create firebase account and application

[Firebase login](https://console.firebase.google.com/)
Create Project
Create Firestore database

### 3. Create .env and paste firebase connection code

    REACT_APP_CURRENCY=eur
    REACT_APP_FIREBASE_API_KEY =
    REACT_APP_FIREBASE_AUTH_DOMAIN =
    REACT_APP_FIREBASE_PROJECT_ID =
    REACT_APP_FIREBASE_STORAGE_BUCKET =
    REACT_APP_FIREBASE_MESSAGE_SENDER_ID =
    REACT_APP_FIREBASE_API_ID =

### 4. `npm start`

## 5. If more users are needed

    Create new user in `Authentication` section with email and password.
    Every new user has it's transactions.
    More users more billing treshold. It's already optimized to minimum read and write.
