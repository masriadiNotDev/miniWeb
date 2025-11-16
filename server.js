const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const fs = require('fs');

app.use(cors());
app.use(express.json());
validData = {
    username : "masriadi",
    password : "rahasia"
};
app.use('/public', express.static('public'));
app.get("/", (req, res) => {
    res.send("server was running");
});

app.post("/login", (req, res) => { 
    const { username, password } = req.body;
    if(username === validData.username && password === validData.password){
        res.json({ status: "success", message: "Login berhasil!" });
    } else {
        res.json({ status: "error", message: "Username atau password salah!" });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});  

