const express = require("express");
const app = express();
const cors = require('cors');



app.use(cors());
require("./server/config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyProductRoutes = require("./server/routes/product.routes");
AllMyProductRoutes(app);


const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
