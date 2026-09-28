"use server";

import {products } from "../lib/products";
import {revalidatePath} from "next/cache";  
import {redirect} from "next/navigation";

export type ProductFormState = {
  success: boolean;
  error: string;
};

export async function createProduct( previousState: ProductFormState,formData: FormData) {

  const title = String(formData.get("title") ?? "");
  const price = Number(formData.get("price"));
  const category = String(formData.get("category") ?? "");
  const stock = Number(formData.get("stock"));

  // Server-side validation
  if (title.trim() === "") {
    return {
      success: false,
      error: "Product title is required",
    };
  }

  if (!price || price <= 0) {
    return {
      success: false,
      error: "Price must be greater than 0",
    };
  }

  if (!category) {
    return {
      success: false,
      error: "Category is required",
    };
  }

  if (stock < 0) {
    return {
      success: false,
      error: "Stock cannot be negative",
    };
  }
try{

    const newProduct ={
    id: products.length + 1,
    title,
    price,
    category,
    stock 
  };

  const response = fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newProduct)
});
  
const data = await (await response).json();
console.log("Product created:", data);

  // products.push(newProduct);

  console.log("Product created:", newProduct);

  
}
catch(error){
   console.error(error);

    return {
      success: false,
      error: "Failed to create product",
    };
}
revalidatePath("/products");

  redirect("/products");

}