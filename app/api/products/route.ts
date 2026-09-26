import {NextResponse, NextRequest } from "next/server";
import {products} from "../../lib/products";

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newProduct = {
    id: products.length + 1,
    name: body.name,
    price: body.price,
    category: body.category,
    stock: body.stock,
  };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}
