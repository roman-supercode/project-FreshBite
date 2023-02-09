import { connectDB } from "../db/connect.js";
import mongodb from "mongodb";


// GET
export const getAllProducts = async (req, res) => {

    try {
        const db = await connectDB();
        const result = await db.collection("products").find().toArray();
        res.status(200).json(result);

    } catch (error) {
        console.log(error);
        res.status(400).json("Something wrong with GET Route", error);
    }
};

// POST
export const addProduct = async (req, res) => {
    const item = {
        name: req.body.name,
        category: req.body.category,
        price: Number(req.body.price),
        description: req.body.description,
        origin: req.body.origin,
        quantity: Number(req.body.quantity),
        rating: Number(req.body.rating),
        url: req.body.url,
        unit: req.body.unit
    };

    console.log(item);

    try {
        const db = await connectDB();
        const result = await db.collection("products").insertOne(item);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json("Something wrong with POST Route", error);
    }
};