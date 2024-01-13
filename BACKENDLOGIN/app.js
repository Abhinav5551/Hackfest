const express = require('express');
const app = express();
const PORT = 8000;

const admin = require('firebase-admin');

const serviceAccount = require('./credentials.json');

const firebaseConfig = {
  apiKey: "AIzaSyD8hPG8AcNfSmaycMdcr5scJjO7LhqgR6o",
  authDomain: "clean-streets-9b9fb.firebaseapp.com",
  databaseURL: "https://clean-streets-9b9fb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "clean-streets-9b9fb",
  storageBucket: "clean-streets-9b9fb.appspot.com",
  messagingSenderId: "125725420979",
  appId: "1:125725420979:web:5694fa71f6bbb4c9e46fc6",
  measurementId: "G-Y717LZHVGJ"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseURL
});

const cors = require("cors");

app.use(cors());
app.use(express.json());


app.post("/submit", (req, res) => {
  const { file_path, latitude, longitude, description } = req.body;

  // Validate required parameters
  if (!file_path || !latitude || !longitude || !description) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  // Add the data to the Firebase database
  const database = admin.database();
  const submissionsRef = database.ref('submissions');

  const newSubmissionRef = submissionsRef.push();
  newSubmissionRef.set({
    file_path,
    latitude,
    longitude,
    description
  });

  return res.status(200).json({ message: 'Submission successful' });
});

app.get('/submissions', (req, res) => {
  // Retrieve submissions from the Firebase database
  const database = admin.database();
  const submissionsRef = database.ref('submissions');

  submissionsRef.once('value')
    .then((snapshot) => {
      const submissions = snapshot.val();
      return res.status(200).json({ submissions });
    })
    .catch((error) => {
      return res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
