const express = require ('express');
require('./db/dbConnect')

const app = express();

app.use(express.json())


app.use(require('./routs'))


app.listen(3000, () => {
    console.log('Servidor funcionando na porta 3000')
})