const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes); 

app.listen(3333);

/**
 * Metodos HTTP
 *  GET: Busca uma informação do backend
 *  POST: Cria uma informação no backend
 *  PUT: Altera uma informação no backend
 *  DELETE: Deleta uam informação no backend
 */
/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota "?" Filtros (request.query)
 * Route Params: Parametros utilizados para identificar recursos (request.params)
 * Request Bory: Corpo da requisição utilizado para criar ou alterar recursos
 */

 /**
  * Sera utilizado o banco SQLite
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where     UTILIZA LINGUAGEM JAVASCRIPT
  */