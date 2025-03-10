# **API TypeScript dengan Express dan Daftar Produk Web**

## 📌 **Fitur**
- **Endpoint API `/products`** → Mengembalikan daftar produk.
- **Endpoint API `/test`** → Pengujian sederhana.

## 🛠 **Teknologi yang Digunakan**
### **Backend:**
- **Express.js** (Framework Node.js)
- **TypeScript** (Bahasa Pemrograman)

### **Frontend:**
- **HTML, CSS, JavaScript** (Antarmuka pengguna)

### **depen:**
- **cors**
- **express**
- **typescript**
- **ts-node**
- **@types/express**
- **@types/cors**

## ⚡ **Prasyarat**
- **Node.js** versi **14 atau lebih baru**
- **NPM** (termasuk dalam Node.js)

## 📥 **Instalasi Modul**
Jalankan perintah berikut untuk menginstal dependensi proyek:
```sh
npm install
```

Inisialisasi TypeScript dengan perintah:
```sh
npx tsc --init
```

## 🚀 **Menjalankan Server**
Gunakan perintah berikut untuk menjalankan server API:
```sh
npx ts-node api.ts
```

## Buat File index.html
Masukan Kode ini ke file untuk get data api/buat interface
```sh
</html> <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product List</title>
    <style>
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f7fa;
            color: #333;
        }
        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
            font-size: 2.5em;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }
        #test-message {
            font-size: 1.2em;
            text-align: center;
            margin-bottom: 20px;
            color: #2980b9;
            font-weight: bold;
        }
        #error-message {
            color: #e74c3c;
            text-align: center;
            margin-bottom: 20px;
            font-size: 1.1em;
        }
        .product-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .product-card {
            background-color: #fff;
            border-radius: 10px;
            padding: 15px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .product-card img {
            max-width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 10px;
        }
        .product-card h3 {
            margin: 10px 0;
            font-size: 1.3em;
            color: #34495e;
        }
        .product-card p {
            margin: 5px 0;
            color: #7f8c8d;
            font-size: 1em;
        }
        .price {
            font-weight: bold;
            color: #27ae60;
        }
        .container {
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            max-width: 1300px;
            margin: 0 auto;
        }
        /* Tombol Refresh (Opsional) */
        .refresh-btn {
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            font-size: 1em;
            color: #fff;
            background-color: #3498db;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .refresh-btn:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Daftar Produk</h1>
        <div id="test-message"></div>
        <div id="error-message"></div>
        <div id="product-list" class="product-list"></div>
        <button class="refresh-btn" onclick="displayData()">Refresh Data</button>
    </div>

    <script>
        async function fetchTest() {
            try {
                console.log('Fetching /test...');
                const response = await fetch('/test');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Test data:', data);
                return data;
            } catch (error) {
                console.error('Error fetching test:', error);
                document.getElementById('error-message').textContent = `Error: ${error.message}`;
                return { message: `Gagal mengambil: ${error.message}` };
            }
        }

        async function fetchProducts() {
            try {
                console.log('Fetching /products...');
                const response = await fetch('/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Products data:', data);
                return data;
            } catch (error) {
                console.error('Error fetching products:', error);
                document.getElementById('error-message').textContent = `Error: ${error.message}`;
                return [];
            }
        }

        async function displayData() {
            document.getElementById('product-list').innerHTML = ''; // Kosongkan daftar sebelum refresh
            const testData = await fetchTest();
            document.getElementById('test-message').textContent = `Respon Uji: ${testData.message}`;

            const products = await fetchProducts();
            const productList = document.getElementById('product-list');
            if (products.length === 0) {
                productList.innerHTML = '<p>Tidak ada produk yang bisa ditampilkan.</p>';
                return;
            }

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">Price: $${product.price}</p>
                    <p>ID: ${product.id}</p>
                `;
                productList.appendChild(productCard);
            });
        }

        window.onload = displayData;
    </script>
</body>
</html>
```




# 💡 Salam Interaksi Bun...! 🎯

