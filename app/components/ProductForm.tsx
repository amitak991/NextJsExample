"use client";
import { useState } from "react";
import {useRouter} from "next/navigation";

const ProductForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    category: "",
    stock: 0,
  });
  const [loading, setLoading] = useState(false);
  const [message , setMessage] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {  
        "Content-Type": "application/json" 
      },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }
      setMessage("Product created successfully!");
      setFormData({
        name: "",
        price: 0,
        category: "",
        stock: 0,
      });
      router.push("/products");
      router.refresh();

    } catch (error) {
     setMessage("Error creating product:" + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return(
    <form className="product-form" onSubmit={handleSubmit}>
      <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required  onChange={(e) => setFormData({...formData, name: e.target.value})}/>  
      </div>
      <div>
      <label htmlFor="price">Price:</label>
      <input type="number" id="price" name="price" required onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value) || 0})} />  
      </div>
      <div>
      <label htmlFor="category">Category:</label>
      <input type="text" id="category" name="category" required onChange={(e) => setFormData({...formData, category: e.target.value})} />  
      </div>
      <div>
        <label htmlFor="stock">Stock:</label>
      <input type="number" id="stock" name="stock" required onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value) || 0})} />  
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
        {loading ? "Creating..." : "Create Product"}
      </button>
      {message && <p>{message}</p>}
    </form>
  )

};

export default ProductForm;