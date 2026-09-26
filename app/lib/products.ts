import {Product} from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro",
    price: 1999,
    category: "Laptop",
    stock: 10,
  },
  {
    id: 2,
    name: "iPhone 17",
    price: 999,
    category: "Mobile",
    stock: 25,
  },
  {
    id: 3,
    name: "iPad Pro",
    price: 1199,
    category: "Tablet",
    stock: 15,
  },
  {
    id: 4,
    name: "AirPods Pro",
    price: 249,
    category: "Accessories",
    stock: 50,
  },
];

export async function getProducts(): Promise<Product[]> {
  return [...products];
}

export async function getProductCount(): Promise<number> {
  return products.length;
}