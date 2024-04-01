import { NextResponse } from "next/server";

import connectToDb from "@/middleware/mongoose"; // Import your database connection function
import { Products } from "@/schema/mongooseSchemas"; // Import your Products model

//GET products data
export async function GET(req: Request) {
  try {
    await connectToDb();
    const products = await Products.find();
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Internal server error" });
  }
}

//POST products data
export async function POST(req: Request) {
  const reqJson = await req.json();
  await connectToDb();
  for (let i = 0; i < reqJson.length; i++) {
    let newP = await new Products(reqJson[i]);
    await newP.save();
  }
  const products = await Products.find();
  return NextResponse.json({ products });
}

//UPDATE product
export async function PUT(req: Request) {
  await connectToDb();
  const reqJson = await req.json();

  // //Updating single item
  // const updatedProduct = await Products.findByIdAndUpdate(
  //   reqJson._id,
  //   reqJson,
  //   { new: true }
  // );

  //Updating multiple items
  for (let i = 0; i < reqJson.length; i++) {
    await Products.findByIdAndUpdate(reqJson[i]._id, reqJson[i], { new: true });
  }
  //const products = await Products.find();
  return NextResponse.json(
    { message: "Success updated the product" },
    { status: 201 }
  );
}

//DELETE a product
export async function DELETE(req: Request) {
  await connectToDb();
  const reqJson = await req.json();

  // //Deleting a single item
  // await Products.findByIdAndDelete(reqJson._id, reqJson);

  //Deleting multiple items
  for (let i = 0; i < reqJson.length; i++) {
    await Products.findByIdAndDelete(reqJson[i]._id, reqJson[i]);
  }
  return NextResponse.json(
    { message: "Deletion successfull" },
    { status: 201 }
  );
}
