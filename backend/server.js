import jsonServer from 'json-server';
import middlewares from './middlewares.js';
import router from './router.js';
import Nike from '../public/images/Nike1.jpg'

const server = jsonServer.create();

server.use(middlewares);
server.use(router);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});


// npx json-server --watch db.json --port 8000