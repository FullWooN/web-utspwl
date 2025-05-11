const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

const app = express();

app.use(cors());
app.use(express.json()); // Gantikan bodyParser.json()
app.use(express.urlencoded({ extended: true })); // Jika ada form-data

app.use('/auth', authRoutes); // Menambahkan rute untuk auth
app.use('/posts', postRoutes); // Menambahkan rute untuk posts

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
