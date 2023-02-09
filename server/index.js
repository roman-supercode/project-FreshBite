import "./config/config.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import { addProduct, getAllProducts } from "./controller/productController.js";

const upload = multer();


const PORT = process.env.PORT;

const app = express();

// middlware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// test route
app.get("/", async (req, res) => {
    res.send("Hello from the Server!");
});

// GET - ALL
app.get("/api/v1/products", getAllProducts);

// POST - ADD
app.post("/api/v1/add", upload.none(), addProduct);

app.listen(PORT, () => console.log("Server is listening on PORT", PORT));