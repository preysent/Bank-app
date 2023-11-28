const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

const connectToDatabase = require("./utils/DB.js")
connectToDatabase()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserRoutes = require('./routes/user.js');
app.use('/api/user', UserRoutes);

const Transition = require('./routes/Transition.js');
app.use('/api/transition', Transition);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
