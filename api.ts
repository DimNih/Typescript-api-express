import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname)));

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

let products: Product[] = [
    { 
        id: 1, 
        name: 'Laptop ASUS', 
        price: 1200, 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqYd2wOPltduAhaMd3-jdo-yT1kCAJ3OkKg&s' 
    },
    { 
        id: 2, 
        name: 'iPhone 14', 
        price: 999, 
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1661027205636' 
    },
    { 
        id: 3, 
        name: 'Samsung Tablet', 
        price: 350, 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_PoJSSsHZgOg80epKbacV6Mc232ojZasYg&s' 
    },
    { 
        id: 4, 
        name: 'Sony Headphones', 
        price: 150, 
        imageUrl: 'https://www.sony.co.id/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF' 
    },
    { 
        id: 5, 
        name: 'Canon Camera', 
        price: 800, 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOX6NwstvW8HP9TBfttFuR6WZMZpLhmqMtdw&s' 
    },
];

app.get('/products', (req: Request, res: Response) => {
    res.json(products);
});


app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/test', (req: Request, res: Response) => {
    res.json({ message: 'Hello World' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});