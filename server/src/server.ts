import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
 
app.listen(3333);

// npm WARN server@1.0.0 No description
// npm WARN server@1.0.0 No repository field.

// + @types/cors@2.8.6
// added 1 package from 1 contributor and audited 339 packages in 2.375s

// 3 packages are looking for funding
//   run `npm fund` for details

// server@1.0.0
// ├─┬ https://github.com/sponsors/ljharb
// │ └── resolve@1.17.0
// ├─┬ https://github.com/sponsors/isaacs
// │ └── glob@7.1.6
// └─┬ https://github.com/sponsors/sindresorhus
//   └── is-finite@1.1.0