const express = require('express');
const dbConnection= require('./db');
const cors = require('cors');

const app = express();

app.use(express.json());    

app.use(cors());

dbConnection();


const PORT = 5000;

app.use('/api/admin',require('./Route/adminRoute'));
app.use('/api/service',require('./Route/serviceRoute'));
app.use('/api/user',require('./Route/userRoute'));


app.use("/api/image/",express.static("./Upload"))


// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
