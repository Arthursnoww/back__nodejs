const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running or port ${PORT}`));

//http://localhost:3000/tasks