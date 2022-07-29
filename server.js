const http = require('http');
const { getProducts } = require('./controllers/productControllers');

const server = http.createServer((req, res) => {
  if (req.url === '/api/products' && req.method === 'GET') {
    getProducts(req, res);
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route Not Found' }));
  }
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
