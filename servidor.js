const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('./src/assets/database/database.json'); // Reemplaza 'path_to_your_database.json' con la ruta a tu archivo JSON
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors()); // Habilitar CORS para todas las rutas

// Si deseas configurar opciones específicas para CORS, puedes hacerlo así:

server.use(cors({
  origin: 'http://localhost:8100', // Permitir solo este origen
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir solo estos métodos
}));


server.use(router);
server.listen(3000, () => {
  console.log('JSON Server está corriendo en http://localhost:3000/');
});
