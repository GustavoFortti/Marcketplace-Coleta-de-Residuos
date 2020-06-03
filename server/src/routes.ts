import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello world'});
});

export default routes;

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estams acessando no sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar auma informação existemnte no back-end
// DELET: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar usúario
// GET http://localhost:3333/users = Listar usúario
// GET http://localhsot:3333/users/5 = Buscar dados do usúario com ID 5

// Request Param: Parâmetros que vem na prórpia rota que identificam um recurso
// Query Param: Parâmetros que vem na própria toda geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criarção/atualização de informações

// SELECT * FROM users WHERE name = 'Gustavo';
// knex('users').where('name', 'Gustavo').select('*');

// const users = [
//     'Gustavo',
//     'Julia',
//     'Caio',
//     'Diego'
// ];

// app.get('/users', (request, response) => {
//     const search = String(request.query.search);
//     const filteredUsers = search ? users.filter(users => users.includes(search)) : "users";
//     return response.json(filteredUsers);
// });

// app.get('users/:id', (request, response ) => {
//     const id = Number(request.params.id);
//     const user = users[id];
//     return response.json(user);
// });

// app.post('/users', (request, response) => {
//     const data = request.body;
//     console.log(data);
//     const user = {
//         name: data.name,
//         email: data.email
//     };

//     return response.json(user);
// }) 

