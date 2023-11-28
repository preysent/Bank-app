const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const connectToDatabase = require("./utils/DB.js")
connectToDatabase()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserRoutes = require('./routes/user.js');
app.use('/api/user', UserRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
