import mongoose from "mongoose";
const {Schema}  = mongoose;

//Schema defines the structure of documents in a collection. typically created using the mongoose.Schema()
//Models are responsible for creating, reading, updating, and deleting documents in the associated collection. created using the 'mongoose.model()'


// //Users Schema and Model
// const UserSchema = new Schema({
//     name: {type:String, required:true},
//     email: {type:String, required:true, unique:true},
//     password:{type:String, required:true},
// },{timestamps:true})
// mongoose.models = {};
// export const Users = mongoose.models.users || mongoose.model("users", UserSchema);

//Products Schema and Model
const ProductSchema = new Schema({
    title: {type:String, required:true},
    slug: {type:String, required:true, unique:true},
    desc: {type:String, required:true},
    img:{type:String, required:true},
    category:{type:String, required:true},
    color: {type:String},
    size: {type:String},
    price: {type:Number,required: true},
    availableQty:  {type:Number,required: true}
},{timestamps:true})
export const Products = mongoose.models.products || mongoose.model("products", ProductSchema);

// //Orders Schema and Model
// const OrderSchema = new Schema({
//     userId:{type: String, required: true},
//     products: [{
//         productId:{type:String, rewquired:true},
//         quantity:{type:Number, required:true}
//     }],
//     address:{type:String, required: true},
//     amount:{type:Number, required:true},
//     status:{type:Number, default: 'Pending', required: true}
// },{timestamps:true})
// mongoose.models = {};
// export const Orders = mongoose.models.orders || mongoose.model("orders", OrderSchema);
