import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// index, show, create, update, delete

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points/', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;

// Service pattern
// Repository Patter (Data Mapper)

// routes.post('/points', async (request, response) => {
//     const {
//         name,
//         email,
//         whatsapp,
//         latitude,
//         longitude,
//         city,
//         uf,
//         items
//     } = request.body;

//     const trx = await knex.transaction();

//     const insertedIds =  await trx('points').insert({
//         image: 'image-fake',
//         name,
//         email,
//         whatsapp,
//         latitude,
//         longitude,
//         city,
//         uf,
//     });

//     const point_id = insertedIds[0];

//     const pointItems = items.map((item_id: number) => {
//         return {
//             item_id,
//             point_id,
//         };
//     });
//     await trx('point_items').insert(pointItems);

//     return response.json({ success: true});
// });


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


// import path from 'path';
// const app = express();

// app.use(express.json());
// app.use(routes);

// app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
 
// app.listen(3333);

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

// routes.get('/users', (request, response) => {
//     const data = request.body;
//     console.log(data);
//     const user = {
//         name: data.name,
//         email: data.email
//     };

//     return response.json(user);
// }) 

