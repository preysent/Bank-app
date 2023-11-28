const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.json({"success":true})
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
