const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 80;

const BACKEND_API = 'http://10.0.2.45:3000/api/produk';

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const response = await fetch(BACKEND_API);
    const produk = await response.json();
    res.render('index', { produk });
  } catch (err) {
    res.send('❌ Gagal ambil data produk: ' + err.message);
  }
});

app.listen(port, () => {
  console.log(`✅ Frontend UI jalan di http://localhost:${port}`);
});

