const express = require('express');
const app = express();
const port = 3000;
const agentesRoutes = require("./routes/agentesRoutes");
const casosRoutes = require("./routes/casosRoutes");

app.use(express.json()); 
app.use(casosRoutes);
app.use(agentesRoutes);

app.listen(port, () => {
    console.log("servidor rodando");
});
