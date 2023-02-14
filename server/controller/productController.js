// import { connectDB } from "../db/connect.js";
// import mongodb from "mongodb";
import Product from "../models/Product.js";
import { ObjectId } from "mongodb";

// GET - ALL
export const getAllProducts = async (req, res) => {
  try {
    // rufe alle Produkte aus der DB
    const allProducts = await Product.find();
    // Sende die Produkte als JSON an den Client zurück, mit dem HTTP-Statuscode 200 (OK).
    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
    res.status(400).json("Something wrong with GET Route", error);
  }
};

// POST - ADD
export const addProduct = async (req, res) => {
  // console.log(req.body);

  try {
    // erstelle ein neues Produkt mit den Daten aus dem Anfragekörper
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json("Something wrong with POST Route");
  }
};

// GET - ONE PRODUCT
export const getOneProduct = async (req, res) => {
  const params = req.params.id;
  // console.log(params);

  try {
    // Suche nach spezifischem Produkt anhand der Id
    const oneProduct = await Product.findById(params);
    res.status(200).json(oneProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json("Something wrong with GET ONE Route");
  }
};
